import isArray from 'lodash.isarray';
import isFunction from 'lodash.isfunction';
import isObject from 'lodash.isobject';
import merge from 'lodash.merge';
import { fromJS } from 'immutable';

export default (oldState, newState) => {
    // Old state is null/undefined? Just assign
    if (oldState === null || oldState === undefined) {
        return newState;
    }

    // Whole state is ImmutableJS? Easiest way to merge
    if (isFunction(oldState.mergeDeep)) {
        return oldState.mergeDeep(newState);
    }

    // newState is ImmutableJS? We can safely use fromJS and merge
    if (isFunction(newState.mergeDeep)) {
        return fromJS(oldState).mergeDeep(newState);
    }

    // Otherwise we need to carefully merge to avoid deprecated warnings from
    // ImmutableJS see #8. We inspect only the first object level, as this is
    // a common pattern with redux!
    const result = { ...oldState };
    for (const key in newState) {
        if (!newState.hasOwnProperty(key)) {
            continue;
        }
        const value = newState[key];

        // Assign if we don't need to merge at all
        if (!result.hasOwnProperty(key)) {
            result[key] = isObject(value) && !isArray(value)
                ? merge({}, value)
                : value;
            continue;
        }

        const oldValue = result[key];

        if (!!oldValue && isFunction(oldValue.mergeDeep)) {
            result[key] = oldValue.mergeDeep(value);
        } else if (!!value && isFunction(value.mergeDeep)) {
            if (!oldValue) {
                result[key] = value;
            } else {
                result[key] = fromJS(oldValue).mergeDeep(value);
            }
        } else if (isObject(value) && !isArray(value)) {
            result[key] = merge({}, oldValue, value);
        } else {
            result[key] = value;
        }
    }

    return result;
};

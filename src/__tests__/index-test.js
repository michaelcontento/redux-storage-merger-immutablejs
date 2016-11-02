import { Map as map } from 'immutable';

import merger from '../index';

describe('merger', () => {
    it('should merge newState into oldState', () => {
        const oldState = { x: 0, y: 0 };
        const newState = { y: 42 };

        merger(oldState, newState)
            .should.deep.equal({ x: 0, y: 42 });
    });

    it('should not convert arrays to objects', () => {
        const oldState = {};
        const newState = { arr: [1, 2] };

        merger(oldState, newState)
            .should.deep.equal({ arr: [1, 2] });
    });

    it('should overwrite changed arrays', () => {
        const oldState = { arr: [1, 2] };
        const newState = { arr: [3, 4] };

        merger(oldState, newState)
            .should.deep.equal({ arr: [3, 4] });
    });

    it('should use mergeDeep on immutable structs', () => {
        const oldState = map({ x: 0, y: 0 });
        const newState = { y: 42 };

        merger(oldState, newState)
            .should.deep.equal(map({ x: 0, y: 42 }));
    });

    it('should use mergeDeep even if only newState is immutable', () => {
        const oldState = { x: 0, y: 0 };
        const newState = map({ y: 42 });

        merger(oldState, newState)
            .should.deep.equal(map({ x: 0, y: 42 }));
    });

    it('should properly merge if old state is null or undefined at the root', () => {
        const newState = { x: 1337, y: 1338 };

        merger(null, newState)
            .should.deep.equal({ x: 1337, y: 1338 });
        merger(void(0), newState)
            .should.deep.equal({ x: 1337, y: 1338 });
    });

    describe('issue #8 - ImmutableJS deprecated warnings', () => {
        it('should properly merge nested immutables', () => {
            const oldState = { nested: map({ x: 42 }) };
            const newState = { nested: { x: 1337 } };

            merger(oldState, newState)
                .should.deep.equal({ nested: map({ x: 1337 }) });
        });

        it('should properly merge nested immutables - switched sides', () => {
            const oldState = { nested: { x: 42 } };
            const newState = { nested: map({ x: 1337 }) };

            merger(oldState, newState)
                .should.deep.equal({ nested: map({ x: 1337 }) });
        });

        it('should properly merge nested non-immutable objects', () => {
            const oldState = { nested: { x: 42 } };
            const newState = { nested: { x: 1337 } };

            merger(oldState, newState)
                .should.deep.equal({ nested: { x: 1337 } });
        });

        it('should properly merge nested non-objects', () => {
            const oldState = { x: 42 };
            const newState = { x: 1337 };

            merger(oldState, newState)
                .should.deep.equal({ x: 1337 });
        });

        it('should properly merge if old state values with null or undefined', () => {
            const oldState = { x: null, y: void(0) };
            const newState = map({ x: 1337, y: 1338 });

            merger(oldState, newState)
                .should.deep.equal(map({ x: 1337, y: 1338 }));
        });
    });
});

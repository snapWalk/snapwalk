import { increment, decrement, reset } from '../redux/actions/action-creators';

export const ENTITY_KEY = {
    FOO: 'foo',
    BAR: 'bar',
    BAZ: 'baz'
};

export const INITIAL_STATE = {
    entities: {
        [ENTITY_KEY.FOO]: {},
        [ENTITY_KEY.BAR]: {},
        [ENTITY_KEY.BAZ]: {}

    },
    counter: 0
};

export const ROUTES = [
    {
        icon  : 'plus',
        path  : null,
        label : 'Increment',
        action: increment
    },
    {
        icon  : 'minus',
        path  : '/decrement',
        label : 'Decrement',
        action: decrement
    },
    {
        icon  : 'history',
        path  : '/reset',
        label : 'Reset',
        action: reset
    }
];

import { useReducer } from 'react';

function reducer(state, action) {
    const { values } = action;

    switch (action.type) {
        case 'TOGGLE': {
            const nextIndex = (state.index + 1) % values.length;
            return {
                index: nextIndex,
                value: values[nextIndex],
            };
        }

        case 'SET': {
            const index = values.indexOf(action.payload);
            if (index === -1) return state;

            return {
                index,
                value: values[index],
            };
        }

        default:
            return state;
    }
}

export function useToggle(passedValues) {
    const values =
        Array.isArray(passedValues) && passedValues.length > 0
            ? passedValues
            : [true, false];

    const [state, dispatch] = useReducer(reducer, {
        index: 0,
        value: values[0],
    });

    const toggle = (value) => {
        if (arguments.length === 0) {
            dispatch({ type: 'TOGGLE', values });
        } else {
            dispatch({ type: 'SET', payload: value, values });
        }
    };

    return [state.value, toggle];
}

// ACTIONS
const INCREMENT_COUNT = "INCREMENT_COUNT";
const DECREMENT_COUNT = "DECREMENT_COUNT";

// ACTION CREATOR
export const incrementCount = () => ({
    type: INCREMENT_COUNT
});
export const decrementCount = () => ({
    type: DECREMENT_COUNT
});

// INITIAL STATE
const initialState = {
    count: 0,
};

// REDUCERS
export default (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            {
                return { ...state,
                    count: state.count + 1
                };
            }
        case DECREMENT_COUNT:
            {
                return { ...state,
                    count: state.count - 1
                };
            }
        default:
            return state;
    }
};
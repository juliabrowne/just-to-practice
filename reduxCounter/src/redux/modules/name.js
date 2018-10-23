const UPDATE_COUNTER_NAME = "UPDATE_COUNTER_NAME";

export const updateCounterName = value => ({
    type: UPDATE_COUNTER_NAME,
    payload: value,
});

const initialState = {
    name: 'Eragon',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COUNTER_NAME:
            {
                return { ...state,
                    name: action.payload
                };
            }
        default:
            return state;
    }
};
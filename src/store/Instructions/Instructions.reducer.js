import {
    SET_INSTRUCTIONS
} from "./Instructions.action";

export const getInitialState = () => ({
    data: null
});

export const InstructionsReducer = (
    state = getInitialState(),
    action
) => {
    switch (action.type) {
        case SET_INSTRUCTIONS:
            const { data } = action;

            return {
                ...state,
                data
            };

        default:
            return state;
    }
}

export default InstructionsReducer;
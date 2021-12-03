import {
    UPDATE_PSYCHOTYPES,
} from './PsychoTypes.action';

export const getInitialState = () => ({
    psychotypes: [],
});

export const PsychoTypesReducer = (
    state = getInitialState(),
    action,
) => {
    switch (action.type) {
    case UPDATE_PSYCHOTYPES:
        const { psychotypes } = action;

        return {
            ...state,
            psychotypes,
        };

    default:
        return state;
    }
};

export default PsychoTypesReducer;

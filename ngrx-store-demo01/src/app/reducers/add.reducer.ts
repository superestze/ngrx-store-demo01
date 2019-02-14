import { Add } from '../moduel/add.model';

export const ADD = 'ADD';

export function addReducer(state: Add[] = [], action) {
    switch (action.type) {
        case ADD:
            return [...state, action.payload];
        default:
            return state;
    }
}

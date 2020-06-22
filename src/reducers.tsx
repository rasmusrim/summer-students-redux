import { Action } from './actions';

export default function nameApp(state = {}, action: Action) {
    let newState = JSON.parse(JSON.stringify(state))

    if (action.type == "UPDATE_NAME") {
        newState.name = action.name;

        return newState;

    }

    if (action.type = "UPDATE_AGE") {
        newState.age = action.age;
        return newState;


    }

    return state;
}
export function updateName(name: string): Action {
    return {
        type: "UPDATE_NAME",
        name
    }
}

export function updateAge(age: number): Action {
    return {
        type: "UPDATE_AGE",
        age
    }
}



export interface Action {
    type: string;
    name?: string;
    age?: number;
}
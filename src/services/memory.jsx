import { createContext, useReducer } from "react";


const lista = [
    {
        id: 1,
        details: 'TEST',
        events: 2,
        frecuency: 'monthly',
        objective: 10,
        deadline: '2026-03-04',
        completed: true,
        completedTimes: 3,
        icon: '🏃',
    }
]

const initialState = {
    order: [],
    objectives: {},
}

function objectiveReducer(state, action) {
    switch (action.type) {
        case 'add': {
            const objectives = action.objectives
            const newState = {
                order: objectives.map(obj => obj.id),
                objectives: objectives.reduce((data, objective) => ({ ...data, [objective.id]: objective }), {})
            };
            return newState;
        }
    }
}

const initialObjectivesState  = objectiveReducer(initialState, { type: 'add', objectives: lista })

export const Context = createContext(null);

export default function Memory({ children }) {
    const [state, dispatch] = useReducer(objectiveReducer, initialObjectivesState )
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

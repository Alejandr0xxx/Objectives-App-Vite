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
        };
        case 'create': {
            const id = Math.random().toString(36).substring(2, 13)
            console.log(`ID: \n${id}`);
            const newObjective = {...action.objective, id}
            const newState = {
                order: [...state.order, id],
                objectives: {
                    ...state.objectives,
                    [id]: newObjective
                }
            }
            console.log(newState)
            return newState
        };
        case 'update':{
            const id = action.objective.id;
            state.objectives[id]={
                ...state.objectives[id],
                ...action.objective
            }
            const newState = {...state}
            return newState
        };
        case 'destroy':{
            const id = action.id
            const newOrder = state.order.filter(obj => obj  !== id);
            delete state.objectives[id]
            const newState = {
                order: newOrder,
                objectives: state.objectives
            };
            return newState
        }

    }
}


const initialObjectivesState = objectiveReducer(initialState, { type: 'add', objectives: lista})

export const Context = createContext(null);

export default function Memory({ children }) {
    const [state, dispatch] = useReducer(objectiveReducer, initialObjectivesState)
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

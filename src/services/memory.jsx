import { createContext, useReducer } from "react";
import { v7 as uuidv7 } from 'uuid';


const memory = localStorage.getItem('objectives');
const initialState = memory ? JSON.parse(memory) : {
    order: [],
    objectives: {}
}
function objectiveReducer(state, action) {
    switch (action.type) {
        case 'add': {
            const objectives = action.objectives
            const newState = {
                order: objectives.map(obj => obj.id),
                objectives: objectives.reduce((data, objective) => ({ ...data, [objective.id]: objective }), {})
            };
            localStorage.setItem('objectives', JSON.stringify(newState))
            return newState;
        };
        case 'create': {
            const id = uuidv7();
            console.log(`ID: \n${id}`);
            const newObjective = { ...action.objective, id }
            const newState = {
                order: [...state.order, id],
                objectives: {
                    ...state.objectives,
                    [id]: newObjective
                }
            }
            localStorage.setItem('objectives', JSON.stringify(newState))
            return newState
        };
        case 'update': {
            const id = action.objective.id;
            state.objectives[id] = {
                ...state.objectives[id],
                ...action.objective
            }
            const newState = { ...state }
            localStorage.setItem('objectives', JSON.stringify(newState))
            return newState
        };
        case 'destroy': {
            const id = action.id
            const newOrder = state.order.filter(obj => obj !== id);
            delete state.objectives[id]
            const newState = {
                order: newOrder,
                objectives: state.objectives
            };
            localStorage.setItem('objectives', JSON.stringify(newState))
            return newState
        }
        default:
            throw new Error();
    }
}


export const Context = createContext(null);

export default function Memory({ children }) {
    const [state, dispatch] = useReducer(objectiveReducer, initialState)
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

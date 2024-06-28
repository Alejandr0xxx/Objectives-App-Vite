import { createContext, useReducer } from "react";
import { v7 as uuidv7 } from 'uuid';


const userData = localStorage.getItem('data');
const initialState = userData ? JSON.parse(userData) : {
    order: [],
    objectives: {},
    profilePicture: null,
    userInfo:{}
}
function objectiveReducer(state, action) {
    switch (action.type) {
        case 'add': {
            const objectives = action.objectives
            const newState = {
                order: objectives.map(obj => obj.id),
                objectives: objectives.reduce((data, objective) => ({ ...data, [objective.id]: objective }), {}),
                profilePicture: state.profilePicture
            };
            localStorage.setItem('data', JSON.stringify(newState))
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
                    [id]: newObjective,
                },
                profilePicture: state.profilePicture,
                userInfo: state.userInfo,
            }
            localStorage.setItem('data', JSON.stringify(newState))
            return newState
        };
        case 'update': {
            const id = action.objective.id;
            state.objectives[id] = {
                ...state.objectives[id],
                ...action.objective,
            }
            const newState = { ...state }
            localStorage.setItem('data', JSON.stringify(newState))
            return newState
        };
        case 'destroy': {
            const id = action.id;
            const newOrder = state.order.filter(obj => obj !== id);
            delete state.objectives[id]
            const newState = {
                order: newOrder,
                objectives: state.objectives,
                profilePicture: state.profilePicture,
                userInfo: state.userInfo
            };
            localStorage.setItem('data', JSON.stringify(newState))
            return newState
        };
            // case 'completeOne': {
            //     const  id= action.id;
            //     alert(`Hola: ${id}`)
            //     return state
            // }
        case 'addPfp':{
            const pfp = action.pfpImage;
            const newState = {
                order: state.order,
                objectives: state.objectives,
                profilePicture: pfp,
                userInfo: state.userInfo
            }
            localStorage.setItem('data', JSON.stringify(newState))
            return newState
        };
        case 'updateUser':{
            const data = action.data;
            const newState ={
                    order: state.order,
                    objectives: state.objectives,
                    profilePicture: state.profilePicture,
                    userInfo: data
            }
            localStorage.setItem('data', JSON.stringify(newState))
            return newState;
        }
        case 'delPfp':{
            const newState = {
                order: state.order,
                objectives: state.objectives,
                userInfo: state.userInfo
            }
            localStorage.setItem('data', JSON.stringify(newState))
            return newState
        }
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

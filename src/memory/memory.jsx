import { createContext, useReducer } from "react";
import { v7 as uuidv7 } from 'uuid';
import PropTypes from 'prop-types';

const userData = localStorage.getItem('data');
const initialState = userData ? JSON.parse(userData) : {
    order: [],
    objectives: {},
    profilePicture: null,
    userInfo: {}
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
        }
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
        }
        case 'update': {
            const id = action.objective.id;
            state.objectives[id] = {
                ...state.objectives[id],
                ...action.objective,
            }
            const newState = { ...state }
            localStorage.setItem('data', JSON.stringify(newState))
            return newState
        }
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
        }
        case 'completeOne': {
            const id = action.id;
            const objective = state.objectives[id];

            if(Number(objective.completedTimes) >= Number(objective.objective)) return state;

            if (objective) {
                const objectiveTimes = Number(objective.objective)
                const events = Number(objective.events);
                const completedTimes = Number(objective.completedTimes)
                const answer = (events + completedTimes);
                const result = answer > objectiveTimes ? objectiveTimes : answer
                objective.completedTimes = result
                const newState = {
                    ...state,
                    objectives: {
                        ...state.objectives,
                        [id]: objective
                    }
                };
                localStorage.setItem('data', JSON.stringify(newState));
                return newState;
            }
            break;
        }
        case 'addPfp': {
            const pfp = action.pfpImage;
            const newState = {
                order: state.order,
                objectives: state.objectives,
                profilePicture: pfp,
                userInfo: state.userInfo
            }
            localStorage.setItem('data', JSON.stringify(newState))
            return newState
        }
        case 'updateUser': {
            const data = action.data;
            const newState = {
                order: state.order,
                objectives: state.objectives,
                profilePicture: state.profilePicture,
                userInfo: data
            }
            localStorage.setItem('data', JSON.stringify(newState))
            return newState;
        }
        case 'delPfp': {
            const newState = {
                order: state.order,
                objectives: state.objectives,
                userInfo: state.userInfo
            }
            localStorage.setItem('data', JSON.stringify(newState))
            return newState
        }
        default:
            return state;
    }   
}


export const MemoryContext = createContext(null);

export default function Memory({ children }) {
    const [state, dispatch] = useReducer(objectiveReducer, initialState)
    return (
        <MemoryContext.Provider value={[state, dispatch]}>
            {children}
        </MemoryContext.Provider>
    )
}

Memory.propTypes = {
    children: PropTypes.node
}

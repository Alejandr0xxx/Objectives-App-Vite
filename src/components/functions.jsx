import localforage from "localforage";

export async function getAllObj(){
    return await localforage.getItem("objectives") || [];
    
}

export async function createObj(data){
    let id = Math.random().toString(36).substring(2,9)
    let objective = {id, createdAt: Date.now(), ...data};
    let objectives  = await getAllObj();
    objectives.unshift(objective);
    await set(objectives);
    return objective;   
    }

export async function updateObj({id, newData}){
    let objectives = await getAllObj();
    let objective = objectives.find(objective => objective.id === id);    
    if(!objective) throw new Error('That objective does not exist!')
    Object.assign(objective, newData)
    await set(objectives);
    return objective;
}

export async function getObj(id){
    let objectives = await getAllObj();
    let objective = objectives.find(objective => objective.id === id);
    return objective || null;
}

function set(objectives){
    return localforage.setItem("objectives", objectives);
}
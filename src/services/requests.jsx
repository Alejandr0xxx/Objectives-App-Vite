export async function requestObjectives(){
    const response = await fetch('/api/objectives');
    const objectives = await response.json();
    return objectives;
}
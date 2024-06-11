import Objective from "./objectives";

const listMock = [{
    'Id': 'Estudiar',
    'Details': 'Learn to code',
    'Period': 'Day',
    'Events': 1,
    'Icon': '👨‍💻',
    'Objective': 365,
    'Deadline': '2025-01-01',
    'Completed': 165,   
}]

function List() {
    return ( 
        listMock.map(meta => <Objective {...meta}/>)
     );
}

export default List;

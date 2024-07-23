function Index({indexYes}) {
    return (
        <>
        {indexYes && 
            <div className=''>
            <h1>Hola</h1>
        </div>}
        </>
    )
}

export const IndexYes = () => <Index indexYes={true}/>

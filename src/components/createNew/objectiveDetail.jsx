function Details() {
    const frecuency = ['daily', 'weekly', 'monthly', 'yearly'];
    const icon = ['💻', '✈️', '🏃', '📚', '🍗'];
    return (
        <div>
            <form action="">
                <label>
                    Describe your objective
                    <input type="text" placeholder="e.g. 52 walks"/>
                </label>
                <label>
                How often do you hope to achieve your objective? (e.g. once a week)
                <div>
                <input type="number" />
                <select>
                {frecuency.map(frecuency => <option key={frecuency} value={frecuency}>{frecuency}</option>)}
                </select>
                </div>                
                </label>
                <label>
                How many times do you hope to achieve you objective?
                    <input type="number" placeholder="7"/>
                </label>
                <label>
                Do you have a deadline?
                    <input type="date" />
                </label>
                <label>
                Have you completed this objetive before?
                    <label>
                        <input name="completed" type="radio"/>
                        Yes
                    </label>
                    <label>
                        <input name="completed" type="radio"/>
                        No
                    </label>
                </label>
                <label>
                Choose an icon
                    <select>
                    {icon.map(icon => <option key={icon} value={icon}>{icon}</option>)}
                    </select>
                </label>
            </form>
            <div>
                <button>Create</button>
                <button>Cancel</button>
            </div>
        </div>
    );
}

export default Details;
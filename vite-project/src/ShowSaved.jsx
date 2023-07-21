
const ShowSaved = ({savedPosters}) => {

    const savedPostersView = () => {


        return (
            <div className="savedPostersView">
                <h3>Saved Posters</h3>
                <div className="savedPostersGrid">
                    {savedPosters.map((poster, index) => <li key={index}>{poster}</li>)}
                </div>
                <button>Back to Main</button>
            </div>
        )
    }

    return (
        <button onClick={savedPostersView}>Show Saved Posters</button>
    )
}

export default ShowSaved;
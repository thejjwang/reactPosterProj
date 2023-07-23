
const ShowSaved = ({savedPosters, handleToggleSave}) => {


    return (
        <div className="savedPostersView">
            <h3>Saved Posters</h3>
            <div className="savedPostersGrid">
                {savedPosters.map((poster, index) =>
                        <div className="posterDiv" key={index}>
                            <img className='poster-img' alt="img" src={poster.image}/>
                            <h3 className='poster-title'>{poster.title}</h3>
                            <p className='poster-quote'>{poster.quote}</p>
                        </div>)}
            </div>
            <button onClick={handleToggleSave}>Back to Main</button>
        </div>
    )
}


export default ShowSaved;
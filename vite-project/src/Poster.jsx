const Poster = ({currentPoster}) => {

    return (
        <div className="posterDiv">
            <img className='poster-img' alt="img" src=""/>
            <h3 className='poster-title'>{currentPoster.title}</h3>
            <p className='poster-quote'>{currentPoster.quote}</p>
        </div>
    )
}

export default Poster;
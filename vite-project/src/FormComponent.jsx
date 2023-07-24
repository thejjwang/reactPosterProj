import { useState } from "react";
import React from "react";

const FormComponent = ({handleFormComponent, setCurrentPoster}) => {
    const [imageInput, setImageInput] = useState('');
    const [titleInput, setTitleInput] = useState('');
    const [quoteInput, setQuoteInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const poster = {
            image: imageInput,
            title: titleInput,
            quote: quoteInput,
        }
        setCurrentPoster(poster);
    }

    return (
        <div className="poster-form hidden">
            <form>
                <h2>Create your own motivational poster</h2>
                <label>Image url</label>
                <input type="text" name="poster-image-url" id="poster-image-url" value={imageInput} onChange={(e) => {setImageInput(e.target.value)}} placeholder="https://gph.is/2n553Ra" />
                <label>Motivational title</label>
                <input type="text" name="poster-title" id="poster-title" value={titleInput} onChange={(e) => {setTitleInput(e.target.value)}}placeholder="Growth Mindset" />
                <label>Motivational quote</label>
                <input type="text" name="poster-quote" id="poster-quote" value={quoteInput} onChange={(e) => {setQuoteInput(e.target.value)}}placeholder="Hang in there!" />
                <button onClick={handleSubmit} className="make-poster">Show my poster</button>
            </form>
            <div className="divider"></div>
            <button className="show-main" onClick={handleFormComponent}>Nevermind, take me back!</button>
        </div>
    )
}

export default FormComponent;
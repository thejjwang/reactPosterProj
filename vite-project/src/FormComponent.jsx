
const FormComponent = () => {

    const makeYourOwnPoster = () => { 

        // const hidePosterShowForm = () => {
        //     return (
        //         <section class="poster-form hidden">
        //             <form>
        //                 <h2>Create your own motivational poster</h2>
        //                 <label for="poster-image-url">Image url</label>
        //                 <input type="text" name="poster-image-url" id="poster-image-url" placeholder="https://gph.is/2n553Ra" />
        //                 <label for="poster-title">Motivational title</label>
        //                 <input type="text" name="poster-title" id="poster-title" placeholder="Growth Mindset" />
        //                 <label for="poster-quote">Motivational quote</label>
        //                 <input type="text" name="poster-quote" id="poster-quote" placeholder="Hang in there!" />
        //                 <button class="make-poster">Show my poster</button>
        //             </form>
        //             <div class="divider"></div>
        //             <button class="show-main">Nevermind, take me back!</button>
        //         </section>
        //     )
        // }
        // hidePosterShowForm()
        
    }

    return (
        <button onClick={makeYourOwnPoster}>Make Your Own Poster</button>
    )
}

export default FormComponent;
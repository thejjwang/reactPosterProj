import Poster from "./Poster"
import ShowSaved from "./ShowSaved"
import FormComponent from "./FormComponent"
import { useState, useEffect } from "react"

  // query selector variables go here 👇

// we've provided you with some data to work with 👇
const images = [
    "src/assets/bees.jpg",
    "src/assets/bridge.jpg",
    "src/assets/butterfly.jpg",
    "src/assets/cliff.jpg",
    "src/assets/elephant.jpg",
    "src/assets/flock.jpg",
    "src/assets/fox.jpg",
    "src/assets/frog.jpg",
    "src/assets/horse.jpg",
    "src/assets/lion.jpg",
    "src/assets/mountain.jpg",
    "src/assets/pier.jpg",
    "src/assets/puffins.jpg",
    "src/assets/pug.jpg",
    "src/assets/runner.jpg",
    "src/assets/squirrel.jpg",
    "src/assets/tiger.jpg",
    "src/assets/turtle.jpg"
];
let titles = [
    "determination",
    "success",
    "inspiration",
    "perspiration",
    "grit",
    "empathy",
    "feelings",
    "hope",
    "believe",
    "try",
    "conviction",
    "accomplishment",
    "achievement",
    "ambition",
    "clarity",
    "challenge",
    "commitment",
    "confidence",
    "action",
    "courage",
    "focus",
    "breathe",
    "gratitude",
    "imagination",
    "kindness",
    "mindfulness",
    "knowledge",
    "opportunity",
    "passion",
    "patience",
    "practice",
    "smile",
    "trust",
    "understanding",
    "wisdom"
];
const quotes = [
    "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
    "You are braver than you believe, stronger than you seem and smarter than you think.",
    "You are confined only by the walls you build yourself.",
    "The one who has confidence gains the confidence of others.",
    "Act as if what you do makes a difference. It does.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Never bend your head. Always hold it high. Look the world straight in the eye.",
    "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    "Believe you can and you're halfway there.",
    "When you have a dream, you've got to grab it and never let go.",
    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    "No matter what you're going through, there's a light at the end of the tunnel.",
    "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
    "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
    'Limit your "always" and your "nevers."',
    "You are never too old to set another goal or to dream a new dream.",
    "Try to be a rainbow in someone else's cloud.",
    "You do not find the happy life. You make it.",
    "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
    "Sometimes you will never know the value of a moment, until it becomes a memory.",
    "The most wasted of days is one without laughter.",
    "You must do the things you think you cannot do.",
    "It isn't where you came from. It's where you're going that counts.",
    "It is never too late to be what you might have been.",
    "Happiness often sneaks in through a door you didn't know you left open.",
    "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
    "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
    "Be the change that you wish to see in the world.",
    "Let us make our future now, and let us make our dreams tomorrow's reality.",
    "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
    "If I cannot do great things, I can do small things in a great way.",
    "Don't wait. The time will never be just right.",
    "With the right kind of coaching and determination you can accomplish anything.",
    "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
    "No matter what people tell you, words and ideas can change the world.",
    "Each person must live their life as a model for others.",
    "A champion is defined not by their wins but by how they can recover when they fall."
];
// added to randomize on load
const initialState = {
    image: images[Math.floor(Math.random() * images.length)],
    quote: quotes[Math.floor(Math.random() * quotes.length)],
    title: titles[Math.floor(Math.random() * titles.length)]}
    
const MainComponent = () => {
    const [savedPosters, setSavedPosters] = useState([]);
    const [currentPoster, setCurrentPoster] = useState(initialState);
    const [showSaved, setShowSaved] = useState(false);
    const [formComponent, setFormComponent] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/posters', {
                    method: 'GET',
                });
                const data = await response.json();
                setSavedPosters(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    const randomize = () => {
        const randomImg = images[Math.floor(Math.random() * images.length)];
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        const randomTitle = titles[Math.floor(Math.random() * titles.length)];
    
        const poster = {
            image: randomImg,
            quote: randomQuote,
            title: randomTitle
        } 
        setCurrentPoster(poster);
    }
    
    const savePoster = async () => {
        try {
            const response = await fetch('http://localhost:3000/posters', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ image: currentPoster.image, title: currentPoster.title, quote: currentPoster.quote})
                });
                const data = await response.json();
                console.log(data);

            } catch (error) {
                console.log(error);
        }
        // added because our initial save wasnt being consolelogged
        // as an object, was interesting how it was being passed properly
        setSavedPosters((prevSavedPosters) => [...prevSavedPosters, currentPoster]);
    }

    const handleToggleSave =  () => {
        // refactored to toggle false or true
        setShowSaved(!showSaved);
    }

    const handleFormComponent = () => {
        setFormComponent(!formComponent);
    }   

    return (
        <div>
            <Poster currentPoster={currentPoster}/>
            <button onClick={savePoster}>Save This Poster</button>
            <button onClick={handleToggleSave}>Show Saved Posters</button>
            <button onClick={randomize}>Show Another Random Poster</button>
            <button onClick={handleFormComponent}>Make Your Own Poster</button>
            {showSaved && (<ShowSaved savedPosters={savedPosters} handleToggleSave={handleToggleSave} />)} 
            {formComponent && (<FormComponent setCurrentPoster={setCurrentPoster} handleFormComponent={handleFormComponent}/> )}
        </div> 
    )
}

export default MainComponent;
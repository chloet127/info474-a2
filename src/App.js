import React from "react";

const viewHeight = 500;
const viewWidth = 500;

const App = () => {
    fetch("https://raw.githubusercontent.com/chloet127/react-parcel-starter/main/spotify_songs.csv")
    .then(response => response.json())
    .then((data) => console.log(data));
    return (
        <div>
            <h1>Exploratory Data Analysis</h1>
            <p>Assignment 2, INFO 474 Sp 2021</p>
        </div>
    );
}

export default App;
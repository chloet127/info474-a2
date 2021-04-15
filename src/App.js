import React from "react";
import {csv} from "d3-fetch";

const viewHeight = 500;
const viewWidth = 500;

const App = () => {
    csv("https://raw.githubusercontent.com/rfordatascience/tidytuesday/master/data/2020/2020-01-21/spotify_songs.csv")
    .then((data) => console.log(data));
    return (
        <div>
            <h1>Exploratory Data Analysis</h1>
            <p>Assignment 2, INFO 474 Sp 2021</p>
        </div>
    );
}

export default App;
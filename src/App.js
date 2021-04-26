import React from "react";
import { useFetch } from "./hooks/useFetch";
import { scaleLinear } from "d3-scale";
import { extent, min, max } from "d3-array";


const App = () => {
    const [data, loading] = useFetch(
        "https://raw.githubusercontent.com/rfordatascience/tidytuesday/master/data/2020/2020-01-21/spotify_songs.csv"
    );
    
    const data_sm = data.slice(0, 100);

    

    const pop_max = max(data_sm.map((d) => {
        return d.track_popularity;
    }));

    const pop_min = min(data_sm.map((d) => {
        return d.track_popularity;
    }));

    console.log(pop_max, pop_min);

    const size = 500;
    const margin = 20;
    const axisTextAlignmentFactor = 3;
    const yScale = scaleLinear()
        .domain(
            extent(data.slice(0, 100), (d) => {
                return d.track_popularity;
            })
        )
        .range([size, size - 250]);

    
    return (
        <div>
            <h1>Exploratory Data Analysis</h1>
            <p>Assignment 2, INFO 474 Sp 2021</p>

            <p>{loading && "loading data!"}</p>

            <h3>Barcode plot</h3>
            <svg 
                width = {size} 
                height = {size} 
                style={{ border: "1px solid black"}}
            >
                <text 
                    x={size / 2 - 20} 
                    y={size - margin + axisTextAlignmentFactor} 
                    style={{ fontSize: 10, fontFamily: "Gill Sans, sans serif"}}
                    textAnchor="end"
                >
                    0
                </text>
                <text 
                    x={size / 2 - 20} 
                    y={yScale(90)} 
                    style={{ fontSize: 10, fontFamily: "Gill Sans, sans serif"}}
                    textAnchor="end"    
                >
                    100
                </text>
                <line 
                    x1={size / 2 - 10}
                    y1= {yScale(90)}
                    x2={size / 2 - 5}
                    y2={yScale(90)} 
                    stroke= "black"
                    strokeOpacity="0.8"
                />
                <line 
                    x1={size / 2 - 10}
                    y1= {size - margin + axisTextAlignmentFactor}
                    x2={size / 2 - 5}
                    y2={size - margin + axisTextAlignmentFactor} 
                    stroke= "black"
                    strokeOpacity="0.8"
                />
                {data.slice(0, 100).map((d, index) => {
                    return <line 
                                key={index}
                                x1={size / 2}
                                y1= {yScale(d.track_popularity)}
                                x2={size / 2 + 20}
                                y2={yScale(d.track_popularity)} 
                               
                                stroke= {
                                    d.track_popularity > "50" ? "green" : "black"
                                }
                                strokeOpacity="0.8"
                            />;
                })}
            </svg>

            <h3>Scatterplot</h3>
            <svg 
                width = {size} 
                height = {size} 
                style={{ border: "1px solid black"}}
            >
                {data.slice(0, 100).map((d, index) => {
                    return <circle 
                                key={index} 
                                cx={size / 2} 
                                cy={size - margin - d.track_popularity} 
                                r={3}
                                fill="none"
                                stroke= {
                                    d.playlist_genre === "pop" ? "green" : "black"
                                }
                                strokeOpacity="0.8"
                                opacity={0.2}
                            />;
                })}
            </svg>

        </div>
    );
}

export default App;
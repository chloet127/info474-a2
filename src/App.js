import React, { useMemo } from "react";
import { useFetch } from "./hooks/useFetch";
import { scaleLinear } from "d3-scale";
import { extent, bin } from "d3-array";
import * as d3 from 'd3';

import Chart1 from './charts/1';
import Chart2 from './charts/2';
import Chart3 from './charts/3';
import Chart4 from './charts/4';
import LineChart from './charts/lineChart';

import data5 from './data/5.json';
import data6 from './data/6.json';
import data7 from './data/7.json';
import data8 from './data/8.json';


const App = () => {
    const [data, loading] = useFetch(
        "https://raw.githubusercontent.com/rfordatascience/tidytuesday/master/data/2020/2020-01-21/spotify_songs.csv"
    );
    
    /* const data_sm = data.slice(0, 100);

    const size = 500;
    const margin = 20;
    const axisTextAlignmentFactor = 3;
    const yScale = scaleLinear()
        .domain(
            extent(data_sm, (d) => {
                return d.track_popularity;
            })
        )
        .range([size, size - 250]);

    _bins = bin().thresholds(30);
    tmaxBins = _bins(
        data.map((d) => {
        return +d.track_popularity;
        })
    );
    
    const histogramLeftPadding = 20;

    const ticks = useMemo(() => {
        const xScale = d3.scaleLinear()
          .domain([0, 100])
          .range([10, 290])
        return xScale.ticks()
          .map(value => ({
            value,
            xOffset: xScale(value)
          }))
    }, []) */   

    
    return (
        <div className='App'>

            <h1>Exploratory Data Analysis</h1>
            <p>Assignment 2, INFO 474 Spring 2021</p>

            <p>{loading && "loading data!"}</p>

            <LineChart data={data6} id={'vis6'}/>
            <LineChart data={data5} id={'vis5'}/>
            <LineChart data={data7} id={'vis7'}/>
            <LineChart data={data8} id={'vis8'}/>
            

            <Chart4 />
            <Chart3 />
            <Chart2 />
            <Chart1 />

            {/* <svg>
                <path
                    d="M 9.5 0.5 H 290.5"
                    stroke="currentColor"
                />
                {ticks.map(({ value, xOffset }) => (
                    <g
                    key={value}
                    transform={`translate(${xOffset}, 0)`}
                    >
                    <line
                        y2="6"
                        stroke="currentColor"
                    />
                    <text
                        key={value}
                        style={{
                        fontSize: "10px",
                        textAnchor: "middle",
                        transform: "translateY(20px)"
                        }}>
                        { value }
                    </text>
                    </g>
                ))}
            </svg>

            <h3> Binning </h3>
            <svg width={size} height={size} style={{ border: "1px solid black" }}>
                {tmaxBins.map((bin, i) => {
                return (
                    <rect
                        x={histogramLeftPadding + i * 11}    
                        y={size - 50 - bin.length}
                        width="10"
                        height={bin.length}
                        
                    />
                );
                })}
            </svg>

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
            </svg> */}

        </div>
    );
}

export default App;
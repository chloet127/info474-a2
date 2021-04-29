import React, { Component } from 'react'
import * as d3 from 'd3'

class Chart2 extends Component {
    
    componentDidMount() {
        const data = [6043, 5153, 5507, 5431, 5743, 4951]
        this.drawBarChart(data)
    }

    drawBarChart(data)  {
        const canvasHeight = 400
        const canvasWidth = 600
        const scale = 20
        const color = d3.scaleOrdinal([`#383867`, `#584c77`, `#33431e`, `#a36629`, `#92462f`, `#b63e36`]);

        const svgCanvas = d3.select(this.refs.canvas)
            .append("svg")
            .attr("width", canvasWidth)
            .attr("height", canvasHeight)
            .style("border", "1px solid black")
        svgCanvas.selectAll("rect")
            .data(data).enter()
                .append("rect")
                .attr("width", 40)
                .attr("height", (datapoint) => datapoint * scale)
                .attr("fill", function(d,i) {
                    return color(i);
                })
                .attr("x", (datapoint, iteration) => iteration * 45)
                .attr("y", (datapoint) => canvasHeight - datapoint / scale)
         svgCanvas.selectAll("text")
            .data(data).enter()
            .append("text")
            .attr("x", (dataPoint, i) => i * 45 + 10)
            .attr("y", (dataPoint, i) => canvasHeight - dataPoint / scale - 10)
            .text(dataPoint => dataPoint)

        var keys = ['edm', 'latin', 'pop', 'r&b', 'rap', 'rock']

        svgCanvas.selectAll("mydots")
        .data(keys)
        .enter()
        .append("circle")
            .attr("cx", canvasWidth - 90)
            .attr("cy", function(d,i){ return 100 + i*25})
            .attr("r", 7)
            .style("fill", function(d){ return color(d)})

        svgCanvas.selectAll("mylabels")
        .data(keys)
        .enter()
        .append("text")
            .attr("x", canvasWidth - 70)
            .attr("y", function(d,i){ return 100 + i*25})
            .style("fill", function(d){ return color(d)})
            .text(function(d){ return d})
            .attr("text-anchor", "left")
            .style("alignment-baseline", "middle")
        
        svgCanvas.append("text")
            .attr("x", (canvasWidth / 2))             
            .attr("y", 50)
            .attr("text-anchor", "middle")  
            .style("font-size", "16px") 
            .style("text-decoration", "underline")  
            .text("Number of Songs per Genre");
    }
    render() { return <div ref="canvas"></div> }
}
export default Chart2
import React, { Component } from 'react'
import * as d3 from 'd3'

class Chart4 extends Component {
              
    componentDidMount() {           
        const data = [1206,1511,1517,1809,1655,1262,948,1288,1298,1408,1672,1129,1256,1637,1133,1405,1456,1322,1674,1291,1065,1296,1485,1105]
        this.drawBarChart(data)
    }

    drawBarChart(data)  {
        const canvasHeight = 400
        const canvasWidth = 1100
        const scale = 20
        const color = d3.scaleOrdinal([`#383867`, `#383867`,`#383867`,`#383867`,
            `#584c77`, `#584c77`,`#584c77`,`#584c77`,
            `#33431e`, `#33431e`,`#33431e`,`#33431e`,
            `#a36629`, `#a36629`,`#a36629`,`#a36629`,
            `#92462f`, `#92462f`,`#92462f`,`#92462f`,
            `#b63e36`, `#b63e36`, `#b63e36`, `#b63e36`]);

        const svgCanvas = d3.select(this.refs.canvas)
            .append("svg")
            .attr("width", canvasWidth)
            .attr("height", canvasHeight)
            .style("border", "1px solid black")
        svgCanvas.selectAll("rect")
            .data(data).enter()
                .append("rect")
                .attr("width", 30)
                .attr("height", (datapoint) => datapoint * scale)
                .attr("fill", function(d,i) {
                    return color(i);
                })
                .attr("x", (datapoint, iteration) => iteration * 35)
                .attr("y", (datapoint) => canvasHeight - datapoint / scale)
         svgCanvas.selectAll("text")
            .data(data).enter()
            .append("text")
            .attr("x", (dataPoint, i) => i * 35)
            .attr("y", (dataPoint, i) => canvasHeight - dataPoint / scale - 10)
            .text(dataPoint => dataPoint)

        var keys = ['big room','electro house','pop edm','progressive electro house',
            'latin hip hop','latin pop','reggaeton','tropical',
            'dance pop','electropop','indie poptimism','post-teen pop',
            'hip pop','neo soul','new jack swing','urban contemporary',
            'gangster rap','hip hop','southern hip hop','trap',
            'album rock','classic rock','hard rock','permanent wave'] 

        svgCanvas.selectAll("mydots")
        .data(keys)
        .enter()
        .append("circle")
            .attr("cx", canvasWidth - 220)
            .attr("cy", function(d,i){ return 30 + i*15})
            .attr("r", 7)
            .style("fill", function(d){ return color(d)})

        svgCanvas.selectAll("mylabels")
        .data(keys)
        .enter()
        .append("text")
            .attr("x", canvasWidth - 200)
            .attr("y", function(d,i){ return 30 + i*15})
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
            .text("Number of Songs per Subgenre");
    }
    render() { return <div ref="canvas"></div> }
}
export default Chart4
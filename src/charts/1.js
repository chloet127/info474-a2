import React, { Component } from 'react';
import vegaEmbed from 'vega-embed';
import data from '../data/6.json';

class Chart1 extends Component {

  componentDidMount() {
    this.drawChart(data)
  }

  drawChart(data) {
    const spec = data;
    vegaEmbed("#vis1", spec)
      // result.view provides access to the Vega View API
      .then(result => console.log(result))
      .catch(console.warn);
  }

  render() { return <div id='vis1'></div>}
}

export default Chart1;
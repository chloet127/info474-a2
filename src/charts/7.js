import React, { Component } from 'react';
import vegaEmbed from 'vega-embed';
import data from '../data/7.json';

class Chart7 extends Component {

  componentDidMount() {
    this.drawChart(data)
  }

  drawChart(data) {
    const spec = data;
    vegaEmbed("#vis7", spec)
      // result.view provides access to the Vega View API
      .then(result => console.log(result))
      .catch(console.warn);
  }

  render() { return <div id='vis7'></div>}
}

export default Chart7;
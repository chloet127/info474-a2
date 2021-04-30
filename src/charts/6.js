import React, { Component } from 'react';
import vegaEmbed from 'vega-embed';
import data from '../data/6.json';


class Chart6 extends Component {

  componentDidMount() {
    this.drawChart(data)
  }

  drawChart(data) {
    const spec = data;
    vegaEmbed("#vis6", spec)
      // result.view provides access to the Vega View API
      .then(result => console.log(result))
      .catch(console.warn);
  }

  render() { return <div id='vis6'></div>}
}

export default Chart6;
import React, { Component } from 'react';
import vegaEmbed from 'vega-embed';


class LineChart extends Component {

  componentDidMount() {
    this.drawChart(this.props.data, this.props.id)
  }

  drawChart(data, id) {
    const spec = data;
    vegaEmbed('#' + id, spec)
      .then(result => console.log(result))
      .catch(console.warn);
  }

  render() { return <div id={this.props.id}></div>}
}

export default LineChart;
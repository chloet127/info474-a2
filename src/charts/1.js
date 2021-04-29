import React from 'react';
import { Vega } from 'react-vega';
import data1 from '../data/spotify_songs.json';

// chart config
const jobpalBlue = '#e0e0e0';
const jobpalLightGrey = '#0084FF';
const jobpalDarkGrey = '#9e9e9e';

const areaMark = {
  type: 'area',
  color: jobpalBlue,
  interpolate: 'monotone',
};

const getDateXObj = rangeLen => ({
  field: 'track_album_release_date',
  type: `${rangeLen > 30 ? 'temporal' : 'ordinal'}`,
  timeUnit: 'yearmonthdate',
  axis: {
    title: 'Date',
    labelAngle: -45,
  },
});

const getQuantitativeYObj = (field, title, values) => ({
  field,
  type: 'quantitative',
  axis: {
    title,
    format: 'd',
    values,
  },
});

const legendConfig = {
  title: null,
  offset: -106,
  padding: 5,
  strokeColor: jobpalDarkGrey,
  strokeWidth: 2,
  symbolType: 'stroke',
  symbolOffset: 0,
  symbolStrokeWidth: 10,
  labelOffset: 0,
  cornerRadius: 10,
  symbolSize: 100,
  clipHeight: 20,
};

const getSpec = (yAxisValues = [], rangeLen = 0) => ({
  $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
  title: 'Demo Chart',
  layer: [
    {
      mark: {
        ...areaMark,
        color: jobpalLightGrey,
      },
      encoding: {
        x: getDateXObj(rangeLen),
        y: getQuantitativeYObj('danceability', '', yAxisValues),
        stroke: {
          field: 'symbol',
          type: 'ordinal',
          scale: {
            domain: ['danceability', 'energy'],
            range: [jobpalLightGrey, jobpalBlue],
          },
        },
      },
    }, {
      mark: areaMark,
      encoding: {
        x: getDateXObj(rangeLen),
        y: getQuantitativeYObj('energy', '', yAxisValues),
      },
    },
  ],
  config: {
    legend: legendConfig,
  },
})




const data = data1.slice(0, 10)

// React component
const Chart1 = () => {
  // get max value from data arary
  const yAxisMaxValueFor = (...keys) => {
    const maxList = keys.map(key => data.reduce(
         // find the item containing the max value
        (acc, cur) => (cur[key] > acc[key] ? cur : acc)
      )[key]
    );
    return Math.max(...maxList);
  };

  const yAxisValues = Array.from(
    { length: yAxisMaxValueFor('energy', 'danceability') },
  ).map((v, i) => (i + 1));

  const spec = getSpec(yAxisValues, data.length);

  return (
    <div>
      <Vega
        spec={{
          ...spec,
          autosize: 'fit',
          resize: true,
          contains: 'padding',
          width: 400,
          height: 300,
          data: { values: data },
        }}
      />
    </div>
  );
}

export default Chart1;
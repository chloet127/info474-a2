import React from 'react';

import VegaChart from './charts/vegaChart';
import final1 from './data/final1.json';
import final2 from './data/final2.json';

function Final() {

  return (
    <div className='container'>
      <div className='flex-child'>
        <h1>Interactive Dashboard: Spotify Songs</h1>
        <p>Final Project, INFO 474 Spring 2021</p>
      </div>

      <div className='flex-child'>
        <Intro />
      </div>

      <p>[Title] shows how several different features within the dataset affect the track’s popularity (rated from 0-100, greater the number the better). Each data point in the series of scatter plots represents a single song. Each song is color coded by genre (legend on the right). Interactions include the ability to zoom in and out on all the visualizations at once and a year filter which looks at the data for a specific year.</p>

      <div className='flex-child'>
        <VegaChart data={final2} id={'final2'} />
      </div>

      <p>[Title] is a scatter plot that takes into account the Track Popularity, Year, and Danceability variables. Each data point represents a song. Each song is color coded by Danceability (0.0 is least danceable and 1.0 is most danceable). Interactivity includes the ability to select a subset of the data by genre using the dropdown. For clarification, the null option looks at songs of all genres.</p>

      <div className='flex-child'>
        <VegaChart data={final1} id={'final1'} />
      </div>

      <div className='flex-child'>
        <WriteUp />
      </div>

    </div>
  );
}

function Intro(){
  return(
    <div>
      <h2>Introduction</h2>
      <p>
      Spotify is one of the best music streaming platforms available. Founded by Swedish creators Daniel Ek and Martin Lorentzon, Spotify launched in October 2008 and has since become a household name in the music streaming industry. The visualizations below are based on a spotify_songs dataset (containing data from the years 2000-2020) found <a href="https://github.com/rfordatascience/tidytuesday/tree/master/data/2020/2020-01-21">here</a>. This dataset contains several variables. The ones contained in the visualizations can be found alongside a description pulled from the link above in the table below. These visualizations are meant to give people insight into the songs available on Spotify, while also being flexible to allow for further exploration of the data.
      </p>
      <br />
      <table>
        <thead>
              <tr>
                  <th>Variable</th>
                  <th>Description</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>Year</td>
                  <td>Year that song was released (2000-2020)</td>
              </tr>
              <tr>
                  <td>track_popularity</td>
                  <td>Song Popularity (0-100) where higher is better</td>
              </tr>
              <tr>
                  <td>playlist_genre</td>
                  <td>Playlist genre</td>
              </tr>
              <tr>
                  <td>energy</td>
                  <td>Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.</td>
              </tr>
              <tr>
                  <td>loudness</td>
                  <td>The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks. Loudness is the quality of a sound that is the primary psychological correlate of physical strength (amplitude). Values typical range between -60 and 0 db.</td>
              </tr>
              <tr>
                  <td>speechiness</td>
                  <td>Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value. Values above 0.66 describe tracks that are probably made entirely of spoken words. Values between 0.33 and 0.66 describe tracks that may contain both music and speech, either in sections or layered, including such cases as rap music. Values below 0.33 most likely represent music and other non-speech-like tracks.</td>
              </tr>
              <tr>
                  <td>acousticness</td>
                  <td>A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic.</td>
              </tr>
              <tr>
                  <td>instrumentalness</td>
                  <td>Predicts whether a track contains no vocals. “Ooh” and “aah” sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly “vocal”. The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0.</td>
              </tr>
              <tr>
                  <td>liveness</td>
                  <td>Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live. A value above 0.8 provides strong likelihood that the track is live.</td>
              </tr>
              <tr>
                  <td>valence</td>
                  <td>A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).</td>
              </tr>
              <tr>
                  <td>tempo</td>
                  <td>The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.</td>
              </tr>
              <tr>
                  <td>danceability</td>
                  <td>Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable.</td>
              </tr>
          </tbody>
      </table>
    </div>
  );
}

function WriteUp(){
  return(
    <div>
      <h2>Written Analysis</h2>
      <p>

      </p>
    </div>
  );
}

export default Final;

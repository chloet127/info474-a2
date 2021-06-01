import React from 'react';

import VegaChart from './charts/vegaChart';
import a3 from './data/a3.json';

function Assignment3() {

  return (
    <div className='container'>
      <div className='flex-child'>
        <h1>Interative Data Visualization</h1>
        <p>Assignment 3, INFO 474 Spring 2021</p>
      </div>

      <div className='flex-child'>
        <h3>Danceability vs. Energy Over Time (2000-2020)</h3>
        <VegaChart data={a3} id={'a3'} />
      </div>

      <div className='flex-child'>
        <WriteUp />
      </div>

    </div>
  );
}

function WriteUp(){
  return(
    <div>
      <h2>Written Analysis</h2>
      <p>
        The interactive visualization that we chose to design looks at two main variables, danceability and energy, in the 
        spotify_songs dataset found <a href="https://github.com/rfordatascience/tidytuesday/tree/master/data/2020/2020-01-21">here</a>. 
        Both of these variables are numeric data types. The greater the value for danceability, the easier it is to dance 
        to the song. The energy variable has a similar concept where the greater the value, the more energetic the song is. 
        Since the variables are numeric, we chose to create a scatter plot to see if there was any relationship between the 
        two variables. Another variable we decided to look at is the genre variable which is categorical and includes values 
        like edm, pop, rap, etc. to see if it was connected to the other variables. Due to the amount of data in the dataset, 
        we color coded some data points based on the genre. Furthermore, we made the colored data points larger than the grayed 
        out data points to make it easier for the viewer to see.
      </p>
      <p>
        We chose to implement four interactive techniques: panning, zooming, tooltips, and a slider filter. We implemented 
        the tooltips feature because it gives the reader/audience the ability to explore individual data points and view the 
        specific  energy and danceability value. There are a lot of data points contained in the visualization, so at first 
        glance, readers would not be able to tell what the danceability and energy values are for the data points. The tooltips 
        help to remove any confusion and the need to estimate the values. Additionally, we opted for a slider filter on the 
        year variable so people would be able to see the trend and change of danceability and energy by playlist genre over time. 
        For instance, if we start the year filter in 2000 and  we move the year slider to 2020, we see that over time, the 
        EDM genre has very energetic and high danceability music. Adding on, the query filter for the year helps narrow the 
        scope of the data users want to interact with. An alternative we considered was having the year on the x axis so that 
        users can see all of the years at once rather than a query filter, but we wanted our visualization to be reader driven 
        so that they can explore and find patterns or trends on their own by adjusting the year slider filter.
      </p>
      <p>
        Furthermore, we added the zooming ability to allow for more flexibility in terms of data exploration. Zooming in allows 
        the user to easily see certain data points that looked clustered or grouped together on the scatter plot. Zooming out 
        allows the user to see data points that are close to each other and see certain groups. The panning feature allows users 
        to further explore the data points by looking at a certain region of the scatterplot.
      </p>
      <p>
        We split the teamwork into three different roles: 1) team members who created the graphic (Chloe and Phung), 2) a team 
        member who set up the routing using React (Annie), and 3) team members who worked on the write-up (Amy and Angela). The team 
        also met to discuss roles, connect over Messenger, and decide on which dataset to use. The repository that we decided 
        to build off of was initially developed by Chloe. Chloe and Phung spent over 2 hours creating the interactive visualization. 
        Annie spent around 2 hours setting up React Router. Amy and Angela spent about an hour writing, editing, and finalizing 
        the write-up. The aspect that took the most time was creating the interactive visualization because we wanted 
        to implement multiple interactive features, so getting all of the features to work together on the visualization 
        was a challenge. 
      </p>
    </div>
  );
}

export default Assignment3;
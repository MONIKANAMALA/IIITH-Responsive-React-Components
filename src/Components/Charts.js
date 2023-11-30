import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
const ChartComponent = () => {
  useEffect(() => {
    // setup for Chart 1
    const data1 = {
      
      labels: ['Arjit - 90%', 'Anurag - 75%', 'Sid - 80% ', 'Selena - 75%', 'Chitra - 75%', 'Shreya - 90%'],
      datasets: [{
        label: 'Favorite Singers',
        data: [90, 75, 80, 85, 75, 90],
        backgroundColor: [
          'rgba(255, 26, 104, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(0, 0, 0, 0.2)',
        ],
        borderColor: [
          'rgba(255, 26, 104, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(0, 0, 0, 1)',
        ],
        borderWidth: 1,
      }],
    };
    

    const config1 = {
      type: 'doughnut',
      data: data1,
    };

    // setup for Chart 2
    const data2 = {
      labels: ['Arjit - 9⭐', 'Anurag - 7⭐', 'Sid - 8⭐ ', 'Selena - 7⭐', 'Chitra - 8⭐', 'Shreya - 9⭐'],
      datasets: [{
        label: 'Rating Top Songs',
        data: [9, 7, 8, 7, 8, 9],
        backgroundColor: [
          'rgba(255, 26, 104, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(0, 0, 0, 0.2)',
        ],
        borderColor: [
          'rgba(255, 26, 104, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(0, 0, 0, 1)',
        ],
        borderWidth: 1,
      }],
    };

    const config2 = {
      type: 'doughnut',
      data: data2,
    };
    // setup for Chart 3
    const data3 = {
        labels:  ['Arjit - 9', 'Anurag - 5', 'Sid - 7 ', 'Selena - 8', 'Chitra - 4', 'Shreya - 7'],
        datasets: [{
          label: 'User Preferences',
          data: [9, 5, 7, 8, 4, 7],
          backgroundColor: [
            'rgba(255, 26, 104, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(0, 0, 0, 0.2)',
          ],
          borderColor: [
            'rgba(255, 26, 104, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(0, 0, 0, 1)',
          ],
          borderWidth: 1,
        }],
      };
      const config3 = {
        type: 'doughnut',
        data: data3,
      };
      // setup for Chart 3
      const data4 = {
        labels: ['Arjit - 50%', 'Anurag - 30%', 'Sid - 60% ', 'Selena - 10%', 'Chitra - 40%', 'Shreya - 30%'],
        datasets: [{
          label: 'Playlist viewed',
          data: [50, 30, 60, 10, 40, 30],
          backgroundColor: [
            'rgba(255, 26, 104, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(0, 0, 0, 0.2)',
          ],
          borderColor: [
            'rgba(255, 26, 104, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(0, 0, 0, 1)',
          ],
          borderWidth: 1,
        }],
      };
  
      const config4 = {
        type: 'doughnut',
        data: data4,
      };

    // render init block for Chart 1
    const ctx1 = document.getElementById('myChart1');
    const myChart1 = new Chart(ctx1, config1);

    // render init block for Chart 2
    const ctx2 = document.getElementById('myChart2');
    const myChart2 = new Chart(ctx2, config2);

    // render init block for Chart 3
    const ctx3 = document.getElementById('myChart3');
    const myChart3 = new Chart(ctx3, config3);

    // render init block for Chart 4
    const ctx4 = document.getElementById('myChart4');
    const myChart4 = new Chart(ctx4, config4);

    // Cleanup function when the component unmounts
    return () => {
        myChart1.destroy();
        myChart2.destroy();
        myChart3.destroy();
        myChart4.destroy();
      };
  }, []);

  return (
    <div style={{ textAlign: 'center', backgroundColor: '#f0f0f0' }}>
      <h1 style={{ marginTop: '60px', color:"rgb(44, 82, 85)"}}>Detailed Information About our App </h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <div style={{ width: '90%', maxWidth: '300px', margin: '10px', padding: '20px', borderRadius: '20px', border: 'solid 3px rgb(148, 176, 179)', background: 'white' ,boxShadow: '0 0 10px rgb(96, 243, 243)'}}>
        <h3>Favorite Singer</h3>
          <canvas id="myChart1"></canvas>
        </div>
        <div style={{ width: '90%', maxWidth: '300px', margin: '10px', padding: '20px', borderRadius: '20px', border: 'solid 3px rgb(148, 176, 179)', background: 'white',boxShadow: '0 0 10px rgb(96, 243, 243)' }}>
          <h2>Rating Top Songs</h2>
          <canvas id="myChart2"></canvas>
        </div>
        <div style={{ width: '90%', maxWidth: '300px', margin: '10px', padding: '20px', borderRadius: '20px', border: 'solid 3px rgb(148, 176, 179)', background: 'white',boxShadow: '0 0 10px rgb(96, 243, 243)' }}>
          <h2>User Preferences</h2>
          <canvas id="myChart3"></canvas>
        </div>
        <div style={{ width: '90%', maxWidth: '300px', margin: '10px', padding: '20px', borderRadius: '20px', border: 'solid 3px rgb(148, 176, 179)', background: 'white',boxShadow: '0 0 10px rgb(96, 243, 243)' }}>
          <h3>Most Viewed Tracks</h3>
          <canvas id="myChart4"></canvas>
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;

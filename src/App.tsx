import React from 'react';
import './App.css';
import { Bar } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';

const data = {
	labels: [
        'September 2018',
        'October 2018',
        'November 2018',
        'December 2018',
		'January 2019',
		'February 2019',
        'March 2019',
        'April 2019',
        'May 2019',
        'June 2019'
	],
	datasets: [{
        data: [300, 50, 100, 120, 180, 280, 340, 510, 440, 390],
        label: "Fancy",
		backgroundColor: '#FF6384',
		hoverBackgroundColor: [
		    '#FFCE56'
		]
	}, {
        data: [6, 15, 4, 9, 12, 14, 20, 8, 4, 3],
        label: "Stupid",
		backgroundColor: '#36A2EB',
		hoverBackgroundColor: [
		    '#FFCE56'
		]
	}]
};

const options : ChartOptions = {
    maintainAspectRatio: false
};

const App: React.FC = () => {
    return (
        <div className="App">
            <h2>Bar Example</h2>
            <div className="chart-box">
                <Bar data={data} options={options} />
            </div>
        </div>
    );
}

export default App;

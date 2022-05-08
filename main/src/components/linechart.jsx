import React from 'react';
import { Line } from 'react-chartjs-2';
import {CategoryScale} from 'chart.js';
import Chart from 'chart.js/auto' 
Chart.register(CategoryScale);


function LineChart({chartData}){
    return (
        <Line data={chartData} />
    ) 
}

export default LineChart;
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export function LineChart() {
    const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    const data = {
        labels,
        datasets: [
            {
                label: "Today",
                data: [15, 25, 22, 30, 36, 47, 40, 54, 60, 56, 45, 54, 20, 48],
                borderColor: '#8387CDFF',
                backgroundColor: '#C8D7FE',
            },
            {
                label: "Yesterday",
                data: [20, 28, 32, 40, 56, 37, 50, 24, 50, 48, 58, 60, 43, 57],
                borderColor: '#E9E9EE',
                backgroundColor: 'blue',
            }
        ],
    };

    return <Line data={data} />;
}

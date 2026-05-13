import { useEffect } from "react";
import Chart from "chart.js/auto";

function renderChart(config: any) {
    return new Chart(document.getElementById("chart-canvas") as HTMLCanvasElement, config);
}

export default function SalesChart({title}: {title: string}) {
    const chartConfig = {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Sales (₱)',
                data: [3200, 2800, 3500, 4100, 3800, 4500, 3900],
                borderColor: '#19A7CE',
                backgroundColor: 'rgba(25, 167, 206, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    }

    useEffect(() => {renderChart(chartConfig)}, []);

    return (
        <div className="chart-container">
            <h4>{title}</h4>
            <div className="chart-wrapper"><canvas id="chart-canvas" /></div>
        </div>
    );
}
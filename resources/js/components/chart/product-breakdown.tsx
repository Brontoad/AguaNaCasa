import { useEffect } from "react";
import Chart from "chart.js/auto";

function renderChart(config: any) {
    return new Chart(document.getElementById("chart-canvas") as HTMLCanvasElement, config);
}

export default function ProductBreakdownChart({title}: {title: string}) {
    const chartConfig = {
        type: 'bar',
        data: {
            labels: ['Mineral', 'Alkaline', 'Distilled', 'Purified'],
            datasets: [{
                data: [42, 28, 15, 22],
                backgroundColor: [
                    '#19A7CE',
                    '#146C94',
                    '#91C8E4',
                    '#4A9FB5'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
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
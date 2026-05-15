import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export interface SalesChartData {
    labels: string[];
    values: number[];
}

export default function SalesChart({
    title,
    sales
}: {
    title: string;
    sales: SalesChartData;
}) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const chartRef = useRef<Chart | null>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        if (chartRef.current) { chartRef.current.destroy(); }

        chartRef.current = new Chart(canvasRef.current, {
            type: "line",
            data: {
                labels: sales.labels,
                datasets: [
                    {
                        label: "Sales (₱)",
                        data: sales.values,
                        borderColor: "#19A7CE",
                        backgroundColor: "rgba(25, 167, 206, 0.1)",
                        tension: 0.4,
                        fill: true,
                    },
                ],
            },
            options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
    },
    scales: {
    x: {
        position: "bottom",
        grid: {
            display: false,
        },
    },
    y: {
        beginAtZero: true,
        grid: {
            display: false,
        },
    },
}
}
        });

        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, [sales]);

    return (
        <div className="chart-container">
            <h4>{title}</h4>
            <div className="chart-wrapper">
                <canvas ref={canvasRef} />
            </div>
        </div>
    );
}
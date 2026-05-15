import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export interface ProductBreakdown {
    labels: string[];
    values: number[];
}

export default function ProductBreakdownChart({
    title,
    breakdown
}: {
    title: string;
    breakdown: ProductBreakdown
}) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const chartRef = useRef<Chart | null>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        if (chartRef.current) {
            chartRef.current.destroy();
        }

        chartRef.current = new Chart(canvasRef.current, {
            type: "bar",
            data: {
                labels: breakdown.labels,
                datasets: [
                    {
                        data: breakdown.values,
                        backgroundColor: [
                            "#19A7CE",
                            "#146C94",
                            "#91C8E4",
                            "#4A9FB5",
                            "#0F4C75",
                            "#3282B8"
                        ],
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
            },
        });

        return () => {
            if (chartRef.current) chartRef.current.destroy();
        };
    }, [breakdown]);

    return (
        <div className="chart-container">
            <h4>{title}</h4>
            <div className="chart-wrapper">
                <canvas ref={canvasRef} />
            </div>
        </div>
    );
}
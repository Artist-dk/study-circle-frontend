import React, { useEffect, useRef } from 'react';

const AcademicProgressGraph = ({ data }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Define graph dimensions
        const graphWidth = canvas.width - 50; // Adjust for axis labels
        const graphHeight = canvas.height - 50; // Adjust for axis labels

        // Draw x and y axes
        ctx.beginPath();
        ctx.moveTo(50, 0);
        ctx.lineTo(50, graphHeight);
        ctx.lineTo(canvas.width, graphHeight);
        ctx.strokeStyle = 'red';
        ctx.stroke();

        // Draw graph here

        // Example: Draw a simple line graph
        ctx.beginPath();
        ctx.moveTo(50, graphHeight - data[0]); // Start from the first data point
        const dataPointInterval = graphWidth / (data.length - 1);
        data.forEach((value, index) => {
            const x = 50 + index * dataPointInterval;
            const y = graphHeight - value;
            ctx.lineTo(x, y);
        });
        ctx.strokeStyle = 'white';
        ctx.stroke();

    }, [data]);

    return <canvas ref={canvasRef} width={400} height={300} />;
};

export default AcademicProgressGraph;

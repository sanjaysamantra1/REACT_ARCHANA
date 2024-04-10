import React, { useEffect, useState } from 'react';
import './TrafficLight.css';

const config = {
    red: { backgroundColor: 'red', duration: 4000, next: 'green' },
    yellow: { backgroundColor: 'yellow', duration: 1000, next: 'red' },
    green: { backgroundColor: 'green', duration: 3000, next: 'yellow' }
};
export default function TrafficLight() {
    const [currentColor, setCurrentColor] = useState('green');

    useEffect(() => {
        const { duration, next } = config[currentColor];
        const timerId = setTimeout(() => {
            setCurrentColor(next);
        }, duration);
        return () => {
            clearTimeout(timerId);
        };
    }, [currentColor]);

    return <div className="wrapper">
        <div className='traffic-light-container traffic-light-container--vertical'>
            {Object.keys(config).map((color) => (
                <div key={color} className="traffic-light"
                    style={{
                        backgroundColor: color === currentColor
                            ? config[color].backgroundColor
                            : ''
                    }}
                />
            ))}
        </div>
    </div>
}

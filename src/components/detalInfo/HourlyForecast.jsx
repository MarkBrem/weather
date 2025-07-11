import { Line } from 'react-chartjs-2';
import { hourlyForecast } from 'components/API/API';
import { useState, useEffect } from 'react';
import { Container } from 'components/container/Container'; 
import { ChartContainer, CanvasLine } from './HourlyForecast.styled';
import { useWindowSize } from 'react-use';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const HourlyForecastChart = ({coord}) => {
  const [hourlyWeather, setHourlyWeather] = useState(null);
  const { width } = useWindowSize();

  const updatePointsQuantity = () => {
    if (width >= 1200) return 20;
    if (width >= 768) return 8;
    return 3;
  };

useEffect(() => {
  if (coord?.lat && coord?.lon) {
    hourlyForecast(coord.lat, coord.lon).then(res => {
      const quantity = updatePointsQuantity(); 
      const slicedList = res.list.slice(0, quantity);

      const labels = slicedList.map(item => {
        const date = new Date(item.dt_txt);
        return date.toLocaleTimeString('en-US', {
          hour: 'numeric',
          hour12: true,
        });
      });

      const temps = slicedList.map(item => item.main.temp);

      setHourlyWeather({
        labels,
        datasets: [
          {
            label: 'Hourly forecast',
            data: temps,
            borderColor: '#FFB36C',
            fill: false,
            tension: 0.4,
            pointRadius: 3,
          },
        ],
      });
    });
  }
}, [coord, width]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Hourly forecast',
        align: 'start',
        font: { size: 20 },
        padding: { top: 10, bottom: 20 },
      },
      legend: {
        labels: {
          usePointStyle: false,
          boxWidth: 0,
          font: { size: 16 },
        },
      },
    },
    scales: {
      x: { position: 'top' },
      y: {
        ticks: {
          font: { size: 14 },
          callback: value => value + '°C',
          padding: 15,
        },
      },
    },
  };

  if (!hourlyWeather) return null;

  return (
    <Container>
      <ChartContainer>
        <CanvasLine data={hourlyWeather} options={options} />
      </ChartContainer>
    </Container>
  );
};
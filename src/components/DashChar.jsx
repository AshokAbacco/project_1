import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from 'chart.js';

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box
} from '@mui/material';

// Register Chart.js modules
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const DashChar = () => {
  const [range, setRange] = useState('12');

  const handleRangeChange = (event) => {
    setRange(event.target.value);
  };

  // Labels for 12 and 6 months
  const labels12 = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  const labels6 = ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

  // Dummy data
  const dummyData12 = {
    validations: [0.1, 0.3, 0.2, 0.5, 0.4, 0.1, 0.2, 0.35, 0.4, 0.2, 0.1, 0.3, 0.25],
    scoring: [0.05, 0.1, 0.05, 0.2, 0.1, 0.05, 0.15, 0.2, 0.1, 0.05, 0.05, 0.1, 0.08],
    emailFinder: [0.2, 0.4, 0.3, 0.6, 0.5, 0.3, 0.4, 0.55, 0.5, 0.35, 0.3, 0.45, 0.4]
  };

  const dummyData6 = {
    validations: dummyData12.validations.slice(-6),
    scoring: dummyData12.scoring.slice(-6),
    emailFinder: dummyData12.emailFinder.slice(-6)
  };

  const labels = range === '12' ? labels12 : labels6;
  const dataset = range === '12' ? dummyData12 : dummyData6;

  const data = {
    labels,
    datasets: [
      {
        label: 'Validations',
        data: dataset.validations,
        borderColor: '#4B0082',
        backgroundColor: '#4B0082',
        tension: 0.3
      },
      {
        label: 'Scoring',
        data: dataset.scoring,
        borderColor: '#D8BFD8',
        backgroundColor: '#D8BFD8',
        tension: 0.3
      },
      {
        label: 'Email Finder',
        data: dataset.emailFinder,
        borderColor: '#008B8B',
        backgroundColor: '#008B8B',
        tension: 0.3
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' },
      tooltip: { enabled: true }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 1,
        ticks: {
          stepSize: 0.2
        }
      }
    }
  };

  return (
    <Box sx={{ width: '100%', p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <FormControl size="small">
          <InputLabel id="range-select-label">Range</InputLabel>
          <Select
            labelId="range-select-label"
            value={range}
            label="Range"
            onChange={handleRangeChange}
          >
            <MenuItem value="12">Last 12 Months</MenuItem>
            <MenuItem value="6">Last 6 Months</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Line data={data} options={options} />
    </Box>
  );
};

export default DashChar;

import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('0', 1),
  createData('1', 10),
  createData('2', 20),
  createData('3', 30),
  createData('4', 73),
  createData('5', 200),
  createData('6', 50),
  createData('7', 50),
  createData('8', 50),
  createData('9', 50),
  createData('10', 50),
  createData('11', 50),
  createData('12', 50),
  createData('13', 50),
  createData('14', 50),
  createData('15', 50),
  createData('16', 50),
  createData('17', 50),
  createData('18', 50),
  createData('19', 50),
  createData('20', 50),
  createData('21', 50),
  createData('22', 50),
  createData('23', 50)
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Daily Load Profile</Title>
      <p>Last 7 Days</p>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 20,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              kWh
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
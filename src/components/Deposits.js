import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Divider } from '@material-ui/core';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Monthly Savings</Title>
      <Typography component="p" variant="h5" id="title-box" className="monthly-savings-text">
        $3,000,024.00
      </Typography>
      <Divider />
      <h5>Based on data as of {new Date().toLocaleDateString()}</h5>
    
      
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}
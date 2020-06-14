import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Title from './Title';
import energyPhoto from '../assets/energy-intensity.png'

// Generate Order Data

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

const EnergyIntensity = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Energy Intensity</Title>
      <p>Color Represents Increasing kWh/SqFt</p>
      <p>Site Represents Site Size SqFt</p>
      <Table size="small">
        <img src={energyPhoto} alt="energy-intensity-from-all-sites"></img>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          View more sites
        </Link>
      </div>
    </React.Fragment>
  );
}

export default EnergyIntensity;
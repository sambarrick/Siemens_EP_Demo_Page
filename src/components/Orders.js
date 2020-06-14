import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Mar, 2019', 'ALDI', '464003', '123 Main St', 'Milwaukee, WI'),
  createData(1, '15 Mar, 2019', 'Harbor Freight Tools', '3114', '123 Main St', 'Oklahoma City, OK'),
  createData(2, '14 Mar, 2019', 'Big Lots', '5430', '123 Main St', 'Elizabeth, IN'),
  createData(3, '13 Mar, 2019', 'LA Fitness', '22864', '123 Main St', 'Baltimore, MD'),
  createData(4, '12 Mar, 2019', 'Michaels', '5131', '123 Main St', 'Tucson, AZ'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Activity</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Client</TableCell>
            <TableCell>Site Number</TableCell>
            <TableCell>Address</TableCell>
            <TableCell align="right">City/State</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more activity
        </Link>
      </div>
    </React.Fragment>
  );
}
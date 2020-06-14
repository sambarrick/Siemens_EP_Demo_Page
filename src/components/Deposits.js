import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import Title from "./Title";

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
      <div>
        <Title className="monthly-savings-title">Monthly Savings</Title>
        <Typography
          component="p"
          variant="h6"
          id="title-box"
          className="monthly-savings-text"
        >
          $3,000,024.00
        </Typography>
        <Divider />
        <div class="row">
          <div class="column">
            <h5>
              Column 1: <span className="green-span-text">368</span>
            </h5>
          </div>
          <div class="column">
            <h5>
              Column 2: <span className="green-span-text">Ipsum</span>
            </h5>
          </div>
          <div class="column">
            <h5>
              Column 3: <span className="green-span-text">Ipsum</span>
            </h5>
          </div>
          <div class="column">
            <h5>
              Column 4: <span className="green-span-text">Ipsum</span>
            </h5>
          </div>
          <div class="column">
            <h5>
              Column 5: <span className="green-span-text">Ipsum</span>
            </h5>
          </div>
          <div class="column">
            <h5>
              Column 6: <span className="green-span-text">Ipsum</span>
            </h5>
          </div>
        </div>
        <h5>Based on data as of {new Date().toLocaleDateString()}</h5>
      </div>

      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View advanced metrics
        </Link>
      </div>
    </React.Fragment>
  );
}

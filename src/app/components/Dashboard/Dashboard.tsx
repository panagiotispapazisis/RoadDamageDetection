import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import Budget from "./Images";
import ImagePerDay from "./imagePerDay";
import TasksProgress from "./DetectionRate";
import TotalProfit from "./TotalFlightTime";
import TotalUsers from "./Areas";
import { RouteComponentProps } from "@reach/router";

const useStyles = makeStyles(() => ({
  root: {
    padding: "32px"
  }
}));

const Dashboard: React.FC<RouteComponentProps> = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <Budget />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <TotalUsers />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <TasksProgress />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <TotalProfit />
        </Grid>
        <Grid item lg={8} md={12} xl={9} xs={12}>
          <ImagePerDay />
        </Grid>
        
        
      </Grid>
    </div>
  );
};
export default Dashboard;

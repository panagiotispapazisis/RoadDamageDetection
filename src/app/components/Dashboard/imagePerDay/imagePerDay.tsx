import React from "react";
import clsx from "clsx";
import { Bar } from "react-chartjs-2";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Button
} from "@material-ui/core";


import { data, options } from "./chart";

interface IProps {
  className?: string;
}

const useStyles = makeStyles(() => ({
  root: {},
  chartContainer: {
    height: 400,
    position: "relative"
  },
  actions: {
    justifyContent: "flex-end"
  }
}));

const ImagePerDay: React.FC<IProps> = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader
        action={
          <Button size="small" variant="text">
            Last 7 days 
          </Button>
        }
        title="Images Per Day"
      />
      <Divider />
      <CardContent>
        <div className={classes.chartContainer}>
          <Bar data={data} options={options} />
        </div>
      </CardContent>
      <Divider />
    
    </Card>
  );
};

export default ImagePerDay;
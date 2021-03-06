import { Avatar, Card, CardContent, Grid, LinearProgress, Typography } from "@material-ui/core";
import StarsIcon from '@material-ui/icons/Stars';
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import React from "react";
import { ITheme } from "../../../theme";

interface IProps {
  className?: string;
}

const useStyles = makeStyles((theme: ITheme) => ({
  root: {
    height: "100%"
  },
  content: {
    alignItems: "center",
    display: "flex"
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  progress: {
    marginTop: theme.spacing(3)
  }
}));

const DetectionRate: React.FC<IProps> = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent>
        <Grid container justify="space-between">
          <Grid item>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              Detection Rate
            </Typography>
            <Typography variant="h3">75.5%</Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <StarsIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
        <LinearProgress
          className={classes.progress}
          value={75.5}
          variant="determinate"
        />
      </CardContent>
    </Card>
  );
};

export default DetectionRate;

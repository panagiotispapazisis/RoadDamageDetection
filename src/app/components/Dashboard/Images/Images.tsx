import { Avatar, Card, CardContent, Grid, Typography } from "@material-ui/core";
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
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
    backgroundColor: theme.palette.error.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  difference: {
    marginTop: theme.spacing(2),
    display: "flex",
    alignItems: "center"
  },
  differenceIcon: {
    color: theme.palette.error.dark
  },
  differenceValue: {
    color: theme.palette.error.dark,
    marginRight: theme.spacing(1)
  },
  caption: {
    color: theme.palette.text.secondary,
    fontSize: theme.typography.fontSize,
    fontWeight: theme.typography.fontWeight,
    letterSpacing: theme.typography.letterSpacing,
    lineHeight: "13px",
    textTransform: "uppercase"
  }
}));

const Images: React.FC<IProps> = ({ className, ...rest }) => {
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
              IMAGES
            </Typography>
            <Typography variant="h3">240</Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <PhotoCameraIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
      
      </CardContent>
    </Card>
  );
};

export default Images;

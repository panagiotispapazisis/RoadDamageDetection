import {  Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import React from 'react';
import { ITheme } from '../../theme';

interface IProps {
  className?: string;
}

const useStyles = makeStyles((theme:ITheme) => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Footer: React.FC<IProps> = ({ className, ...rest }) => {

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Typography variant="body1">
        &copy;{' '}
       
          Master Builders
       {new Date().getFullYear()}
      </Typography>
     
    </div>
  );
};

export default Footer;

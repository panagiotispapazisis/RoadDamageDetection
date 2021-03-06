import { Divider, Drawer } from '@material-ui/core';
import BackupIcon from '@material-ui/icons/Backup';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MapIcon from '@material-ui/icons/Map';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import React from 'react';
import { PATHS } from '../../../paths';
import { ITheme } from '../../../theme';
import Profile from './Profile';
import SidebarNav from './SidebarNav';


interface IProps {
  className?: string;
  onClose: () => void,
  open: boolean,
  variant: 'permanent' | 'persistent' | 'temporary'
}

const useStyles = makeStyles((theme:ITheme) => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar:React.FC<IProps> = ({ open, variant, onClose, className, ...rest }) => {
  const classes = useStyles();

  const pages = [
    {
      title: 'Dashboard',
      href: PATHS.DASHBOARD,
      icon: <DashboardIcon />
    },
    {
      title: 'Damage Road List',
      href: PATHS.DAMAGE,
      icon: <PlaylistAddCheckIcon />
    },
    {
      title: 'Upload Image',
      href: PATHS.UPLOAD,
      icon: <BackupIcon  />
    },
    {
      title: 'Maps',
      href: PATHS.MAPS,
      icon: <MapIcon />
    },
    {
      title: 'Log Out',
      href: PATHS.SIGN_OUT,
      icon: <ExitToAppIcon />
    },

  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />
      </div>
    </Drawer>
  );
};

export default Sidebar;

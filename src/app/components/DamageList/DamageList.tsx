import { makeStyles } from '@material-ui/styles';
import { RouteComponentProps } from '@reach/router';
import React, { useState } from 'react';
import { ITheme } from '../../theme';

import DamageTable from './DamageTable';
import DamageToolbar from './DamageToolbar';

//FIREBASE DB
import {RealTimeDbImages} from '../../firebase/firebase'

const useStyles = makeStyles((theme:ITheme) => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const DamageList: React.FC<RouteComponentProps> = () => {
  const classes = useStyles();

  
  const [user,setUser] = useState([])
  
  
  React.useEffect(() => {
    RealTimeDbImages.on('value',(snapshot)=>{
      let posts = snapshot.val()
      let array:any = []

      for(let post in posts){
       
        array.push(posts[post])
      }
      setUser(array)
    })
  }, [])
  return (
    <div className={classes.root}>
      <DamageToolbar />
     
      
      <div className={classes.content}>
        <DamageTable users={user} />
      </div>
    </div>
  );
};

export default DamageList;

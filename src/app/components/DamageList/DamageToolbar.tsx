import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import SearchInput from '../SearchInput';
import React from 'react';
import { ITheme } from '../../theme';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';




interface IProps {
  className?: string;
}

const useStyles = makeStyles((theme: ITheme) => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const DamageToolbar: React.FC<IProps> = ({ className, ...rest }) => {
 
  const classes = useStyles();
  const [age, setAge] = React.useState('');


 
  const handleChange = (event:any) => {
    setAge(event.target.value);
  };
  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
    
      <div className={classes.row}>


        <SearchInput
          className={classes.searchInput}
          placeholder="Search user"
          onChange={():void=>{""}}
        />

<FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Filter Per Date</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>First New One</MenuItem>
          <MenuItem value={20}>First Oldest</MenuItem>
          
        </Select>
      </FormControl>
     
      </div>
    </div>
  );
};

export default DamageToolbar;




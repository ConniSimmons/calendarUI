import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';

const category = ['reminder', 'appointment', 'meeting', 'personal', 'work', 'travel'];

const useStyles = makeStyles({
    avatar: {
      backgroundColor: blue[100],
      color: blue[600],
    },
  });
  
  function ModalMenu(props) {
    const classes = useStyles();
    const { onClose, selectedValue, open } = props;
  
    const handleClose = () => {
      onClose(selectedValue);
    };
  
    const handleListItemClick = (value) => {
      onClose(value);
    };
  
    return (
      <Dialog 
        style={{ zIndex: 1500 }}  
        onClose={handleClose} 
        aria-labelledby="simple-dialog-title" 
        open={open}>
        
        <List>
          {category.map((category) => (
            <ListItem 
                button onClick={() => handleListItemClick(category)} key={category}>
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <CalendarTodayIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={category} />
            </ListItem>
          ))}
  
          
        </List>
      </Dialog>
    );
  }
  
  ModalMenu.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
  };
  
  export default function ModalMenuComp() {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(category[1]);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = (value) => {
      setOpen(false);
      setSelectedValue(value);
    };
  
    return (
      <div>
        <Typography variant="subtitle1">Selected: {selectedValue}</Typography>
        <br />
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Choose Event Category
        </Button>
        <ModalMenu selectedValue={selectedValue} open={open} onClose={handleClose} />
      </div>
    );
  }
  
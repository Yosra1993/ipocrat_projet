import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  
});

function ButtonSizes(props) {
  const { classes } = props;
  return (
    
      <div className='button-add' >
        <Fab style={{backgroundColor: "rgb(121, 116, 191)",color: "white"}}
  
          variant="extended"
          size="meduim"
          aria-label="Add"
          className={classes.margin}
        >
          
          Création d'un évènements
        </Fab>
        
      
      
    </div>
  );
}

ButtonSizes.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonSizes);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import logo1 from './icons/ipocrat-small.png'
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
// import {dashboard} from './icons/dashboard.svg'
import Fab from '@material-ui/core/Fab'
import NavigationIcon from '@material-ui/icons/Navigation';
import dashboard from './icons/dashboard.svg'
import event from './icons/event.svg'
import publicite from './icons/ads.svg'
import publication from './icons/posts.svg'
import settings from './icons/settings.svg'
import profil from './icons/profile.svg'





var styles = theme => ({
  root: {
    backgroundColor: "rgb(48, 44, 88)",
    height: '100%'

    
  },
});

var stylebutton={
  backgroundColor: "rgb(48, 44, 88)",
  color: "white",
  width: "95%",
  textTransform: 'initial',
  boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.0), 0px 6px 10px 0px rgba(0,0,0,0.0), 0px 1px 18px 0px rgba(0,0,0,0.0)"
  
}
var styleIcone={
  width:"2.8rem"
}

class SelectedListItem extends React.Component {
 

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List component="nav">

          <ListItem className='logo-small'>
            <img src={logo1}/>
          </ListItem>
        
        </List>
        
        <List component="nav">
        <ListItem >
        <Fab  style={stylebutton} variant="extended" className='btn-fab' >
        
             <img src={dashboard} className="material-icons-btn"/>                           
        Tableau de bord
      </Fab>
          </ListItem>
          <ListItem >
          <Fab  style={stylebutton} variant="extended" className='btn-fab' >

            
          <img src={publication} style={{width:"2.7rem"}} className="material-icons-btn"/>
        Mes publications
      </Fab>
           
          </ListItem>
          <ListItem >
          <Fab  style={stylebutton} variant="extended" className='btn-fab' >
          <img src={publicite} style={{width:"3rem"}} className="material-icons-btn"/>
        Mes publicités
      </Fab>
           
          </ListItem>
          <ListItem >
          <Fab  style={stylebutton} variant="extended" className='btn-fab' >
          <img src={event} style={styleIcone} className="material-icons-btn"/>
        Mes évènements
      </Fab>
           
          </ListItem>
          <ListItem >
          <Fab  style={stylebutton} variant="extended" className='btn-fab' >
          <img src={profil} style={styleIcone} className="material-icons-btn"/>  
        Mon profil
      </Fab>
           
          </ListItem>
          <ListItem >
          <Fab  style={stylebutton} variant="extended" className='btn-fab' >
          <img src={settings} style={{width:"3rem"}} className="material-icons-btn"/>
                  Paramétre
      </Fab>
           
          </ListItem>
        </List>
      </div>
    );
  }
}

SelectedListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectedListItem);

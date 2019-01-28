import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Chip from '@material-ui/core/Chip';
import moment from 'moment'
import 'moment/locale/fr';
import {MDBRow,MDBCol} from 'mdbreact'
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";


const styles = theme => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});
 var StyleDescription=
 {
  display: '-webkit-box',
  webkitBoxOrient: 'vertical',
  webkitLineClamp: '3',
  overflow: 'hidden'
 }
 var StyleDisciplines={
  display:'flex',
  alignItems: 'center',
  flexWrap:'wrap'

 }
 var StyleAction={
  
  display: "flex",
  justifyContent: "space-between",
  borderTop: "1px solid darkgray",
 }
 var StyleAvatar={
  width: "39px",
  backgroundColor: "white"
 }
 var StyleCardItemdetaiile=
    {
        
      boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)'
     }
 
class CardItemdetaiile extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const google = window.google

    const { classes,eventById } = this.props;
   console.log(eventById)
   const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: Number(eventById.latitude), lng: Number(eventById.longitude) }}
    >
      <Marker
        position={{ lat: Number(eventById.latitude), lng: Number(eventById.longitude) }}
      />
    </GoogleMap>
  ));
    return (
      <Card className={classes.card} style={StyleCardItemdetaiile}>
        
        <CardMedia
          className={classes.media}
          image={eventById.coverURL}
          title="Paella dish"
        />
        <CardContent>
            <MDBRow style={{width:'99.4%'}}>
            <MDBCol size="9">
        <Typography variant="subtitle1" color="textSecondary">
            De {moment(eventById.eventStartAt).format('ll')} Au {moment(eventById.eventEndAt).format('ll')}
            ( {eventById.fromTime.substring(0,5)} - {eventById.toTime.substring(0,5)})
          </Typography>
          <Typography gutterBottom variant="h5" component="h5">
            {eventById.name}
          </Typography>
          </MDBCol>
          <MDBCol size="3">
            
          <Typography className='price' component="p">Prix :{eventById.price} €</Typography>
          
          </MDBCol>
          </MDBRow>
          <Chip
        label={eventById.EventTypes[0].title_FR}
        className={classes.chip}
        color="primary"
      />
      <Typography style={StyleDisciplines} variant="h6" component="h6">
          Disciplines :  
          
          
            { eventById.disciplines.map(el=><Typography  component="p">{el.name_FR } ,</Typography>)}
          
          
          </Typography>
          <Typography style={StyleDisciplines} variant="h6" component="h6">
          Présentation :            
          </Typography>
          <Typography component="p">
          
            { eventById.description}
          </Typography>
          <Typography style={StyleDisciplines} variant="h6" component="h6">
          Lieu de l'évènement :            
          </Typography>
          <Typography component="p" style={{padding: "0 0 1.5rem 0"}}>
          
            { eventById.fullAddress}
          </Typography>
          <MapWithAMarker
  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAkAJ9xqyZEN1fhztn0gAe322JLOL-9tMM
  "
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `200px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>
        </CardContent>
      </Card>
    );
  }
}

CardItemdetaiile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardItemdetaiile);

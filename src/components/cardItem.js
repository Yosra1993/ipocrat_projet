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
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import {Link} from 'react-router-dom'
import {MDBCol} from 'mdbreact'
import axios from 'axios'


const styles = theme => ({
  card: {
    maxWidth: 400,
  },
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
class CardItem extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };


  render() {
    const { classes,event } = this.props;
   

    return (
      <MDBCol md="12" lg="6" className='mb-3'>
      <Card className={classes.card}>
      
        <CardHeader 
          avatar={
            <Avatar aria-label="Recipe" >
              <img style={StyleAvatar} src ={event.Organiser.avatarURL}/>
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={event.Organiser.Subscriber.name}
         
          subheader={"il y a "
          +moment(event.createdat).startOf('month').fromNow(event.eventEndAt)}
        />
        <Link to={`/events/${event.eventId}`}>
        <CardMedia
          className={classes.media}
          image={event.coverURL}
          title="Paella dish"
        />
        </Link>
        <CardContent>
        <Typography variant="subtitle1" color="textSecondary">
            De {moment(event.eventStartAt).format('ll')} Au {moment(event.eventEndAt).format('ll')}
            ( {event.fromTime.substring(0,5)} - {event.toTime.substring(0,5)})
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {event.name}
          </Typography>
          <Chip
        label={event.EventTypes[0].title_FR}
        className={classes.chip}
        color="primary"
      />
      <Typography style={StyleDisciplines} variant="h6" component="h6">
          Disciplines :  
          
          
            { event.disciplines.map(el=><Typography  component="p">{el.name_FR } ,</Typography>)}
          
          
          </Typography>
          <Typography style={StyleDisciplines} variant="h6" component="h6">
          Prix :  
          
          
          <Typography  component="p">{event.price} EUR</Typography>
          
          
          </Typography>
          <Typography style={StyleDescription} component="p">
          
            { event.description}
          </Typography>
          
        </CardContent>
        <CardActions className={classes.actions}
        style={StyleAction} disableActionSpacing>
        <div className='like'>
        <Typography variant="subtitle1" color="textSecondary">
            {event.likesCount }
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            J'aime
          </Typography>
          </div>
          <div className='like'>
        <Typography variant="subtitle1" color="textSecondary">
            {event.participantsCount }
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Participant
          </Typography>
          </div>
          <div className='like'>
        <Typography variant="subtitle1" color="textSecondary">
            {event.InterestsCount }
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Interessés
          </Typography>
          </div>
          <div className='like buttons'>
          <IconButton aria-label="Add to favorites">
          <Icon>edit_icon</Icon>
          </IconButton>
          <IconButton aria-label="Share">
            <DeleteIcon />
          </IconButton>
          </div>
          
        </CardActions>
      </Card>
      </MDBCol>
    );
  }
}

CardItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardItem);

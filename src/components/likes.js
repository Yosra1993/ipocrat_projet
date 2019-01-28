import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
});
const styleItem=
{
    display: 'flex',
    alignItems: "center",
    // paddingLeft: "0"
}
const StyleSpanAvatar={
    marginLeft: "1rem",
    fontWeight: "bold",
    color: "rgb(48, 44, 88)"
}

function AlignItemsLikes(props) {
  const { classes,Likes } = props;
  return (
    <List className={classes.root}>
     <Typography variant="body2" style={{fontWeight:'bold'}}gutterBottom>J'aime</Typography>
{Likes.map((el,index)=><ListItem className='pl-0' style={styleItem} alignItems="flex-start">
<ListItemAvatar>
  <Avatar  alt="Remy Sharp" src={el.UserProfile.avatarURL} />
</ListItemAvatar>

      <Typography style={StyleSpanAvatar} component="span" className={classes.inline} color="textPrimary">
        {el.UserProfile.firstName}  {el.UserProfile.lastName}
      </Typography>

</ListItem>)}
      
    </List>
  );
}

AlignItemsLikes.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlignItemsLikes);

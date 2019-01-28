import React from 'react';
import AlignItemsLikes from './likes'
import AlignItemsParticipants from './Participants'
import Typography from '@material-ui/core/Typography';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardGroup, MDBContainer } from "mdbreact";
import outline from './icons/outline-thumb.svg'
import comment from './icons/comment.svg'
import share from './icons/share.svg'
var StyleCedBody={
  display: "flex",
  justifyContent: "space-evenly",
  padding: "0.7rem"

}
var itemCardStyle={
  borderRight: "1px solid darkgray",
    padding: '0.5rem'
}
const StyleStatistique={
  marginLeft: "1rem",
  fontWeight: "bold",
  color: "rgb(48, 44, 88)"
}
const PanelPage = ({eventById}) => {

return (
<MDBContainer>
<Typography style={StyleStatistique} component="span"color="textPrimary">
        Statistique
      </Typography>
  <MDBCardGroup>
    
    <MDBCard className='card-item'>
      <MDBCardBody style={StyleCedBody}>
        
      
        <MDBCardText className='mb-0' style={itemCardStyle}>
          <img src={outline} width="24%"/><strong> {eventById.likesCount}</strong> J'aime

          </MDBCardText>
          <MDBCardText className='mb-0' style={itemCardStyle}>
          <img src={comment} /><strong>  {eventById.participantsCount}</strong> Participant

          </MDBCardText>
          <MDBCardText className='mb-0' style={{padding:"0.5rem"}}>

          <img src={share}/><strong>  {eventById.InterestsCount}</strong> Interessé

          </MDBCardText>
      </MDBCardBody>
    </MDBCard >
  </MDBCardGroup>

  <MDBCardGroup>
    <MDBCard className='card-item card-item-1'>
      <MDBCardBody style={StyleCedBody}>
      <AlignItemsLikes Likes={eventById.Likes}/>
      </MDBCardBody>
    </MDBCard>
    </MDBCardGroup>

    <MDBCardGroup>
    <MDBCard className='card-item card-item-1'>
    <MDBCardBody style={StyleCedBody}>
      <AlignItemsParticipants Participants={eventById.Participants}/>
      </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>
    
    
  
</MDBContainer>
);
};

export default PanelPage;
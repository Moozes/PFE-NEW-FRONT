import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Paper, TextField, Button, Box } from '@mui/material';
import Comment from './Comment';
import { SERVER_NO_SLASH } from '../utils/apiUrl';




export default function LesionCard(props) {
    let profile = props.profile
    let published = props.published
    let {lesion} = props
    let avatarUrl = lesion.avatarUrl ? SERVER_NO_SLASH+lesion.avatarUrl : '/profile.jpg'
    let imageUrl = SERVER_NO_SLASH+lesion.imageUrl
    let createdAt = new Date(lesion.createdAt)


    // expand comments state
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

  return (
    <Card sx={{  mt:2,mb:2, flexBasis: "50%" }}>
      <CardHeader
        avatar={
            <Avatar src="/profile.jpg" sx={{mr:1}}   />
        }
        action={
            profile && (
            <>
                <Button 
                  variant="contained" 
                  color={published ? "warning" : "success"} 
                  sx={{mr:1}} 
                  onClick={props.handleUpdatePublishLesion}
                >
                    {published ? "Unpublish" : "Publish"}
                </Button>
                <Button 
                  variant="contained" 
                  color="error"
                  onClick={props.handleDeleteLesion}
                >Delete</Button>
            </>
            )
        }
        title={lesion.owner.name}
        subheader={`${createdAt.getDate()}-${createdAt.getMonth()}-${createdAt.getFullYear()}`}
      />
      <CardMedia
        component="img"
        height="194"
        image={imageUrl}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {lesion.description}
        </Typography>
        <Paper elevation={6} sx={{p:2, mt:1}}>
            <Typography variant="h6" >Prediction</Typography>
            Result: melanoma {bull} Probabiity: 99% moussa fix this!!!!
        </Paper>
      </CardContent>
      <CardActions disableSpacing>
        <form>
        <TextField 
            label="comment" 
            variant="outlined" 
            type="text" 
            required
            placeholder='Enter a comment' 
            sx={{
                mr: 1
            }}
        />
        <Button 
            align="center"
            variant="contained"
            type="submit"
            sx={{
                p:2
            }}
        >Comment fix this !!!!!</Button>
        </form>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
            <Typography paragraph>Comments:</Typography>
            <Comment/>
            <Comment/>
            <Comment/>
        </CardContent>
      </Collapse>
    </Card>
  );
}




const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));



  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
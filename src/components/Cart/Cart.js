import React, { useEffect, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './Cart.css'
import { Link, useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 470,
      margin:'auto'  
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
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
  }),
);
const Cart = (props) => {
    const {id,title,body} = props.cart;
    const comments = props.comment;
    const [color, setColor] = useState('')

    const changeColor = () => {
        if(color){
          setColor('')
        }else{
          const newColor = 'secondary';
          setColor(newColor);
        }
    }

    const classes = useStyles();
    return (
      <div className="userCard">
          <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Mahbubur Rahman"
          subheader="September 14, 2016"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
              { props.seeMoreButton ? title : title+body
                
              }
              {
                  props.seeMoreButton &&
                  <Link to={'/userDetail/'+id}><button className='see-more'>see more</button></Link>
              }
          </Typography>
        </CardContent>
        
        <CardActions disableSpacing >
          <div className="border">
            <IconButton aria-label="add to favorites">
                <FavoriteIcon color={color} onClick={changeColor}/>
            </IconButton>  
            <IconButton><a href={'/userDetail/'+id}>Comment</a></IconButton>
            <IconButton aria-label="share">
                <ShareIcon />
            </IconButton>
          </div>

        </CardActions>
        {  
            props.seeMoreButton ||
            comments.map(com => <Comments comment={com}></Comments>)
        }
      </Card>
      
      </div>
    )
};

export default Cart;
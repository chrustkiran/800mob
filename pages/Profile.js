import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import {Button, Tag} from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import IconButton from '@material-ui/core/IconButton';
import AlarmIcon from '@material-ui/icons/Alarm';
import 'antd/dist/antd.css';
import environment from '../environment';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, FireOutlined,EyeOutlined, ShareAltOutlined } from '@ant-design/icons';
import { Item } from 'rc-menu';



function Copyright() {
    
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


function CardFetch() {
    const { Meta } = Card;
    const items = [{name : 'Apples', url : 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/health-benefits-of-apples-1296x728-feature.jpg?w=1155&h=1528' }
, {name : 'Mangoes', url : 'https://media.gettyimages.com/photos/closeup-of-mangos-in-rustic-kitchen-natural-lighting-picture-id1125873742?s=612x612'}]
    return(
        <div>
           { items.map(item =>
   <Card
   style={{ marginTop: '8px', width: 300, borderColor : environment.dark.color, borderRadius:'10px' }}
   cover={
     <img
       alt="image"
       src={item.url}
     />
   }
   actions={[
       <FireOutlined key='like' style ={{color :'#fb8b23'}} />,
       <EyeOutlined key="privacy" style={{color: environment['dark'].color}} />,
     <ShareAltOutlined key="share" />
   ]}
 >
   <Meta   
     title={item.name}
     description="This is the description"
   />
 </Card>
 
           )}

        </div>
    );
}


const useStyles = makeStyles((theme) => ({
  paper: {
   // marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  sameLine: {
    display : 'flex',
    justifyContent : 'space-between'
  }
}));

export default function SignIn() {
 
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className = {classes.sameLine}>
        
      <Grid item xs={4} sm={3}>
          <div className={{ display: 'flex',flexDirection: 'column',alignItems: 'left'}}>
          <Avatar style={{ height : '80px', width : '80px'}} alt="Remy Sharp" src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png" />
          </div>
        </Grid>
        <Grid item xs={8} sm={9}>
          <div className={{ display: 'flex',flexDirection: 'column',alignItems: 'left'}}>
              <div className={classes.sameLine}>
          <Typography  component="h1" variant="h6" style ={{textAlign:'left', marginTop : '0px', fontSize : '16px'}}>
          <strong>Chrustkiran Sathiyananthadevar</strong>
        </Typography>
        <Button shape="round" size='small' style={{height:'30px', borderBlockColor:environment.dark.color, borderWidth: '2px'}}>
          Follow
        </Button>
    
        </div>
        <Typography style={{marginTop:'8px', fontSize:'10px', textAlign:'justify'}}>
        A paragraph is a series of related sentences developing a central idea, called the topic. 
        Try to think about paragraphs in terms of thematic unity group of sentences that supports
        </Typography>
        <Tag style={{marginTop: '5px'}} color={environment['dark'].color}>100 followers</Tag>
          </div>
        
        </Grid>
   
        </div>
      <br></br>
        <Divider />
      <div className={classes.paper}>
     <div style={{height: '500px',marginTop:'15px', overflowY: 'scroll'}}>
      <CardFetch/>
   
  </div>    


      </div>
      {/* <Box mt={8}>
        <Copyright />
      </Box> */}
    </Container>
  );
}
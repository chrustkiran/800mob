import React, {Component} from "react";
import NavBar from './NavBar'
import Profile from './Profile'
import { Typography } from "antd";
import { AppBar } from "@material-ui/core";
import environment from '../environment';

class BuyerProfile extends Component{
    render(){
        return(
            <div>
            <AppBar style={{backgroundColor : environment['dark'].color}}>
            <Typography style={{color : '#ffffff', textAlign:'center'}}>Profile as Buyer</Typography>
            </AppBar>
            <br></br><br></br>
            <Profile></Profile>
            </div>
        );
    }
}


export default BuyerProfile;
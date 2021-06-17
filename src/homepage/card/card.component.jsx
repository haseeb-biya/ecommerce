import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './card.styles.scss';


 const useStyles = makeStyles((theme) => ({
    menu_item: {
         [theme.breakpoints.down("sm")]: {
            width: "100%",
            
       }
     },
     large:{
         height: "380px"
     }
}));
export const Card = ({ title, imageUrl, size }) => {
    const classes = useStyles();
    return (
        <div className={` ${size} menu-item ${classes.menu_item}`}>
            <div className="background-image" style={{
                backgroundImage : `url(${imageUrl})`
            }}/>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="">Shop Now</span>
            </div>
        </div>
    )
}
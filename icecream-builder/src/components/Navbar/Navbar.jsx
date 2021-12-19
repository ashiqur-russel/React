import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/commerce.png';
import useStyles from './style';

const Navbar = () => {
    const classes = useStyles();
    return (
        <>
        <AppBar position='fixed' className={classes.AppBar} color='inherit'>
            <Toolbar>
                <Typography variant='h6' className={classes.title} color='inheritd'>
                    <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
                    Lazada
                </Typography>
                <div className={classes.grow}/>
                <div className={classes.button}/>
                    <IconButton aria-aria-label='Show Cart items' color='inherit'>
                        <Badge  badgeContent={2} color='secondary'>
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
            </Toolbar>
        </AppBar>
            
        </>
    )
}

export default Navbar

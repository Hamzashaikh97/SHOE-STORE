import React from 'react';
import { useParams } from "react-router-dom";
import Shoes from './../Shoes.json';
import { Toolbar, Button, Icon } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
 
  cart: {

    height: '100%',
    maxWidth:"100",
   
  },


}));

function ProductItems() {
  const classes = useStyles();

  const {id} = useParams();
  const shoe = Shoes[id]
  if(!shoe)
  return <h2>product Not FOund</h2>
  return (
    <div className="">
      <h1>WELCOME PRODUCT ITEMS</h1>
      <div className="link" >
        <h4>{shoe.name}</h4>
        <img src={shoe.img} height={350} />
       
      </div>
      <ShoppingCartIcon className={classes.cart}/>
      <Button variant="contained">Add To CART</Button>


    </div>
  );
}

export default ProductItems;

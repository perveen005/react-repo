import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../store/cart-context'
import classes from './HeaderCardButton.module.css'
import { CartIcon } from '../Cart/CartIcon'
export const HeaderCardButton = (props) => {
  const cartCtx =  useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber,items)=>{
   return curNumber + items.amount;
  },0);
    return (
    <button className= {classes.button} onClick ={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span >
        <span> Your Cart</span>
        <span className ={classes.badge}>
            {numberOfCartItems}
        </span>
    </button>
  )
}

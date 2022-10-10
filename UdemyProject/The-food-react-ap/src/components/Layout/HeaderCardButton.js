import React from 'react'
import { useContext,useEffect,useState } from 'react'
import { CartContext } from '../../store/cart-context'
import classes from './HeaderCardButton.module.css'
import { CartIcon } from '../Cart/CartIcon'
export const HeaderCardButton = (props) => {
  const[btnIsHighlighted,setButtonIsHiglighted] = useState(false);
  const cartCtx =  useContext(CartContext);
  const {items} = cartCtx;
  const numberOfCartItems = items.reduce((curNumber,items)=>{
   return curNumber + items.amount;
  },0);
 
  const btnClasses =`${classes.button} ${btnIsHighlighted ?classes.bump :''}`
  useEffect(() => {
    if(items.length===0)
    {
      return;
    }
    setButtonIsHiglighted(true);
    const timer = setTimeout(()=>{
      setButtonIsHiglighted(false);
    },300);
    return () =>{
      clearTimeout(timer);
    };
  },[items])
    return (
    <button className= {btnClasses} onClick ={props.onClick}>
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

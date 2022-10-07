import React from 'react';
import { HeaderCardButton } from './HeaderCardButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
export const Header = (props) => {
  return (
    <>
    <header className={classes.header}>
        <h1>React Meals</h1>
       <HeaderCardButton/>
    </header>
    <div className = {classes['main-image']}>
        <img src = {mealsImage} alt ="a table full of foods"/>
    </div>
    </>
  )
}

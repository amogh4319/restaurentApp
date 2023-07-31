import React, { Fragment } from "react";
import classes from './MainHeader.module.css';
import mealsImage from '../../assests/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";
const MainHeader=(props)=>{
return (
    <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="meals broad"/>
        </div>
    </Fragment>
)
}
export default MainHeader;
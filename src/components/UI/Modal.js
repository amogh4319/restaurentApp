import React, { Fragment } from "react";
import classes from './Modal.module.css';
import ReactDOM from 'react-dom';
const Backdrop=props=>{
    return <div className={classes.backdrop}></div>
}
const OverLay=props=>{
    return <div className={classes.modal}>
        <div>{props.children}</div></div>
}
const Modal=props=>{
    const portalelement=document.getElementById("overlay-root");
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop/>,portalelement)}
            {ReactDOM.createPortal(<OverLay>{props.children}</OverLay>,portalelement)}
        </Fragment>
    )
}
export default Modal;
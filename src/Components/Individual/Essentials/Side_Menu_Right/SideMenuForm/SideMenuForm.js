import React from 'react';
import "./SideMenuForm.css";
import Backdrop from "./Backdrop";
const SideMenuForm = ( props ) => (
    <React.Fragment>
        <Backdrop show={props.show} clicked={props.formClosed} />
        <div
            className="SideMenuForm"
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </React.Fragment>
);

export default SideMenuForm;
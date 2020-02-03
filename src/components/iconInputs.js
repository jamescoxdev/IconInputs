import React from 'react';
import styles from './IconInput.module.scss';

function IconInput(props){
    let iconPos = props.iconPos === 'right' ? 'right' : 'left';
    let iconColor = props.iconColor || '#000';
    let iconStyles = {
        float: iconPos,
        color: iconColor
    }
    let inputStyles = props.inputStyles || {};
    let inputContainerStyles = props.containerStyles || {};
    let icon = props.children === undefined ? <></> : 
        <div className={styles.icon} style={iconStyles}>
            {props.children}
        </div>
    return(
        <div className={styles.inputContainer} style={inputContainerStyles}>
            {icon}
            <input style={inputStyles} value={props.value} onChange={(e) => { props.onChange(e); }} />
            <div style={{clear:'both'}}></div>
        </div>
    )
}

export default IconInput;
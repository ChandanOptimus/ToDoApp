import React from 'react'
import styles from './Button.module.css'

const Button = (props)=>{
    return(
        <React.Fragment>
                    <button onClick={props.onClick} className={props.className}>{props.name}</button>
        </React.Fragment>
    )
}

export default Button;
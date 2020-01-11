import  React from 'react';
import icon from './death-star.png';


const ErrorIndicator = ()=>{
    return (
        <div className='error-indicator'>
            <img src={icon} alt='error icon'/>
            <span className='boom' >BOOM!</span>
            <span>something  has going wrong</span>
            <span>but droids try to repair it</span>
        </div>
    );
};
export  default ErrorIndicator;
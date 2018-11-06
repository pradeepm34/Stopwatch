import React from 'react';

const StopWatch = (props)=>{
    return(
        <div>
        <p>{props.runningtime}ms</p>
        <button onClick={props.handleClick}>{props.status?'stop':'start'}</button>
        <button onClick={props.handleReset}>Reset</button>
        </div>        
    );
};

export default StopWatch;
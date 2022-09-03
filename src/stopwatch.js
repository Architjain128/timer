import React, { useState, useEffect } from 'react';
import { useStopwatch } from "react-timer-hook";
import './style.css';

function Watch(props){
    const [status,setStatus]=useState("unattempted");
    const { hours,seconds, minutes, isRunning, start, pause, reset } = useStopwatch({
        autoStart: false
    });
    console.log(isRunning)
    function handleTimer(){
        if(isRunning){
            pause();
            props.setCount(props.count+1);
            setStatus("done");
        }else{
            if(status==="unattempted")start();
            setStatus("attempted");
        }
    }
    return(
        <tr className={status}>
            <td className='day'>{props.data.day}</td>
            <td className='id'>{props.data.id}</td>
            <td className='name'>{props.data.name}</td>
            <td className='label'>{props.data.label}</td>
            <td className='link'>
                {
                    status==="done" ? 
                    <a href={props.data.link} target="_blank">Link</a> 
                    :
                    <a onClick={handleTimer} href={props.data.link2===""?props.data.link1:props.data.link2} target="_blank"> 
                    { isRunning? "Stop":"Start"}</a>
                }
            </td>
            <td className='timer'>
                <div>
                <span>{(hours<10)?("00"+hours).slice(-2):hours}</span>:<span>{("00"+minutes).slice(-2)}</span>:<span>{("00"+seconds).slice(-2)}</span>
                </div>
            </td>
        </tr>
    );
}
export default Watch;

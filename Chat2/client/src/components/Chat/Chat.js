import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

import './index.css';
const ENDPOINT = 'http://localhost:5000';


let socket;
const Chat = ({location}) => {
    const [name,setName]= useState('');
    const [room,setRoom]= useState('');
    const [message,setMessage]= useState('');
    const [messages,setMessages]= useState([]);
    useEffect(()=>{
        const {name,room}= queryString.parse(window.location.search);
        socket=io(ENDPOINT);
        setName(name);
        setRoom(room);
        socket.emit('join',{name,room},(error)=>{
            if(error) {
                alert(error);
            }
        }
        );

    },[ENDPOINT,window.location.search])

    useEffect(()=>{
        socket.on('message',(message)=>{
            setMessage([...messages,message]);
        },[message]);
        
        const sendMessage = (e)=>{
            e.preventDefault();
            if(message){
                socket.emit('sendMessage',message,()=>setMessage(""))
            }

        }

    },[message])
    return (
        <div className='outerContainer'>
            <div className='container'>
                <input value={message} onChange={(e)=>setMessage(e.target.value)}></input>
            </div>
        </div>
    )
}

export default Chat;

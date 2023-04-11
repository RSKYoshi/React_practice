// import {useEffect} from "react";
import { useState, useEffect } from "react";


function Clock(){
    let date = new Date();
    let hours: string | number = date.getHours();
    let minutes: string | number = date.getMinutes();
    let seconds: string | number = date.getSeconds();

    hours = hours < 10 ? "0" + hours : hours
    minutes = minutes < 10 ? "0" + minutes : minutes
    seconds = seconds < 10 ? "0" + seconds : seconds

    let time = hours + ":" + minutes + ":" + seconds

    // document.getElementById("clock").innerText = time;
    // document.getElementById("clock").textContent = time;

    const [Clock, setClock] = useState(0);

    useEffect(() => {
        setTimeout(clock,1000)

    })






    return time;
}
export default Clock;


import { useState } from "react";
import "./Lottery.css";
import {genTicket,sum} from "./GenTicket.js";
import Ticket  from "./Ticket.jsx";

export default function Lottery({n=3,winCondition}){
    let[ticket,setTicket]=useState(genTicket(n));
    let isWining=winCondition(ticket);

    let buyTicket=()=>{
        setTicket(genTicket(n));
    }
    return(
        <div>
            <h1>Lottery Game</h1>
            <Ticket ticket={ticket}/>
            <br></br>
            <br></br>
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWining && "Congratulations, You won!"}</h3>
        </div>
    );
}

import { useState } from "react";
import BarevneOkno from "./BarevneOkno";
import {Typography} from "@mui/material";


function OblibenaBarva(props) {
   

    const barva = props.barva
    
    return(
        <>
    <Typography variant="h3" gutterBottom>Jaká je vaše oblíbená barva?</Typography>
    <input type="color" value={barva} onChange={(e) => props.nastavBarvuObrazce(e.target.value)}></input>

    <BarevneOkno barva={barva}/>
    
    </>
    )

    }

export default OblibenaBarva;
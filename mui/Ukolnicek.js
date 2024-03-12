import { useState } from 'react';
import NovyUkol from './NovyUkol';
import PolozkaUkolu from './PolozkaUkolu';
import Button from '@mui/material/Button'
import { Typography } from '@mui/material';

export default function Ukolnincek() {

    const [seznamUkolu, nastavSeznamUkolu] = useState([
        { text: 'Novy ukol', splneno: false },
        { text: 'dalsi ukol', splneno: false },
        { text: 'splneny ukol', splneno: true }
    ])

    const [barvaTlacitka, nastavBarvuTlacitka] = useState("green");
    const [barvaTextu, nastavBarvuTextu] = useState("red");

    function randomBarva() {
let r = Math.floor(Math.random() * 300)
let g = Math.floor(Math.random() * 300)
let b = Math.floor(Math.random() * 300)
let barva = "rgb(" + r + "," + g + "," + b + ")"
nastavBarvuTlacitka(barva)
}

function randomBarvaTextu() {
    let r = Math.floor(Math.random() * 300)
    let g = Math.floor(Math.random() * 300)
    let b = Math.floor(Math.random() * 300)
    let barva = "rgb(" + r + "," + g + "," + b + ")"
    nastavBarvuTextu(barva)

    }

    function pridejUkol(novyUkol) {
        let novyUkolObj = { text: novyUkol, splneno: false }
        nastavSeznamUkolu([...seznamUkolu, novyUkolObj])
        randomBarva()
        randomBarvaTextu()
    }

    function smazatUkol(poradiUkolu) {
        let upravenySeznamUkolu = [...seznamUkolu];
        upravenySeznamUkolu.splice(poradiUkolu, 1);
        nastavSeznamUkolu(upravenySeznamUkolu)
    }

    function splnUkol(poradiUkolu) {
        let upravenySeznamUkolu = [...seznamUkolu];
        if (seznamUkolu[poradiUkolu].splneno == true) {
            upravenySeznamUkolu[poradiUkolu].splneno = false;
        } else {
            upravenySeznamUkolu[poradiUkolu].splneno = true;
        }
        nastavSeznamUkolu(upravenySeznamUkolu);
    }

    function SeznamSplnenychUkolu() {
        let hotove = 0
        let nehotove = 0
        for (let ukol of seznamUkolu) {
            if (ukol.splneno) {
                hotove++
            } else {
                nehotove++
            }
        }
        return "Počet splněných úkolů: " + hotove + " Počet nesplněných úkolů: " + nehotove;
    }

    

    



    return (
        <>
            <NovyUkol pridejUkol={pridejUkol} />
            <br></br>
            {/*seznamUkolu.map((ukol) => (
            <>
            <span>{ukol}</span>
            <br/>
            </>
        ))
        */}<div id="ukoly">
                {seznamUkolu.map((ukol, poradi) => <PolozkaUkolu fceSpln={splnUkol} key={poradi} ukol={ukol} poradi={poradi} fceSmazat={smazatUkol}></PolozkaUkolu>)}
            </div>
            <div><h2>Počet úkolů: {seznamUkolu.length}</h2></div>
            <div>Počet splněných úkolů = {seznamUkolu.filter(ukol => ukol.splneno).length}</div>
            <div>Počet nesplněných úkolů = {seznamUkolu.filter(ukol => !ukol.splneno).length}</div>
            <div>{SeznamSplnenychUkolu()}</div>
            <Button style={{backgroundColor: barvaTlacitka, color: barvaTextu}} onClick={() => pridejUkol("novy ukol")}>Přidej náhodný úkol</Button>

        </>
    )
}
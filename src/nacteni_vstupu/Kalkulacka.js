import { useState } from "react";
import CiselneTlacitko from "./CiselneTlacitko";
import './Kalkulacka.css';

function Kalkulacka() {
    const [cislo, nastavCislo] = useState("0");
    const [operace, nastavOperaci] = useState("");
    const [prvniCislo, nastavPrvniCislo] = useState(0);

    function vybranaOperace(symbol) {
        nastavOperaci(symbol)
        nastavPrvniCislo(cislo)
        nastavCislo("0")
    }

    function spocitejVysledek() {
        let vysledek;
        if (operace == "+") {
            vysledek = prvniCislo + cislo;
        } else if (operace == "-") {
            vysledek = prvniCislo - cislo;
        } else if (operace == "*") {
            vysledek = prvniCislo * cislo;
        } else if (operace == "/") {
            vysledek = prvniCislo / cislo;
        }
        
    }
    return (
        <>
        <div id="kalkulacka">
        <div id="display">{ cislo }</div>
        <div id="tlacitka">
            <CiselneTlacitko cislo={7} klikfunkce={nastavCislo} puvodniCislo={cislo}/> 
            <CiselneTlacitko cislo={8} klikfunkce={nastavCislo} puvodniCislo={cislo}/>
            <CiselneTlacitko cislo={9} klikfunkce={nastavCislo} puvodniCislo={cislo}/>
            <button onClick={() => vybranaOperace("+")}>+</button>
            <br />
            <CiselneTlacitko cislo={4} klikfunkce={nastavCislo} puvodniCislo={cislo}/>
            <CiselneTlacitko cislo={5} klikfunkce={nastavCislo} puvodniCislo={cislo}/>
            <CiselneTlacitko cislo={6} klikfunkce={nastavCislo} puvodniCislo={cislo}/>
            <button onClick={() => vybranaOperace("-")}>-</button>
            <br />
            <CiselneTlacitko cislo={1} klikfunkce={nastavCislo} puvodniCislo={cislo}/>
            <CiselneTlacitko cislo={2} klikfunkce={nastavCislo} puvodniCislo={cislo}/>
            <CiselneTlacitko cislo={3} klikfunkce={nastavCislo} puvodniCislo={cislo}/>
            <button onClick={() => vybranaOperace("*")}>*</button>
            <br />
            <button onClick={() => vybranaOperace("C")}>C</button>
            <CiselneTlacitko cislo={0} klikfunkce={nastavCislo} puvodniCislo={cislo}/>
            <button onClick={() => spocitejVysledek}>=</button>
            <button onClick={() => vybranaOperace("/")}>/</button>
        </div>
        </div>
        </>
    )
}

export default Kalkulacka;
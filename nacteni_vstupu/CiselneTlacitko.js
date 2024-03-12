function CiselneTlacitko(props) {

    let puvodniCislo = props.puvodniCislo;
    let CisloTlacitka = props.cislo;
    let vysledek = puvodniCislo.concat(CisloTlacitka);

    function nastavCislo() {
        if (props.cislo == "0") {
            props.klikfunkce(CisloTlacitka);
        } else {
            props.klikfunkce(vysledek);
        }
    }

    return (
        <button onClick={() => nastavCislo()}>{props.cislo}</button>
    )
}

export default CiselneTlacitko;
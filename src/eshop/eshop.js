import { useState, useEffect } from "react";
import axios from "axios";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';

function Eshop() {

  const [polozky, nastavPolozky] = useState([]);
  //const [cenaKosiku, nastavVybranouPolozku] = useState("");
  const [kosik, nastavKosik] = useState([
   ]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(odpoved => {
        console.log("Odpověď třetí strany")
        nastavPolozky(odpoved.data);
      })

    console.log("Pokračuj ve vykonávání funkce")
  }, [])

  function odebratPolozku(odebraneZbozi) {
    let kosik2 = [...kosik];
    let odebratPolozku = false;
    for (let zbozi of kosik2) {
        if (zbozi.polozka == odebraneZbozi.polozka) {
            if (zbozi.mnozstvi > 1) {
                zbozi.mnozstvi--;
            } else {
                odebratPolozku = true;
            }
        }
    }
    if (odebratPolozku) {
        kosik2 = kosik2.filter(zbozi => zbozi.polozka !== odebraneZbozi.polozka);
    }
    nastavKosik(kosik2);
}
console.log(polozky)


function pridatPolozku(pridanaPolozka) {
    let novyKosik = [...kosik];  // duplikace kosiku
    let obsahujePolozku = false; // uchovani informace, zda mam v kosiku polozku, kterou pridavam
    for (let zbozi of novyKosik) {
        if (zbozi.polozka == pridanaPolozka) {
            obsahujePolozku = true;
            zbozi.mnozstvi++; // polozka tam je, jenom zvysim mnozstvi
        }
    }
    if (!obsahujePolozku) { // polozka tam neni, musim vlozit novou s mnozstvim 1
        novyKosik.push({polozka: pridanaPolozka, mnozstvi: 1});
    }
    nastavKosik(novyKosik);
}

  return (
    <>
      <Paper>
        <Typography variant="subtitle1">
          {
          //kosik != "" && <span>Košík: {kosik.mnozstvi}</span>
          }
          <span>Košík: </span><br></br>
          {
          kosik.map(zbozi => (
            <>
            <span>{zbozi.polozka.title}, </span>
            <span style={{color:"black", fontWeight: "bold"}}>počet kusů: {zbozi.mnozstvi}</span><br></br>
            </>
          ))
          }
        </Typography>
      </Paper>

      <Grid container spacing={5}>
        {polozky.map(polozka =>
        (
          <>
            <Grid item xs={5}>
              <Paper variant="elevation" elevation={4} square={false} style={{ textAlign: "center", height: 250, margin: 5, padding: 10 }}>
                <Typography variant="h5">
                  <img src={polozka.image} style={{ width: "100px" }} />
                  <Divider>
                    <Chip label={polozka.title} size="medium" />
                  </Divider>
                  <Button onClick={() => pridatPolozku(polozka)} style={{ backgroundColor: "rgb(250,0,255)", color: "black" }} color='success' variant="outlined">Přidat do košíku: {polozka.price}</Button>
                  {kosik != "" && <Button onClick={() => odebratPolozku(polozka)} color='success' variant="outlined">Odeber</Button>}
                </Typography>
              </Paper>
            </Grid>
          </>
        )
        )}
      </Grid>
    </>
  );
}

export default Eshop;
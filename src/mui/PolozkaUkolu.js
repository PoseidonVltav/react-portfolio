import Button from '@mui/material/Button';


export default function PolozkaUkolu({ ukol, poradi, fceSmazat, fceSpln }) {
    return(
        <><div class="ukol">
            <span>{poradi}</span>
            {!ukol.splneno && <span className="text-ukolu">{ukol.text}</span>}
            {ukol.splneno && <span className="splneny-ukol">{ukol.text}</span>}
        <Button variant="contained" onClick={() => fceSmazat(poradi)}>X</Button>
        <input type="button" id="hotovo-button" value="✓" onClick={() => fceSpln(poradi)}></input>
        </div>
        <br></br>

        </>
    )
}
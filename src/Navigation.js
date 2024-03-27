import { Outlet, Link } from "react-router-dom";
import MuiLink from '@mui/material/Link';
import Button from '@mui/material/Button';
import OblibenaBarva from "./barva/Barva";


const Navigation = (props) => {
    const oblibenaBarva = props.oblibenaBarva;
    return (
        <>
            <nav>
                <Link style={{ margin: 5 }} to='/'><Button style={{ backgroundColor: oblibenaBarva, color: "black" }} variant="contained">Home</Button></Link>

                <Link style={{ margin: 5 }} to="/local_storage"><Button style={{ backgroundColor: oblibenaBarva, color: "black" }} variant="contained">Local storage</Button></Link>

                <Link style={{ margin: 5 }} to="/nacteni_vstupu"><Button style={{ backgroundColor: oblibenaBarva, color: "black" }} variant="contained">Kalkulačka</Button></Link>

                <Link style={{ margin: 5 }} to="/mui"><Button style={{ backgroundColor: oblibenaBarva, color: "black" }} variant="contained">Úkolník</Button></Link>

                <Link style={{ margin: 5 }} to="/api"><Button style={{ backgroundColor: oblibenaBarva, color: "black" }} variant="contained">Kávy</Button></Link>

                <Link style={{ margin: 5 }} to="/eshop"><Button style={{ backgroundColor: oblibenaBarva, color: "black" }} variant="contained">Eshop</Button></Link>

                <Link style={{ margin: 5 }} to="/barva"><Button style={{ backgroundColor: oblibenaBarva, color: "black" }} variant="contained">Barva</Button></Link>

                <Button href='/react-portfolio/#' style={{ backgroundColor: oblibenaBarva, color: "black", margin: 5 }} variant="contained">Home</Button>

                <Button href='/react-portfolio/#/local_storage' style={{ backgroundColor: oblibenaBarva, color: "black", margin: 5  }} variant="contained">Local storage</Button>

                <Button href='/react-portfolio/#/nacteni_vstupu'style={{ backgroundColor: oblibenaBarva, color: "black", margin: 5 }} variant="contained">Kalkulačka</Button>

                <Button href='/react-portfolio/#/mui'style={{ backgroundColor: oblibenaBarva, color: "black", margin: 5 }} variant="contained">Úkolník</Button>

                <Button href='/react-portfolio/#/api'style={{ backgroundColor: oblibenaBarva, color: "black", margin: 5 }} variant="contained">Kávy</Button>

                <Button href='/react-portfolio/#/eshop'style={{ backgroundColor: oblibenaBarva, color: "black", margin: 5 }} variant="contained">Eshop</Button>

                <Button href='/react-portfolio/#/barva'style={{ backgroundColor: oblibenaBarva, color: "black", margin: 5 }} variant="contained">Barva</Button>
            </nav>
            <Outlet />
        </>
    )
}

export default Navigation;
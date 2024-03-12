import { Outlet, Link } from "react-router-dom";
import MuiLink from '@mui/material/Link';
import Button from '@mui/material/Button';
 
 
const Navigation = () => {
    return (
        <>
            <nav>
                <Link style={{margin: 5}} to='/'><MuiLink component="button" underline="none" variant="h5"><Button style={{backgroundColor:'rgb(150, 200, 100)', color: "black"}} variant="contained">Home</Button></MuiLink></Link>
 
                <Link style={{margin: 5}} to="/local_storage"><MuiLink component="button" underline="none" variant="h5"><Button style={{backgroundColor:'rgb(150, 200, 100)', color: "black"}} variant="contained">Local storage</Button></MuiLink></Link>
 
                <Link style={{margin: 5}} to="/nacteni_vstupu"><MuiLink component="button" underline="none" variant="h5"><Button style={{backgroundColor:'rgb(150, 200, 100)', color: "black"}} variant="contained">Načtení vstupu</Button></MuiLink></Link>
 
                <Link style={{margin: 5}} to="/mui"><MuiLink component="button" underline="none" variant="h5"><Button style={{backgroundColor:'rgb(150, 200, 100)', color: "black"}} variant="contained">Mui</Button></MuiLink></Link>
 
                <Link style={{margin: 5}} to="/api"><MuiLink component="button" underline="none" variant="h5"><Button style={{backgroundColor:'rgb(150, 200, 100)', color: "black"}} variant="contained">Api</Button></MuiLink></Link>
 
                <Link style={{margin: 5}} to="/eshop"><MuiLink component="button" underline="none" variant="h5"><Button style={{backgroundColor:'rgb(150, 200, 100)', color: "black"}} variant="contained">Eshop</Button></MuiLink></Link>
            </nav>
            <Outlet />
        </>
    )
}
 
export default Navigation;
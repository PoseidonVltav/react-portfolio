import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";

export default function BarevneOkno(props) {

    const oblibenaBarva = props.barva
    return (
        <Card varitan="outlined" style={{ width: "300px", backgroundColor: oblibenaBarva }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} gutterBottom>
                    Moje oblibena barva
                </Typography>
            </CardContent>
        </Card>
    )
}
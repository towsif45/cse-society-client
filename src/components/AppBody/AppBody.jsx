import { Grid } from "@mui/material";
import LeftBar from "../LeftBar/LeftBar";

const AppBody = () => {
    return (
        <Grid container>
            <Grid item xs={2}>
                <LeftBar />
            </Grid>
            <Grid item xs={7}>
                <h1> feed </h1>
            </Grid>
            <Grid item xs={3}>
                <h1> Events </h1>
            </Grid>
        </Grid>
    );
}

export default AppBody;
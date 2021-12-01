import { Grid } from "@mui/material";
import Feed from "../Feed/Feed";
import LeftBar from "../LeftBar/LeftBar";

import "../AppBody/styles.css";

const AppBody = () => {
    return (
        <Grid container height={'100%'}>
            <Grid item xs={2}>
                <LeftBar />
            </Grid>
            <Grid item className="grid-scroll" xs={10}>
                <Feed />
            </Grid>
        </Grid>
    );
}

export default AppBody;
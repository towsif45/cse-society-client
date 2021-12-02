import { Grid } from "@mui/material";
import Feed from "../Feed/Feed";
import LeftBar from "../LeftBar/LeftBar";

import "./styles.css";

const AppBody = () => {
    return (
        <Grid container height={'100vh'} >
            <Grid item xs={2} borderRight= '1px solid #A9A9A9'>
                <LeftBar />
            </Grid>
            <Grid item className="grid-scroll" xs={10}>
                <Feed />
            </Grid>
        </Grid>
    );
}

export default AppBody;
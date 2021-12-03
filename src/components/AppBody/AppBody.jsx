import { Grid } from "@mui/material";
//import Feed from "../Feed/Feed";
import LeftBar from "../LeftBar/LeftBar";
import PollEventPage from "../Voting/User/PollEventPage";
import {Route, Routes} from "react-router-dom";

import "./styles.css";
import Feed from "../Feed/Feed";
import CreatePollPage from "../Voting/Admin/CreatePollPage";

const AppBody = () => {
    return (
        <Grid container height={'100vh'} >
            <Grid item xs={2} borderRight= '1px solid #A9A9A9'>
                <LeftBar />
            </Grid>
            
            <Grid item className="grid-scroll" xs={10}>
                {/* <Feed /> */}
                {/* <PollEventPage /> */}

                
                <Routes>
                    <Route exact path="/" element={<Feed />} />
                    <Route exact path="/polls" element={<PollEventPage />} />
                    <Route exact path="/create-poll" element={<CreatePollPage />} />
                </Routes>
                
            </Grid>
        </Grid>
    );
}

export default AppBody;
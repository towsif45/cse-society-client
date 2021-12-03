import { Button, Container, styled, Typography } from "@mui/material";
import { useState } from "react";
import ApplyDialog from "./ApplyDialog";

const PollPageContainer = styled(Container)(({theme}) =>({
    //backgroundColor: 'yellow',
    paddingTop: theme.spacing(10),
    height: '100%',
    overflow: 'auto'
}));

const PollEventPage = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <PollPageContainer>
            <Typography variant="h4">Hello people!</Typography>
            <br />
            <Typography variant="body2">There is a poll going on! Click the button below if you want to fight for a position! </Typography>
            <br /> <br />
            <Button variant="outlined" onClick={handleClickOpen}>Click to apply</Button>
            <ApplyDialog
            open={open}
            onClose={handleClose} />
        </PollPageContainer>
    );
};

export default PollEventPage;
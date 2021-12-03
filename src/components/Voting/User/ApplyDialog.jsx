import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";

const ApplyDialog = (props) => {
    const {onClose, open, data} = props;

    const handleClose = () => {
        onClose(data);
    }

    return(
        <Dialog open={open} onClose={handleClose} >
            <DialogTitle>
                <Typography variant="h6">Apply for a position</Typography>
            </DialogTitle>
            <DialogContent>

            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Apply</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ApplyDialog;
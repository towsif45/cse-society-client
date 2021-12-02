import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

const ApplyDialog = (props) => {
    const {onClose, open, data} = props;

    const handleClose = () => {
        onClose(data);
    }

    return(
        <Dialog open={open} onClose={handleClose} >
            <DialogTitle>

            </DialogTitle>
            <DialogContent>

            </DialogContent>
            <DialogActions>

            </DialogActions>
        </Dialog>
    );
};
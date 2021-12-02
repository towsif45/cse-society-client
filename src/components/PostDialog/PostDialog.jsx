import { Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";

const PostDialog = (props) => {
    const {open, onClose, post} = props;
    
    const handleClose = () => {
        onClose(post);
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
                <Typography variant="h6"> Create Post </Typography>
            </DialogTitle>
            <DialogContent>

            </DialogContent>
            <DialogActions>

            </DialogActions>
        </Dialog>
    );
};

export default PostDialog;
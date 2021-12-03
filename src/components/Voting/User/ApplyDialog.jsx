import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";

const positions = ['Vice President', 'General Secretary', 'Assistant General Secretary', 'Executive Member'];

const ApplyDialog = (props) => {
    const {onClose, open, data} = props;

    const handleClose = () => {
        onClose(data);
    }

    return(
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth='sm'>
            <DialogTitle>
                <Typography variant="h6">Apply for a position</Typography>
            </DialogTitle>
            <DialogContent>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Positions</FormLabel>
                    <RadioGroup
                        aria-label="gender"
                        name="radio-buttons-group"
                    >
                        {
                            positions.map((pos) => (
                                <FormControlLabel value={pos} control={<Radio />} label={pos} />
                            ))
                        }
                        {/* <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
                    </RadioGroup>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Apply</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ApplyDialog;
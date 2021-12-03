import { Button, Container, Stack, styled, TextField, Typography } from "@mui/material";

const CreatePollContainer = styled(Container)(({ theme }) => ({
    paddingTop: theme.spacing(10),
    height: '100%',
    overflow: 'auto'
}));

const CreatePollPage = () => {
    return (
        <CreatePollContainer>
            <Typography variant="h4">Create a poll</Typography>
            <Stack
                spacing={2}
                sx={{
                    width: 500,
                    maxWidth: '100%',
                    //display: 'flex',
                    marginTop: 10,
                    marginBottom: 5
                }}
            >

                <TextField fullWidth label="Add a position" id="fullWidth" sx={{ marginRight: 5 }} />
            </Stack>
            <Button variant="contained">Add position</Button>
        </CreatePollContainer>
    );
};

export default CreatePollPage;
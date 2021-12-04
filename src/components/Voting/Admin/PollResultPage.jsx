import { Container, styled, Typography } from "@mui/material";

const PollResultContainer = styled(Container)(({theme}) => ({
    paddingTop: theme.spacing(10),
    height: '100%',
    overflow: 'auto'
}));

const PollResultPage = () => {
    return(
        <PollResultContainer>
            <Typography variant="h4"> Past poll results </Typography>
        </PollResultContainer>
    );
}

export default PollResultPage;
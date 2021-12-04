import { Container, styled, Typography } from "@mui/material";

const VoteContainer = styled(Container)(({theme}) => ({
    paddingTop: theme.spacing(10),
    height: '100%',
    overflow: 'auto'
}));

const VotePage = () => {
    return(
        <VoteContainer>
            <Typography variant="h4"> Vote here </Typography>
        </VoteContainer>
    );
}

export default VotePage;
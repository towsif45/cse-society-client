import { Container, styled, Typography } from "@mui/material";

const ContainerFeed = styled(Container)(({ theme }) => ({
    paddingTop: theme.spacing(10),
    backgroundColor: 'yellow',
    height: '100%',
    overflow: 'auto'
}));

const Feed = () => {
    return (
        <ContainerFeed>
            <Typography variant="h3"> Feeeeeeeeeeeed </Typography>
            <Typography variant="h3"> Feed </Typography>
            <Typography variant="h3"> Feed </Typography>
            <Typography variant="h3"> Feed </Typography>
            <Typography variant="h3"> Feed </Typography>
            <Typography variant="h3"> Feed </Typography>
            <Typography variant="h3"> Feed </Typography>
            <Typography variant="h3"> Feed </Typography>
            <Typography variant="h3"> Feed </Typography>
            <Typography variant="h3"> Feed </Typography>
            <Typography variant="h3"> Feed </Typography>
            <Typography variant="h3"> Feed </Typography>
            <Typography variant="h3"> Feed </Typography>
            <Typography variant="h3"> Feed </Typography>
        </ContainerFeed>
    );
};

export default Feed;
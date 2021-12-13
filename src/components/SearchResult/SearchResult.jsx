import { Box, Container, styled, Typography } from "@mui/material";
import ProfileCard from "../CardProfile/CardProfile";
import CardSimplePost from "../CardSimplePost/CardSimplePost";

const SearchResultContainer = styled(Container)(({ theme }) => ({
    paddingTop: theme.spacing(10),
    height: '100%',
    overflow: 'auto',
}));

const SearchResult = () => {
    return (
        <SearchResultContainer>
            <Typography sx={{paddingBottom: 2}} variant="h4"> Search Results </Typography>
            <hr />

            <Box sx={{ marginTop: 5 }}>
                <Typography variant="h6">People</Typography>
                <ProfileCard name="Towsif Hossain" email="towsifhossain5120@gmail.com" />
                <ProfileCard name="Towsif Hossain" email="towsifhossain5120@gmail.com" />
                <ProfileCard name="Towsif Hossain" email="towsifhossain5120@gmail.com" />
            </Box>
            <Box>
                <Typography variant="h6">Posts</Typography>
                <CardSimplePost
                    post="ke kovor tomader? Project kotodur? :-)"
                    name="Tanvir Rahman Tareq"
                    date="5 December, 2021" />
                <CardSimplePost
                    post="ke kovor tomader? Project kotodur? :-)"
                    name="Tanvir Rahman Tareq"
                    date="5 December, 2021" />
            </Box>

        </SearchResultContainer>
    );
};

export default SearchResult;
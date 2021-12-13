import { Avatar, Box, Container, styled, Typography } from "@mui/material";

const ProfileContainer = styled(Container)(({theme}) => ({
    paddingTop: theme.spacing(10),
    height: '100%',
    overflow: 'auto',
}));

const ProfilePage = (props) => {
    const {name, email, posts} = props;
    return (
        <ProfileContainer>
            <Box>
                <Avatar alt={name} src="/broken-image.jpg" sx={{ width: 100, height: 100 }} />
            </Box>
            <Box sx={{paddingTop: 3, paddingBottom: 3}}>
                <Typography variant="h6">Towsif Hossain</Typography>
                <Typography variant="subtitle1">towsifhossain5120@gmail.com</Typography>
            </Box>
            <hr />
            <Typography sx={{paddingTop: 1, paddingBottom: 1}} variant="h5">Posts</Typography>
            <hr />
            <Box>
                {
                    // map objects from 'posts' array here 
                }
            </Box>
        </ProfileContainer>
    );
};

export default ProfilePage;
import { Home, Logout, Message, Notifications, People } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material";

const ContainerLeftbar = styled('div')(({theme}) => ({
    // marginLeft: theme.spacing(1),
    backgroundColor: 'yellow'
}));

const BoxItem = styled(Box)(({theme}) => ({
    display:'flex',
    padding: theme.spacing(1),
    cursor: 'pointer'
}));

// const ItemIconWRapper = styled('div')(({theme}) => ({
//     display: 'flex',
//     height: '100%'
// }));

const LeftBar = () => {
    return (
        <ContainerLeftbar>
            <BoxItem >
                <Home />
                <Typography>Home</Typography>
            </BoxItem>
            <BoxItem>
                <People />
                <Typography>People</Typography>
            </BoxItem>
            <BoxItem>
                <Notifications />
                <Typography>Notifications</Typography>
            </BoxItem>
            <BoxItem>
                <Message />
                <Typography>Messages</Typography>
            </BoxItem>
            <BoxItem>
                <Logout />
                <Typography>Log out</Typography>
            </BoxItem>
        </ContainerLeftbar>
    );
};

export default LeftBar;
import { Event, Home, Logout, Message, Notifications, People } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material";

const ContainerLeftbar = styled(Box)(({ theme }) => ({
    height: '100%',
    //paddingRight: theme.spacing(1),
    // backgroundColor: 'yellow',
    paddingTop: theme.spacing(10),
    position: 'fixed'
}));

const BoxItem = styled(Box)(({ theme }) => ({
    display: 'flex',
    padding: theme.spacing(1),
    cursor: 'pointer'
}));

const ItemIconWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    padding: theme.spacing(0, 2)
}));

const LeftBar = () => {
    return (
        <ContainerLeftbar>
            <BoxItem >
                <ItemIconWrapper> <Home /> </ItemIconWrapper>
                <Typography marginRight={'theme.spacing(2)'}>Home</Typography>
            </BoxItem>
            <BoxItem>
                <ItemIconWrapper> <People /> </ItemIconWrapper>
                <Typography>People</Typography>
            </BoxItem>
            <BoxItem>
                <ItemIconWrapper> <Event /> </ItemIconWrapper>
                <Typography>Events</Typography>
            </BoxItem>
            <BoxItem>   
                <ItemIconWrapper><Notifications /></ItemIconWrapper>
                <Typography>Notifications</Typography>
            </BoxItem>
            <BoxItem>
                <ItemIconWrapper><Message /></ItemIconWrapper>
                <Typography>Messages</Typography>
            </BoxItem>
            <BoxItem>
                <ItemIconWrapper><Logout /></ItemIconWrapper>
                <Typography>Log out</Typography>
            </BoxItem>
        </ContainerLeftbar>
    );
};

export default LeftBar;
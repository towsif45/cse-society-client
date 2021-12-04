import { Event, Home, Logout, Message, Notifications, People, Poll } from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material";
import { Link } from "react-router-dom";

const ContainerLeftbar = styled(Container)(({ theme }) => ({
    //paddingRight: theme.spacing(1),
    // backgroundColor: 'yellow',
    paddingTop: theme.spacing(10),
    position: 'fixed'
}));

const BoxItem = styled(Box)(({ theme }) => ({
    // marginLeft: 'auto',
    // marginRight: 'auto',
    // paddingLeft: theme.spacing(3),
    // paddingRight: theme.spacing(3),
    // paddingTop: theme.spacing(1),
    marginBottom: theme.spacing(4),
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    //padding: theme.spacing(1),
    cursor: 'pointer'
}));

const ItemIconWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    padding: theme.spacing(0, 2)
}));

const ResponsiveTypography = styled(Typography)(({theme}) => ({
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const LeftBar = () => {
    return (
        <ContainerLeftbar>
            <Link to={'/'} >
                <BoxItem>
                    <ItemIconWrapper> <Home /> </ItemIconWrapper>
                    <ResponsiveTypography>Home</ResponsiveTypography>
                </BoxItem>
            </Link>
            
            <BoxItem>
                <ItemIconWrapper> <People /> </ItemIconWrapper>
                <ResponsiveTypography>People</ResponsiveTypography>
            </BoxItem>
            <BoxItem>
                <ItemIconWrapper> <Event /> </ItemIconWrapper>
                <ResponsiveTypography>Events</ResponsiveTypography>
            </BoxItem>
            <Link to={'/polls'}>
                <BoxItem>
                    <ItemIconWrapper> <Poll /> </ItemIconWrapper>
                    <ResponsiveTypography>Poll</ResponsiveTypography>
                </BoxItem>
            </Link>
            
            <BoxItem>   
                <ItemIconWrapper><Notifications /></ItemIconWrapper>
                <ResponsiveTypography>Notifications</ResponsiveTypography>
            </BoxItem>
            <BoxItem>
                <ItemIconWrapper><Message /></ItemIconWrapper>
                <ResponsiveTypography>Messages</ResponsiveTypography>
            </BoxItem>
            <BoxItem>
                <ItemIconWrapper><Logout /></ItemIconWrapper>
                <ResponsiveTypography>Log out</ResponsiveTypography>
            </BoxItem>
        </ContainerLeftbar>
    );
};

export default LeftBar;
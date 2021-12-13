import { AccountCircle, Message } from "@mui/icons-material";
import { Avatar, Card, CardHeader, IconButton, styled } from "@mui/material";

const CardProfile = styled(Card)(({ theme }) => ({
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: theme.spacing(2),
}));

const ProfileCard = (props) => {
    const { name, email } = props;
    const handleProfileButton = () => {

    }
    const handleMessageButton = () => {

    }
    return (
        <CardProfile sx={{ maxWidth: 550 }}>
            <CardHeader
                avatar={<Avatar src="/broken-image.jpg" />}
                action={
                    <>
                        <IconButton
                            sx={{ marginRight: 1 }}
                            onClick={handleMessageButton}>
                            <Message />
                        </IconButton>
                        <IconButton
                            sx={{ marginRight: 1 }}
                            onClick={handleProfileButton}>
                            <AccountCircle />
                        </IconButton>
                    </>

                }
                title={name}
                subheader={email}
            />

        </CardProfile>
    );
};

export default ProfileCard;
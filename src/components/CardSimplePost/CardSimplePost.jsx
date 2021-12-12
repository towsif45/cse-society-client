import { CommentOutlined, MoreVert, PostAddRounded, Share, ThumbDown, ThumbDownOutlined, ThumbUp, ThumbUpOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, Collapse, IconButton, styled, TextField, Typography } from "@mui/material";
import { useState } from "react";

const CardPost = styled(Card)(({ theme }) => ({
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: theme.spacing(2)
}));

const ResponsiveButton = styled(Button)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const ResponsiveIconButton = styled(IconButton)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        display: 'none'
    }
}));

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <ResponsiveButton {...other} />;
})(({ theme, expand }) => ({
    //transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    //marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const CardSimplePost = (props) => {
    const { post, name, date } = props;
    const [upvote, setUpvote] = useState(false);
    const [downvote, setDownvote] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const handleUpvoteReaction = () => {
        if (!upvote) {
            setUpvote(true);
            setDownvote(false);
        } else {
            setUpvote(false);
        }
    }

    const handleDownvoteReaction = () => {
        if (!downvote) {
            setUpvote(false);
            setDownvote(true);
        } else {
            setDownvote(false);
        }
    }

    const handleCommentClick = () => {
        setExpanded(!expanded);
    }

    return (
        <CardPost sx={{ maxWidth: 550 }} >
            <CardHeader
                avatar={<Avatar src="/broken-image.jpg" />}
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title={name}
                subheader={date} />
            <CardContent>
                <Typography variant='body1'> {post}</Typography>
            </CardContent>
            <CardActions>
                <Box sx={{ flexGrow: 1 }} />
                <ResponsiveButton size="small"
                    startIcon={upvote ? <ThumbUp /> : <ThumbUpOutlined />}
                    onClick={handleUpvoteReaction} >
                    Upvote
                </ResponsiveButton>
                <ResponsiveIconButton><ThumbUpOutlined /></ResponsiveIconButton>
                <Box sx={{ flexGrow: 1 }} />
                <ResponsiveButton size="small"
                    startIcon={downvote ? <ThumbDown /> : <ThumbDownOutlined />}
                    onClick={handleDownvoteReaction}>
                    Downvote
                </ResponsiveButton>
                <ResponsiveIconButton
                    onClick={handleDownvoteReaction}>
                    {downvote ? <ThumbDown /> : <ThumbDownOutlined />}
                </ResponsiveIconButton>
                <Box sx={{ flexGrow: 1 }} />
                <ExpandMore
                    expand={expanded}
                    onClick={handleCommentClick}
                    size="small"
                    startIcon={<CommentOutlined />}
                    aria-expanded={expanded}
                    aria-label="comment">

                    Comment

                </ExpandMore>

                <Box sx={{ flexGrow: 1 }} />
                <ResponsiveButton size="small" startIcon={<Share />}>Share</ResponsiveButton>
                <ResponsiveIconButton><Share /></ResponsiveIconButton>
                <Box sx={{ flexGrow: 1 }} />
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Box
                        display='flex'>
                        <Avatar src="/broken-image.jpg" />
                        <Box sx={{ flexGrow: 1, marginLeft: 2 }}>
                            <TextField fullWidth variant='standard' placeholder="Add a public comment..." />
                        </Box>

                        <IconButton> <PostAddRounded /> </IconButton>
                    </Box>
                </CardContent>
            </Collapse>
        </CardPost >
    );
};

export default CardSimplePost;
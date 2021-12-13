import React, { useState } from "react";
import { AppBar, Box, Button, IconButton, styled, Toolbar, Typography } from "@mui/material";
import { Poll, PostAdd, Search } from "@mui/icons-material";
import { Searchbox } from "./style/searchbar/Searchbox";
import { StyledInputBase } from "./style/searchbar/StyledInputBase";
import { Iconbox } from "./style/iconbar/Iconbox";
import PostDialog from "../PostDialog/PostDialog";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../SignIn/cse-logo-cut.png";

// const ResponsiveSearch = styled(Search)(({ theme }) => ({
//     [theme.breakpoints.down('md')]: {
//         display: 'none'
//     }
// }));

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

const ResponsiveTypography = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        display: 'none'
    },
    padding: '0 1em'
}));

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [post, setPost] = useState("");
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        // Decide what to do with value
        setPost(value);
    };

    const handleSearchText = (e) => {
        setSearchText(e.target.value);
    };

    const handleSearchButton = () => {
        if(searchText !== ""){
            navigate('/profile');
        }
    }

    return (
        <AppBar position="fixed">
            <Toolbar>
                <img src={Logo} alt="logo" height={'40'} />
                <ResponsiveTypography variant="h6">
                    CSE Society
                </ResponsiveTypography>
                <Searchbox>
                    {/* <SearchIconWrapper>
                        <ResponsiveSearch />
                    </SearchIconWrapper> */}

                    <StyledInputBase
                        value={searchText}
                        onChange={handleSearchText}
                        placeholder="Search…"
                        inputProps={
                            {
                                'aria-label': 'search'
                            }
                        }
                    />
                    <IconButton
                        onClick={handleSearchButton}>
                        <Search style={{ fill: '#FFF' }} />
                    </IconButton>
                </Searchbox>
                <Box sx={{ flexGrow: 1 }} />
                <Iconbox>

                    <Link to={"/create-poll"}>
                        <ResponsiveIconButton>
                            <Poll style={{ fill: '#FFF' }} />
                        </ResponsiveIconButton>
                    </Link>

                    <ResponsiveIconButton
                        onClick={handleClickOpen}
                    >
                        <PostAdd style={{ fill: '#FFF' }} />
                    </ResponsiveIconButton>


                    <Link to={"/create-poll"}>
                        <ResponsiveButton
                            variant="contained"
                            disableElevation
                            startIcon={<Poll />}
                        >
                            POLL MANAGEMENT
                        </ResponsiveButton>
                    </Link>

                    <ResponsiveButton
                        variant="contained"
                        disableElevation
                        startIcon={<PostAdd />}
                        onClick={handleClickOpen}
                    >
                        Create post
                    </ResponsiveButton>
                    <PostDialog open={open} onClose={handleClose} post={post} />
                </Iconbox>

            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
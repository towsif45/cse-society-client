import React, { useState } from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Poll, PostAdd, Search } from "@mui/icons-material";
import { Searchbox } from "./style/searchbar/Searchbox";
import { StyledInputBase } from "./style/searchbar/StyledInputBase";
import { SearchIconWrapper } from "./style/searchbar/SearchIconWrapper";
import { Iconbox } from "./style/iconbar/Iconbox";
import PostDialog from "../PostDialog/PostDialog";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [post, setPost] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        // Decide what to do with value
        setPost(value);
    };

    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6">
                    CSE Society
                </Typography>
                <Searchbox>
                    <SearchIconWrapper> 
                        <Search /> 
                    </SearchIconWrapper>

                    <StyledInputBase 
                    placeholder="Search…" 
                    inputProps={
                        { 
                            'aria-label': 'search' 
                        }
                    } 
                    />    
                </Searchbox>
                <Box sx={{ flexGrow: 1 }} />
                <Iconbox>
                    <Link to={"/create-poll"}>
                        <Button 
                            variant="contained" 
                            disableElevation 
                            startIcon={<Poll /> }
                            >
                            POLL MANAGEMENT
                        </Button>
                    </Link>
                    
                    <Button 
                        variant="contained" 
                        disableElevation 
                        startIcon={<PostAdd /> }
                        onClick={handleClickOpen}
                        >
                        Create post
                    </Button>
                    <PostDialog open={open} onClose={handleClose} post={post} />
                </Iconbox>
                
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
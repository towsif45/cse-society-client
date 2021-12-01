import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { PostAdd, Search } from "@mui/icons-material";
import { Searchbox } from "./style/searchbar/Searchbox";
import { StyledInputBase } from "./style/searchbar/StyledInputBase";
import { SearchIconWrapper } from "./style/searchbar/SearchIconWrapper";
import { Iconbox } from "./style/iconbar/Iconbox";

const NavBar = () => {
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
                    <Button variant="contained" disableElevation startIcon={<PostAdd /> }>Create post</Button>
                </Iconbox>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
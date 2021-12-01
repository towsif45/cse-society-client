import React from "react";
import { AppBar, Avatar, Box, Toolbar, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";
import { Searchbox } from "./style/searchbar/Searchbox";
import { StyledInputBase } from "./style/searchbar/StyledInputBase";
import { SearchIconWrapper } from "./style/searchbar/SearchIconWrapper";
import { Iconbox } from "./style/iconbar/Iconbox";
import { deepOrange } from "@mui/material/colors";

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
                    <Box sx={{ width: '1em'}} />
                    <Avatar sx={{ bgcolor: deepOrange[500] }}> T </Avatar>
                </Iconbox>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        if (searchTerm) {
            navigate(`/search/${searchTerm}`);
            setSearchTerm('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white px-4 flex" style={{ borderRadius: "20px"}}>
            <input placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="odisseia search-bar" />
            <IconButton type="submit" sx={{ p: '10px', color: '#c9b6e7' }}>
                <Search className="searchButton" />
            </IconButton>
        </form>
    )
}

export default SearchBar;
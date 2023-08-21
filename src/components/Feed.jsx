import { useState, useEffect } from 'react';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Navbar, Sidebar, Videos } from './';
import { Box, Stack, Typography } from '@mui/material';

const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data.items))
    }, [selectedCategory]);

    return (
        <div className="mainWallpaper w-full h-screen">
            <Navbar />
            <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
                <Box sx={{ bgcolor: "6e6e6e", height: { sx: "auto", md: "92vh" }, px: { sx: 0, md: 2 } }}>
                    <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                </Box>
                <div className="overflow-scroll">
                    <Box className="feed" p={2} sx={{ overflowY: "auto", height: { md: "80vh" }, width: "full", flex: 2, marginRight: "1vw" }}>
                        <div className="h-auto mb-5 p-2 drop-shadow-lg" style={{ width: "full", backgroundColor: "#827689", borderRadius: "20px", paddingBottom: "1px" }}>
                            <Typography variant="h4" mb={1} ml={2} sx={{ color: 'white', fontFamily: "anton, sans-serif", letterSpacing: "0.05em" }}>
                                {selectedCategory} <span style={{ color: "#c9b6e7" }}>Videos</span>
                            </Typography>
                        </div>
                        <Videos videos={videos} />
                    </Box>
                </div>
            </Stack>
        </div>
    )
}

export default Feed;
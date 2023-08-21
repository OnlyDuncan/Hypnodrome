import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Navbar, Videos } from './';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (

    <div className="mainWallpaper w-full h-screen">
      <Navbar />
      <Box p={2} sx={{ overflowY: "scroll", height: "80vh", flex: 2 }}>
        <div className="p-2 pb-1 mb-3" style={{ borderRadius: "20px", backgroundColor: "#827689", width: "full" }}>
          <Typography fontFamily="odisseia, sans-serif" variant="h4" fontWeight="bold" mb={1} ml={2} sx={{ color: 'white' }}>
            Search Results For: <span style={{ color: "#c9b6e7" }}>{searchTerm}</span>
          </Typography>
        </div>
        <Videos videos={videos} />
      </Box>
    </div>

  )
}

export default SearchFeed;
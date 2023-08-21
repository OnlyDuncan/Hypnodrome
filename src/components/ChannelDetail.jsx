import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { Videos, Navbar } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { CheckCircle } from '@mui/icons-material';
import { demoProfilePicture } from '../utils/constants';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <div className="mainWallpaper w-full h-screen">
      <Navbar />
      <div style={{ overflowY: 'scroll', height: '75vh' }}>
        <div className="flex justify-center align-center drop-shadow-lg" style={{ backgroundColor: "#827689", borderRadius: "20px", margin: '20px' }}>
          <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", color: "#fff" }}>
            <CardMedia
              image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
              alt={channelDetail?.snippet?.title}
              sx={{ zIndex: '9', borderRadius: "50%", height: "180px", width: "180px", mb: 2, border: "1px solid #e3e3e3" }}
            />
            <Typography fontFamily="odisseia, sans-serif" variant="h6">
              {channelDetail?.snippet?.title}
              <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
            </Typography>
            {channelDetail?.statistics?.subscriberCount && (
              <Typography fontFamily="odisseia, sans-serif">
                {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()}
                <br />
                Subscribers
              </Typography>
            )}
          </CardContent>
        </div>
        <Box display="flex" p="2" sx={{ marginX: '20px' }}>
          <Box sx={{ mr: { sm: '100px' } }} />
          <Videos videos={videos} />
        </Box>
      </div>
    </div>
  )
}

export default ChannelDetail;
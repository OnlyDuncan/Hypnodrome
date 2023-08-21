import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Navbar, Loading } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI'

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]));

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items));
  }, [id]);

  if (!videoDetail?.snippet) return (
    <Loading />
  );

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <div className="mainWallpaper w-full h-screen">
      <Navbar />
      <div style={{ overflowY: 'scroll' }}>
        <Box className="flex justify-center" style={{ width: "100%" }}>
          <Box className="flex-col drop-shadow-lg" style={{ margin: "15px" }}>
            <ReactPlayer className="video" url={`https://www.youtube.com/watch?v=${id}`} controls style={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px", overflow: "hidden" }} />
            <div style={{ backgroundColor: "#827689", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px", width: "90vw" }}>
              <Typography fontFamily="odisseia, sans-serif" color="#fff" variant="h5" fontWeight="bold" p={2}>
                {title}
              </Typography>
              <Stack direction="row" justifyContent="space-between" sx={{ color: '#fff' }} py={1} px={2}>
                <Link to={`/channel/${channelId}`}>
                  <Typography fontFamily="odisseia, sans-serif" variant={{ sm: 'subtitle1', md: 'h6' }}
                    color="#fff">
                    {channelTitle}
                    <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                  </Typography>
                </Link>
                <Stack direction="row" gap="20px" alignItems="center">
                  <Typography fontFamily="odisseia, sans-serif" variant="body1" sx={{ opacity: 0.7 }}>
                    {parseInt(viewCount).toLocaleString()} Views
                  </Typography>
                  <Typography fontFamily="odisseia, sans-serif" variant="body1" sx={{ opacity: 0.7 }}>
                    {parseInt(likeCount).toLocaleString()} Likes
                  </Typography>
                </Stack>
              </Stack>
            </div>
          </Box>
        </Box>
      </div>
    </div>
  )
};

export default VideoDetail;
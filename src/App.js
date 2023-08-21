import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Entry, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';

const App = () => (
    <BrowserRouter>
        <div className="body relative h-screen">
            <Routes>
                <Route path="/" element={<Entry />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/video/:id" element={<VideoDetail />} />
                <Route path="/channel/:id" element={<ChannelDetail />} />
                <Route path="/search/:searchTerm" element={<SearchFeed />} />
            </Routes>
        </div>
    </BrowserRouter>
)

export default App;
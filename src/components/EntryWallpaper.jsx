import React from 'react';
import Wallpaper from '../assets/EntryWallpaper.svg';

const EntryWallpaper = () => (
    <div>
        <img src={Wallpaper} className="absolute inset-0 object-cover fill w-full h-screen" />
    </div>
)

export default EntryWallpaper;
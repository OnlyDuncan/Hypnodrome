import React from 'react';
import { EntryWallpaper } from './';

const Entry = () => {
    const styles = {
        position: 'absolute',
        backgroundColor: '#232323',
        width: '40vh',
        height: '40vh',
        borderRadius: '50%',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }

    return (
        <div className="flex w-full h-screen">
            <div>
                <EntryWallpaper />
            </div>
            <div className="flex" style={styles}>
                <div className="flex-col w-full h-full mt-16 justify-center">
                    <h1 className="abril text-center text-2xl" style={{ color: "#b7b7b7" }}>
                        Welcome
                    </h1>
                    <h2 className="text-center odisseia mb-1 text-md" style={{ color: "#b7b7b7" }}>
                        to the
                    </h2>
                    <h1 className="text-center anton text-4xl" style={{ color: "#b7b7b7" }}>
                        HYPNODROME
                    </h1>
                    <div className="flex mt-7 justify-center">
                        <a href="/feed" className="odisseia enterButton text-center" style={{ color: "#b7b7b7" }}>
                            ENTER
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Entry;
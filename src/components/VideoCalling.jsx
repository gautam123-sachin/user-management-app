import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const VideoCalling = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState(''); 
    
    const handleJoinRoom = useCallback(() => {
        navigate(`/room/${value}`);
    }, [navigate, value]);

    return (
        <>
            <input type='text' placeholder='Enter Code' value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={handleJoinRoom}>Join</button>
        </>
    );
}

export default VideoCalling;

import React, { useEffect, useRef } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

const Rooms = () => {
    const { roomId } = useParams();
    const elementRef = useRef(null);
    console.log('roomId', roomId);

    useEffect(() => {
        const MyMeeting = async () => {
            const appID = 1040720909;
            const serverSecret = "e94306544434c926fc479134e6a51f83";
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "Sachin Gautam");
            const zc = ZegoUIKitPrebuilt.create(kitToken);
            zc.joinRoom({
                container: elementRef.current,
                sharedLinks: [{
                    name: 'Copy Link',
                    url: 'http://localhost:3000/room/' + roomId
                }],
                scenario: {
                    mode: ZegoUIKitPrebuilt.OneONoneCall,
                },
                showScreenSharingButton: false,
            });
        };

        MyMeeting();
    }, [roomId]);

    return (
        <div ref={elementRef} />
    );
};

export default Rooms;

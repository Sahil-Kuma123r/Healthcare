import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'

const RoomPage = () => {
  const { roomId } = useParams();

  const myMeeting = async (element) => {
    const appID = 282549738;
    const serverSecret = "bfd0919df782bc0ddf459326bdaf9862";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, "Sachin2512", "Sachin");

    const zc = ZegoUIKitPrebuilt.create(kitToken);

    zc.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "CopyLink",
          url: `http://localhost:3000/room/${roomId}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      showScreenSharingButton: false,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-100 to-blue-200 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 shadow-sm rounded-md bg-white px-6 py-4 animate-bounce">
      Connecting to Emergency Doctors 
      </h1>
      <div
        className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-4 border-2 border-gray-200"
        ref={myMeeting}
      />
    </div>
  );
}

export default RoomPage

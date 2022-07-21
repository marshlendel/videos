import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const videoList = videos.map((video) => {
    return <VideoItem video={video} />;
  });

  return <div>{videoList}</div>;
};

export default VideoList;

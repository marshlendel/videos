import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoClick }) => {

  const videoList = videos.map((video) => {
    return <VideoItem key={video.id.videoId} video={video} onVideoClick={onVideoClick} />;
  });

  return <div className="ui relaxed divided list">{videoList}</div>;
};

export default VideoList;

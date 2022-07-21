const VideoItem = ({video}) => {
  return (
  <div>
    <img alt="thumbnail" src={video.snippet.thumbnails.medium.url}/>
    {video.snippet.title}
  </div>

  )
};

export default VideoItem
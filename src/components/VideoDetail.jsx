const VideoDetail = ({ selectedVideo }) => {
  return (
    <div>
      <div className="ui embed">
        <iframe
          title={selectedVideo.snippet.title}
          src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
        ></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{selectedVideo.snippet.title}</h4>
        <p> {selectedVideo.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;

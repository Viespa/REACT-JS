
const VideoItem =  ({title, description , upldoadDate, duration}) =>{
    const seconds = duration % 60;
    const minutes = Math.floor(duration / 60);
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <span>
                    {minutes}:{seconds}
                </span>
                <br></br>
                <span>{upldoadDate.toLocaleDateString()}</span>
            </div>
            <p>{description}</p>
        </div>
    );
};

export default VideoItem;
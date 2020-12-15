import React,{useState} from 'react'
import './VideoSidebar.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';

function VideoSidebar(props) {
    const [liked,setLiked] = useState(false);
    const [totalLike,setTotalLike] = useState(props.likes);
    const decrease  = () => {
        if(totalLike > 1){
            setTotalLike(totalLike - 1);
            setLiked(false);
        }
    }
    const increase = () => {
        setTotalLike(totalLike + 1)
        setLiked(true);
    }
    return (
        <div className="video-sidebar">
            <div className="sidebar_button">
                {liked ? (<FavoriteIcon fontSize="large" onClick={decrease} />)
                : (<FavoriteBorderIcon fontSize="large" onClick={increase} />)
                }
                <p>{totalLike}</p>
            </div>

            <div className="sidebar_button">
                <MessageIcon fontSize="large" />
                <p>{props.messages}</p>
            </div>
            <div className="sidebar_button">
                <ShareIcon fontSize="large" />
                <p>{props.shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar

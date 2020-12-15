import React,{useRef,useState} from 'react'
import './Video.css'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'
//import video from './128702219_377360967022428_3395447074278355556_n.mp4'

function Video(props) {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const videoPress = () =>{
        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        }
        else{
            videoRef.current.play();
            setPlaying(true);
        }
    }
    return (
        <div className="video">
            <video
            className="video_player"
            onClick={videoPress}
            src = {props.src}
            loop
            ref={videoRef}></video>
            
            <VideoFooter
                handleName={props.handleName}
                description={props.description}
                song={props.song} />
            
            <VideoSidebar
                likes={props.likes}
                messages={props.messages}
                shares={props.shares}/>
        </div>
    )
}

export default Video


/*
https://instagram.fpnq7-1.fna.fbcdn.net/v/t50.2886-16/129988434_373121290449465_4446583986438391798_n.mp4?_nc_ht=instagram.fpnq7-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=JFCj6Ao_yfUAX-O9Gkf&oe=5FD9EBC7&oh=3bca6425d0c0d00adb144962854b6837
https://www.instagram.com/reel/CIaIExups5q/?igshid=driuuevw2a8f

https://www.instagram.com/reel/CIbDC1blly5/?igshid=wij2mixb3w9

https://www.instagram.com/reel/CIUTR0cgJuP/?igshid=bo2s8xc7it4f

https://instagram.fpnq7-1.fna.fbcdn.net/v/t50.2886-16/128702219_377360967022428_3395447074278355556_n.mp4?_nc_ht=instagram.fpnq7-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=Ub6CEuZPneoAX_Fyou0&oe=5FD99BE9&oh=690f3f512f839e739737b430d71a759b
*/
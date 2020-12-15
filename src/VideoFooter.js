import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker'

function VideoFooter(props) {
    return (
        <div className="videoFooter">
            <div className="videofooter_text">
                <h3>@{props.handleName}</h3>
                <p>{props.description}</p>
                <div className="videofooter_ticker">
                    <MusicNoteIcon className="videofooter_icon" />
                    <Ticker mode="smooth">
                        {({index}) => (
                            <p>{props.song}</p>
                        )
                        }
                    </Ticker>
                </div>  
            </div>
            <img className="videofooter_record" src="https://static.thenounproject.com/png/934821-200.png" />
        </div>
    )
}

export default VideoFooter

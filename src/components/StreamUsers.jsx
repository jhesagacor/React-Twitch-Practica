export default function StreamUsers(props) {
    return (
        <article className="user-container">
            <img src={props.image} alt=""/>
            <div>
            <p>{props.streamerName}</p>
            <p className="streamer-gameName">{props.streamerGame}</p>
            </div>
            <div className="live-btn-container">{props.streamerStatus === 'live' && <a href="#" className="btn btn_live"><span className="live-icon-live"></span></a>}{props.streamerStatus === 'offline' && <a href="#" className="btn btn_live"><span className="live-icon-offline"></span></a>}</div>
        </article>
    )
}
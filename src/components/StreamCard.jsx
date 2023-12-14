export default function StreamCard(props) {
    let classnames = 'game-card';
    
    return (
        <article className={classnames}>
            <img src={props.image} alt="Stream-Image" />
            <p className="streamName-color">{props.streamName}</p>
            <p className="viewers-color">{props.viewers}</p>
            {props.category === 'new' && <p className="label-new">{props.category}</p>}
        </article>
    )
}
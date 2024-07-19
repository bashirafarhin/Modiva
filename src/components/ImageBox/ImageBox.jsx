import "./ImageBox.css"

export default function ImageBox(props){
    return (
            <div className="image-container" onClick={props.onClick}>
                <img src={props.url}/>
                <div className="image-container-text">
                 <h1>{props.heading}</h1>
                 <p>{props.text}</p>
                 <button>{props.buttonText}</button>
                </div>
            </div>
    )
}
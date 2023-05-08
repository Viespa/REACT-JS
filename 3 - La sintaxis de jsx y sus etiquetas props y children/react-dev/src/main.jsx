import  ReactDOM from "react-dom";
import "./index.css"

const Title = props => {
    return <h3 className="title">{props.texto}</h3>
}

const app = (
    <div>
        <Title texto="Desarrollo Viespa"></Title>
    </div>
);

const container = document.getElementById("root");

ReactDOM.render(app, container);
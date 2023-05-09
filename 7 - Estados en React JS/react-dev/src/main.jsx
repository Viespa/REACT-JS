import  ReactDOM from "react-dom";
import "./styles/index.css"
import App from "./App";



const container = document.getElementById("root");


console.log(<div className="hola">ASD</div>)
console.log(<App/>)
console.log(App())

ReactDOM.render(<App></App>, container);
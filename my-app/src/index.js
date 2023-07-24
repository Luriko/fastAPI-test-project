import React from "react"
import ReactDOM from "react-dom"

// ReactDOM.render(<div>
//     <h1>hello</h1>
//     <h2>dwada</h2>
//     </div>, document.getElementById("app"))
const inputClick = () => console.log("clicked")
const mouseOver = () => console.log("Mouse Over")

const elem = <input placeholder="Help text" onClick={inputClick} onMouseEnter={mouseOver}/> 
const app = document.getElementById("app");

ReactDOM.render(elem,app)
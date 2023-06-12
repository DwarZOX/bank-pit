import { BrowserRouter } from "react-router-dom"
import Routing from "./routes"
import { StateContext } from "./context/StateContext"


function App() {

  return (
    <StateContext>
    <Routing/>
    </StateContext>
    )
}

export default App

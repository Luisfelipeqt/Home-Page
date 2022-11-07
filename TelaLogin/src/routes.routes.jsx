import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import App from "./App";
import { EstoqueComponent } from "./estoque";

export function RoutesComponent(){
    <Router>
        <Routes>
          <Route path="/home" element={<App />}/>
          <Route path="/estoque" element={<EstoqueComponent />}/>
        </Routes>
    </Router>
}


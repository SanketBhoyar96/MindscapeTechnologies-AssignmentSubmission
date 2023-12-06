
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Componant/Home";
import Login from "./Componant/Login";
import Register from "./Componant/Register";


function App() {
  return (
    <div className="App">
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Register/>}/> 
     <Route path='/Home' element={<Home/>} /> 
     <Route path="/login" element={<Login/>} />
    </Routes>
 </BrowserRouter>
    </div>
  );
}

export default App;

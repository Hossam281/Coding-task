import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <div className="flex flex-col w-full h-full  justify-center ">
      <>
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Login/>}/>
         <Route path='/home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
      </>
    </div>
  );
}

export default App;

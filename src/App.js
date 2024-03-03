import React,{useState} from "react";
import Home from "./Components/Home";
import ShowData from "./Components/ShowDate";
import style from "./style.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
const App=()=>{
    const [postData,setPostData] = useState([]);
    const [pin,setPin] = useState("");
    return(
        <Router>
            <Routes>
                <Route path="/" element={
                    <Home postData={postData} setPostData={setPostData} pin={pin} setPin={setPin}/>
                } />
                <Route path="/showdata" element={
                    <ShowData postData={postData} pin={pin}/>
                } />
            </Routes>
        </Router>
    )
}
export default App;


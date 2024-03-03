import React, { useState,useEffect } from "react";
import axios from "axios";
import ShowData from "./ShowDate";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home=({postData,setPostData,pin,setPin})=>{
    const [no,setNo] = useState("");
    // const history = useHistory();
    const Navigate=useNavigate();


    const fetchData = async () => {
        try {
          const response = await axios.get(`https://api.postalpincode.in/pincode/${no}`);
          console.log(response.data[0].PostOffice);
          setPostData(response.data[0].PostOffice);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      useEffect(() => {
        if (no !== "") {
          fetchData();
        }
      }, [no]);
    function fn(e){
        e.preventDefault();
        setPin(no);
        setNo("");
        Navigate("/showdata");
    }
    return(
        <div className="main">
            <h1>Enter Pincode</h1>
            <form onSubmit={fn}> 
                <input className="int" type="number" onChange={(e)=>setNo(e.target.value)} value={no}/>
                <br />
                <button className="btn" type="submit" >Lookup</button>
            </form>
            {/* <p>{no}</p> */}
        </div>
    )
}

export default Home;
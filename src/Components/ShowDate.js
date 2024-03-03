import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

const ShowData=({postData,pin})=>{
    const [search, setSearch] = useState("");
    const filteredData = postData.filter((item) =>
    item.Name.toLowerCase().includes(search.toLowerCase())
    );
    let navigate = useNavigate()
    let n = postData.length;

    return(
        <div className="main">
            <h2>Pincode : {pin}</h2>
            <h2>Message : Number of pincode's found : {n}</h2>
            <form>
            <input className="int" type="text" placeholder="Filter" onChange={(e)=>setSearch(e.target.value)} value={search}/>
            </form>
            <div className="container">
            {filteredData.length === 0 ? (
          postData.map((item, index) => (
            <div className="postBox" key={index}>
              <p>Name : {item.Name}</p>
              <p>Branch Type : {item.BranchType}</p>
              <p>Delivery Status : {item.DeliveryStatus}</p>
              <p>District : {item.District}</p>
              <p>State : {item.State}</p>
            </div>
          ))
        ) : (
          filteredData.map((item, index) => (
            <div className="postBox" key={index}>
              <p>Name : {item.Name}</p>
              <p>Branch Type : {item.BranchType}</p>
              <p>Delivery Status : {item.DeliveryStatus}</p>
              <p>District : {item.District}</p>
              <p>State : {item.State}</p>
            </div>
          ))
        )}
            </div>
            <button className="btn" onClick={()=>navigate("/")}>Go Back</button>
        </div>
    )
}

export default ShowData;
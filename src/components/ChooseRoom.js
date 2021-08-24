import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import firebase from "firebase";

import { useLocation } from "react-router-dom";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

Modal.setAppElement("#root");

let roomno = "";
let hostelno = "";



export default function ChooseRoom() {
  let [counter,setCounter]= useState(0);
  let [hno,sethno] = useState("");
  let [rno,setrno] = useState("");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [isOpen, setIsOpen] = useState(false);
  hostelno = queryParams.get("hostel");
 
  
   function showModal() {
    setIsOpen(!isOpen);
    
    const db = firebase.firestore();
  // db.settings({
  //   timestampsInSnapshots: true
  // });
  const userRef = db.collection("users").doc("yo").set({
    hostelno: hno,
    roomno: rno,
  }); 
  console.log(userRef);
  // const citiesRef = await db.collection('cities').doc('SF').set({
  //   name: 'San Francisco', state: 'CA', country: 'USA',
  //   capital: false, population: 860000
  // });
  
  

  }

  const grey = (e) => {
    
    setCounter(0);
    e.target.classList.toggle("grey");

    console.log(e.target.className);
    if (e.target.className === "room-button grey") {
      setCounter(1);   

      console.log(roomno);
      roomno = e.target.innerText;
      setrno(roomno);
      sethno(hostelno);
    }
  };

  return (
    <div className="container-room0" id="root2">
      <h3>Choose a Floor</h3>

      <select className="floor">
        <option>1st Floor</option>
        <option>2nd Floor</option>
        <option>3rd Floor</option>
        <option>4th Floor</option>
        <option>5th Floor</option>
      </select>
      <div className="container-room">
        <div className="room-grid">
          <button onClick={grey} className="room-button">
            1
          </button>
          <button onClick={grey} className="room-button">
            2
          </button>
          <button onClick={grey} className="room-button">
            3
          </button>
          <button onClick={grey} className="room-button">
            4
          </button>
          <button onClick={grey} className="room-button">
            10
          </button>
          <button className="room-button hide"></button>
          <button className="room-button hide"></button>
          <button onClick={grey} className="room-button">
            5
          </button>
          <button onClick={grey} className="room-button">
            9
          </button>
          <button onClick={grey} className="room-button">
            8
          </button>
          <button onClick={grey} className="room-button">
            7
          </button>
          <button onClick={grey} className="room-button">
            6
          </button>
        </div>
      </div>
      <div>
        <button
          
          className={counter?"book-room-button":"book-room-button hide" }      
          onClick={showModal}
        >
          Book Room
        </button>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={showModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div>
          <div className="container-modal">
            
            <FontAwesomeIcon onClick={showModal} icon={faTimesCircle}  style={{ display:"inline",color:"red",fontSize:"1.5rem",cursor:"pointer"}} />
          
            
            <h2 style={{margin:"auto"}} >Success  </h2>
          </div>
          <div className="room-modals">
          <div style={{ textAlign: "center" }}>
            Your room has been booked successfully.
          </div>
          <div style={{ marginTop:"2rem", marginLeft:"3rem" }}>
            Your room details are as follows:
          </div>
          <div style={{ marginTop: 20, marginLeft: 10 }}>
            Hostel No. <span style={{color:"red"}}>{hno}</span>
          </div>
          <div style={{ marginTop: 10, marginLeft: 10 }}>Room No. <span style={{color:"red"}}>{rno}</span></div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

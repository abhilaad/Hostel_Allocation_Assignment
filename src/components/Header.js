import React from "react";
import newton from "./newton.jpg";
import firebase from "firebase";


import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header(props) {
  let signout = ()=>{
    
    return () => firebase.auth().signOut()

  }
  return (
    <>
      <div className="headbar">
          <div className="subheader">
          <img
          src={newton}
          alt="newton"
          width="40vw"
          height="45vh"
          className="heading"
        ></img>
        
          <h3 style={{ display:"flex", flexWrap:"nowrap", marginLeft:"1vw" }}>Newton School</h3>

          </div>
        
        
        {props.name ? (
          <div className="subheader2" style={{ marginLeft:"15vw" }}>
            
            
              <img className="image-profile" alt="profile" src={firebase.auth().currentUser.photoURL} />
            

            <div style={{cursor:"pointer",fontWeight:"700", marginRight:"1.2rem"}} onClick={signout()}>
              
              Sign out!
            </div>

            <FontAwesomeIcon
              icon={faCaretDown}
              style={{ color: "grey", fontSize: "1.5rem" }}
            />
          </div>
        ) : null}
        
    
      </div>
      
      
    </>
  );
}

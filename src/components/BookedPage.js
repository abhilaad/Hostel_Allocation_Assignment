import React from 'react'

export default function BookedPage(props) {
    let user = props.user;
    
    return (
        <>
        <div className="booked-container">
            <h1>Welcome {user} </h1>
            </div>
            <div className="sub-booked-container">
                <h4>You have already booked a room.</h4>
                <h3>Your room details are as follows:</h3>
                <h3>Hostel No . <span style={{color:"red"}}>{props.hno}</span></h3>
                <h3>Room No . <span style={{color:"red"}}>{props.rno}</span></h3>
            </div>
            
        
        </>
    )
}

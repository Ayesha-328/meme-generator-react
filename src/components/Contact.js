import React, { useState } from 'react'
import './styles.css'

import Star from './Star'

function Contact(props) {
    // const [contact, setContact] = useState(
    //     {
    //         firstName: "John",
    //         lastName: "Doe",
    //         phoneNo: "8876765767",
    //         email: "johndoe@gmail.com",
    //         isFavorite: false
    //     }
    // )

    // function toggleFav(){
    //     setContact(prevContact =>{
    //         return {
    //             ...prevContact,
    //             isFavorite:!prevContact.isFavorite
    //         }
    //     })

    // }

    
    return (
        // <div className="contact-container">
        //     <img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="" className="profile-img" />
        //     <div className="card-info">
        //         <Star icon={contact.isFavorite} handleClick={toggleFav}/>
        //         <h1 className="name">{contact.firstName} {contact.lastName}</h1>
        //         <p className="phone-no">{contact.phoneNo}</p>
        //         <p className="email">{contact.email}</p>
        //     </div>

        // </div>

        // Counter exercise
        <div className="counter-container">
            <h1 className="display-count">{props.number}</h1>
        </div>
    )
}

export default Contact
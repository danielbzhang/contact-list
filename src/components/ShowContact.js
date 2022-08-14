import { Link } from "react-router-dom";
import "../App.css";
import React from "react";

const ShowContact = ({ contactId, contacts }) => {
  let contact = contacts[contactId];

  if (!contact) {
    return <div>Sorry, the contact was not found</div>;
  }

  console.log(contact.image_url);

  return (
    <div className="card">
      <img className="card-img-top" src="https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg" alt={contact.name} />
      <div className="card-body">
        <h5 className="card-title">{contact.name}</h5>
        <div className="card-text">
          <div className="card-email">{contact.email}</div>
          <div className="card-phoneNumber">{contact.phone_number}</div>
        </div>
        <Link to="/contacts">Back</Link>
      </div>
    </div>
  );
};

export default ShowContact;

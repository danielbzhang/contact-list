import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Home = ({ contacts }) => {
  const history = useHistory();
  function handleRowClick(index) {
    history.push(`/contacts/${index}`);
  }
  return (
    <div>
      <Link to="/contacts/new">
        <button type="submit" className="btn btn-primary" id="addcontact-btn">
          Add Contact
        </button>
      </Link>
      <table className="table-center table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th>Profile Pic</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c, index) => (
            <tr key={index} onClick={() => handleRowClick(index)}>
              {/* <Link to={`/contacts/${index}`}></Link> */}
              <td className="profile-pic">
                <img
                  src={c.image_url}
                  alt=""
                  border="3"
                  height="150"
                  width="150"
                />
              </td>

              <td>{c.name}</td>

              <td>{c.email}</td>

              <td>{c.phone_number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;

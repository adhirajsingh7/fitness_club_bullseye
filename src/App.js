//---------------working code------------------------------------

import React, { useState } from "react";

const FitnessClubRegistration = () => {
  const [members, setMembers] = useState([]);
  const [member, setMember] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const handleChange = (event) => {
    setMember({
      ...member,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMembers([...members, member]);
    setMember({
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
    });
  };

  return (
    <div>
      <h1>Fitness Club Registration</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input className="form-control"
            type="text"
            name="name"
            value={member.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input className="form-control"
            type="email"
            name="email"
            value={member.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input className="form-control"
            type="tel"
            name="phoneNumber"
            value={member.phoneNumber}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Address:
          <input className="form-control"
            type="text"
            name="address"
            value={member.address}
            onChange={handleChange}
          />
        </label>
        <br />
        <button className="btn btn-primary my-3" type="submit">Add member</button>
      </form>
      {members.length > 0 && (
        <>
          <h2>User added successfully!</h2>
          <button onClick={() => setMembers([])}>View Member List</button>
          {members.length > 0 && (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member, index) => (
                  <tr key={index}>
                    <td>{member.name}</td>
                    <td>{member.email}</td>
                    <td>{member.phoneNumber}</td>
                    <td>{member.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      )}
    </div>
  );
};

export default FitnessClubRegistration;

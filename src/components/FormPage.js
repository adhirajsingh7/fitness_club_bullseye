import React, { useState } from 'react';
// import { useHistory } from 'history';
import { Navigate, useNavigate } from 'react-router-dom';

const FormPage = () => {
  const [member, setMember] = useState({ name: '', email: '', phone: '', address: '' });
  // const history = useHistory();
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(member.email, JSON.stringify(member));
    setMember({ name: '', email: '', phone: '', address: '' });
    // history.push('/view-member-list');
    navigate.push('/view-member-list')
  };

  return (
    <div>
      <h1>Fitness Club Registration</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={member.name} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={member.email} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Phone Number:
          <input type="tel" name="phone" value={member.phone} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Address:
          <input type="text" name="address" value={member.address} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Add Member</button>
      </form>
    </div>
  );
};

export default FormPage;

import React from 'react';

const Profile = ({ formData }) => {
  return (
    <div>
      <h2>Profile Details</h2>
      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>Email: {formData.email}</p>
      <p>Favorite Season: {formData.favoriteSeason}</p>
    </div>
  );
};

export default Profile;

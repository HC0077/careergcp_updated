// Profile.js
import React from 'react';

function Profile() {
  return (
    <div className="container">
      <h2 className="mt-5 mb-4">Your Profile</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">User Details</h5>
              <p className="card-text"><strong>Name:</strong> John Doe</p>
              <p className="card-text"><strong>Email:</strong> johndoe@example.com</p>
              <a href="/edit-profile" className="btn btn-primary">Edit Profile</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Account Settings</h5>
              <p className="card-text">Change your password or email preferences here.</p>
              <a href="/settings" className="btn btn-secondary">Account Settings</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

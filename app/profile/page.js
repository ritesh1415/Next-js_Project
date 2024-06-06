"use client"; 

import { useSelector } from 'react-redux';

const page = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      <h1>Profile</h1>
      {user ? (
        <div>
          <p>Username: {user.username}</p>
          <p>Role: {user.role}</p>
        </div>
      ) : (
        <p>You need to log in to view this page.</p>
      )}
    </div>
  );
};

export default page;

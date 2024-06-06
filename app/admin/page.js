"use client"; 

import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Page = () => {
  const user = useSelector((state) => state.auth.user);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };

    if (user && user.role === 'admin') {
      fetchUsers();
    } else {
      setLoading(false);
    }
  }, [user]);

  return (
    <div>
      <h1>Admin</h1>
      {loading ? (
        <p>Loading...</p>
      ) : user && user.role === 'admin' ? (
        <ul>
          {users.map((u) => (
            <li key={u._id}>{u.username}</li>
          ))}
        </ul>
      ) : (
        <p>You do not have permission to view this page.</p>
      )}
    </div>
  );
};

export default Page;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import UserList from './components/UserList';
import PageNotFound from './components/PageNotFound';
import UserDetail from './components/UserDetails';
import useFetchUsers from './hooks/useFetchUsers';
import VideoCalling from './components/VideoCalling';
import Rooms from './components/Rooms';


const App = () => {
  const { users, loading, error } = useFetchUsers();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList users={users} loading={loading} error={error} />} />
        <Route path="/users/:userId" element={<UserDetail />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/video" element={<VideoCalling />} />
        <Route path = "/room/:roomId" element={<Rooms />} />
      </Routes>
    </Router>
  );
};

export default App;

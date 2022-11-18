import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddUser from './components/AddUser';
import UserList from './components/UserList';
import { Helmet } from 'react-helmet'
import EdtUser from './components/EdtUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserList />} />
        <Route path='/add' element={<AddUser />} />
        <Route path='/edit/:id' element={<EdtUser />} />
      </Routes>

      <Helmet>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" />
      </Helmet>
    </BrowserRouter>
  );
}

export default App;

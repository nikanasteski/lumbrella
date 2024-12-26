import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Category from './components/Category';
import Phone from './components/Phone';
import Email from './components/Email';
import Layout from './components/Layout';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route 
          index
          element={<Home />}
        />

        <Route 
          path='/category'
          element={<Category />}
        />

        <Route 
          path='/phone'
          element={<Phone />}
        />

        <Route 
          path='/email'
          element={<Email />}
        />
      </Routes>
    </Layout>
  ); 
}

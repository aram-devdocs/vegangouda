import { Routes, Route } from 'react-router-dom';

import { LoginPage } from '../pages/LoginPage';
import { Fragment } from 'react';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<div>register</div>} />
    </Routes>
  );
};

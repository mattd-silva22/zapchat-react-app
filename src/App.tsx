import React from 'react';
import { AuthContextProvider } from './context/AuthContext';
import { HomePage } from './pages/HomePage/HomePage';


function App() {
  return (
    <AuthContextProvider>
        <HomePage></HomePage>
    </AuthContextProvider>
    
  );
}

export default App;

import React from 'react';
import { AuthContextProvider } from './context/AuthContext';
import { HomePage } from './pages/HomePage/HomePage';
import { ChatRooms } from './pages/ChatRooms/ChatRoom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';


function App() {
  return (

    <BrowserRouter>

      
        <AuthContextProvider>
          <Switch>
              <Route path={'/'} exact component={HomePage}/>
              <Route path={'/rooms'} component={ChatRooms}/>
          </Switch>
        </AuthContextProvider>
      
      
    </BrowserRouter>
    
    
  );
}

export default App;

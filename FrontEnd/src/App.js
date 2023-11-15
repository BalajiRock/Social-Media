// import logo from './logo.svg';
import { createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider } from 'react-router-dom'
import './App.css';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';
import Explore from './Explore';
import ProfilePage from './ProfilePage';
import Notification from './Notification';
import MessagePage from './MessagePage';
import DirectMessage from './DirectMessage';
import Post from './UpdateComponent';
import Posts from './Posts';
// import ReactDOM from 'react-dom';
// import React from 'react';
import { createRoot } from 'react-dom/client';


const Root = () => {
  return <>
    <div>
      <Outlet />
    </div>
  </>
}
const HomeLater = () => {
  return (
    <div>
      <h2>Home Page Content</h2>
      {/* Additional components/content for the Home page */}
    </div>
  );
}


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index path='/' element={<SignIn />} />
      <Route path='/SignUp' element={<SignUp />} />
      <Route path='/Home' element={<Home />} >
        {/* <Route  path='/Home' element= {<HomeLater/>} /> */}

        {/* <Route  path='/Home' element= {<Posts />} /> */}

      </Route>
      <Route path='/Explore' element={<Explore />} />
      <Route path='/Notification' element={<Notification />} />
      <Route path='/ProfilePage' element={<ProfilePage />} />
      <Route path='/MessagePage' element={<MessagePage />} />
      <Route path='/DirectMessage' element={<DirectMessage />} />
      {/* add others components like contact about */}
    </Route>
  )
)

// const root = createRoot(document.getElementById('root'));
// root.render(<Posts />);

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />

    </div>
  );
}
export default App;

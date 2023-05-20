import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from './store/hook';
import { fetchUser, setUser } from './store/userSlice';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Post from './components/post/Post';
import Login from './components/login/Login';
import Basket from './components/basket/Basket';
import Footer from './components/footer/Footer';
import FeedBack from './components/feedback/Feedback';

function App() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.user);

  useEffect(() => {
    dispatch(fetchUser())
  }, []);

  return (
    <BrowserRouter>
      <div className='content'>
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket/:id" element={<Basket />} />
          <Route path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/feedback" element={<FeedBack />} />
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import SignUp from './SignUp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import DateRangeSelector from './DateRangeSelector';
import GuestForm from './GuestForm';
import AccountPage from './AccountPage';


function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Date" element={<DateRangeSelector />}></Route>
          <Route path="/guestform" element={<GuestForm />} />
          <Route path="/accountpage" element={<AccountPage />} />
          {/* <Route path="/mainpage" element={<MainPage />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/profile" element={<Profile />} /> */}

        </Routes>
      </Router>
      </>
  );
}

export default App;

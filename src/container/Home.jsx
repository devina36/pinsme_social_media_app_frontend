import React, { useEffect, useRef, useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link, Route, Routes } from 'react-router-dom';

import { Sidebar, UserProfile } from '../components';
import Pins from './Pins';
import { userQuery } from '../utils/data';
import { client } from '../client';
import logo from '../assets/favicon.png';
import { fetchUser } from '../utils/fetchUser';

const Home = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [user, setUser] = useState(null);

  const scrollRef = useRef(null);

  const dataUser = fetchUser();

  const datas = dataUser?.googleId;

  useEffect(() => {
    const query = userQuery(datas);

    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, [datas]);

  useEffect(() => {
    scrollRef.current.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out">
      <div className=" hidden md:flex h-screen flex-initial">
        <Sidebar user={user && user} />
      </div>
      <div className=" flex md:hidden flex-row">
        <div className=" p-2 w-full flex flex-row justify-between items-center shadow-md">
          <HiMenu size={40} className="cursor-pointer" onClick={() => setToggleSidebar(true)} />
          <Link to="/">
            <img src={logo} alt="logo" className="w-12" />
          </Link>
          <Link to={`user-profile/${user?._id}`}>
            <img src={user?.image} alt="profile" className="w-12 rounded-full" />
          </Link>
        </div>
        {toggleSidebar && (
          <div className="fixed w-4/6 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
            <div className=" absolute w-full flex justify-end items-center p-2">
              <AiFillCloseCircle size={30} className="cursor-pointer" onClick={() => setToggleSidebar(false)} />
            </div>
            <Sidebar user={user && user} closeToggle={setToggleSidebar} />
          </div>
        )}
      </div>
      <div className=" pb-2 flex-1 h-screen overflow-scroll" ref={scrollRef}>
        <Routes>
          <Route path="/user-profile/:userId" element={<UserProfile />} />
          <Route path="/*" element={<Pins user={user && user} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;

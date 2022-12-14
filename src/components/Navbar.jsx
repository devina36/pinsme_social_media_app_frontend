import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdAdd, IoMdSearch } from 'react-icons/io';

const Navbar = ({ searchTerm, setSearchTerm, user }) => {
  const navigate = useNavigate();

  if (!user) return null;

  return (
    <div className=" flex gap-2 md:gap-5 w-full mt-5 pb-7">
      <div className=" flex justify-start items-center w-full px-2 bg-white rounded-md border-none outline-none focus-within:shadow-sm">
        <IoMdSearch size={21} className="ml-1" />
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          value={searchTerm}
          onFocus={() => navigate('/search')}
          className="p-2 w-full bg-white outline-none"
        />
      </div>
      <div className=" flex gap-3 items-center">
        <Link
          to={`/user-profile/${user?._id}`}
          className=" hidden md:inline-block w-14 h-14 rounded-full border-8 border-transparent hover:border-gray-200"
        >
          <img src={user?.image} alt="user" className=" object-cover rounded-full" />
        </Link>
        <Link
          to={`/create-pin`}
          className=" bg-gradient-to-tr to-[#d080f7] from-[#9dd6fc] text-white w-12 h-12 rounded-lg flex justify-center items-center hover:opacity-75"
        >
          <IoMdAdd size={25} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

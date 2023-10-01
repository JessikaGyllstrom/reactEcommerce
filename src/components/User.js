import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
// import { FaUser } from "react-icons/fa";
// import { Link } from 'react-router-dom';
import DropDown from './DropDown';

const User = () => {
  const { auth } = useContext(AuthContext);

  return (
    <div>
      <div className="flex items-center text-slate-50">
        <div className="flex flex-col">
          <DropDown props={auth} />
        </div>
      </div>
    </div>
  );
};

export default User;

import { Link } from 'react-router-dom';

import { MdExitToApp } from 'react-icons/md';

import { useAuthStore } from '../../hooks';

export const AdminNavbar = ({ module = '' }) => {
   const { user, startLogout } = useAuthStore();

   return (
      <div className="bg-white min-w-full flex items-center justify-between px-6 py-1">
         <div className="flex flex-col justify-between px-6 py-1">
            <span className="text-2xl text-purplePz font-bold">{ module }</span>

            <span className="text-xs font-bold">{`Admin > ${module}`}</span>
         </div>

         <div className="flex items-center justify-center">
            <span className="font-bold cursor-pointer">{ user.name }</span>

            <div className="bg-purplePz w-12 h-12 flex items-center justify-center rounded-full cursor-pointer ml-3">
               <img
                  className="object-cover w-[95%] h-[95%] rounded-full"
                  src="https://i1.sndcdn.com/artworks-pfkZ3eJZ5aIGjxDP-lvIbog-t500x500.jpg"
               />
            </div>

            <span className="ml-3 text-2xl text-red-600 font-bold cursor-pointer">
               <MdExitToApp onClick={startLogout} />
            </span>
         </div>
      </div>
   );
}
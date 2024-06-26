import { useDispatch } from 'react-redux';
import { toggleMenu } from '../../../store';

import { Link } from 'react-router-dom';

import { HiOutlineLogout } from 'react-icons/hi';
import { HiMenu } from 'react-icons/hi';

import { useAuthStore } from '../../../hooks';

export const AdminNavbar = ({ module = '' }) => {
   const dispatch = useDispatch();
   const { user, startLogout } = useAuthStore();

   const handleToggleMenu = () => {
      dispatch(toggleMenu());
   }

   return (
      <div className="bg-white min-w-full flex items-center justify-between px-6 py-1">
         <span className="block lg:hidden cursor-pointer">
            <HiMenu onClick={handleToggleMenu} />
         </span>

         <div className="flex flex-col justify-between px-6 py-1">
            <span className="text-2xl text-primary font-bold">{module}</span>

            <span className="text-xs font-bold">{`Admin > ${module}`}</span>
         </div>

         <div className="flex items-center justify-center">
            <span className="font-bold text-gray-600 text-[15px] cursor-pointer">{user.name}</span>

            <span className="ml-3 text-2xl text-red-600 hover:text-red-800 font-bold cursor-pointer">
               <HiOutlineLogout onClick={startLogout} />
            </span>
         </div>
      </div>
   );
}
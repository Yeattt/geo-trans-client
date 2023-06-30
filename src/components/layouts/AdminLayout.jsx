import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../../store';

import { AdminSideMenu } from '../admin/';

export const AdminLayout = ({ children }) => {
   const dispatch = useDispatch();
   const isMenuOpen = useSelector((state) => state.sideMenu);

   const handleToggleMenu = () => {
      dispatch(toggleMenu());
   }

   return (
      <div className="flex flex-col h-screen">
         <div className="flex flex-1">
            <AdminSideMenu isOpen={isMenuOpen} toggleMenu={handleToggleMenu} />

            <main className="max-h-screen w-[calc(100vw - 10px)] flex flex-1 bg-gray-200 overflow-hidden">
               <div className="min-w-full max-w-full">
                  {children}
               </div>
            </main>
         </div>
      </div>
   );
}
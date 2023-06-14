import { AdimnNavbar, AdminSideMenu } from '../admin/';

export const AdminLayout = ({ children }) => {
   return (
      <div className="flex flex-col h-screen">
         {/* <AdimnNavbar /> */}

         <div className="flex flex-1">
            <AdminSideMenu />

            <main className="h-[calc(100vh - 16px)] w-[calc(100vw - 10px)] flex flex-1 bg-gray-800">
               {children}
            </main>
         </div>
      </div>
   );
}
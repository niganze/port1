import React from 'react';
    
import { Outlet } from 'react-router-dom';  
import Sidebar from './Siderbar';
import Header from './Header';

function LayoutDashboard() {
  return (
    <div className="flex h-screen">
      {/* Sidebar Section */}
      <Sidebar />

      {/* Main Content Section */}
      <div className="flex-1 flex flex-col">
        {/* Header Section */}
        <Header />

        {/* Content Section (Using Outlet for different pages) */}
        <main className="flex-1 bg-[#f7f7f7] p-6 overflow-y-auto">
          <Outlet /> {/* Renders the matched child routes */}
        </main>
      </div>
    </div>
  );
}

export default LayoutDashboard;

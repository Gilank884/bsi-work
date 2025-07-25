'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState<'transactions' | 'inventory' | null>(null);

  const toggleMenu = (menu: 'transactions' | 'inventory') => {
    setActiveMenu(prev => (prev === menu ? null : menu));
  };

  return (
    <div className="w-64 bg-gradient-to-b from-indigo-700 to-indigo-400 text-white h-screen p-4">
      {/* Dashboard */}
      <Link href="/" className="flex items-center justify-between cursor-pointer p-2 hover:bg-indigo-600 rounded">
        DashBoard
      </Link>

      {/* Transactions */}
      <div>
        <div
          className="flex items-center justify-between cursor-pointer p-2 hover:bg-indigo-600 rounded"
          onClick={() => toggleMenu('transactions')}
        >
          <span>Transactions</span>
          {activeMenu === 'transactions' ? <FaChevronDown /> : <FaChevronRight />}
        </div>
        {activeMenu === 'transactions' && (
          <div className="ml-4 mt-2 space-y-2">
            <Link href="/transaction/install-device" className="bg-indigo-600 p-2 rounded block hover:bg-indigo-500">Install Devices</Link>
            <Link href="/preventive" className="bg-indigo-600 p-2 rounded block hover:bg-indigo-500">Preventive Maintenance</Link>
            <Link href="/corrective" className="bg-indigo-600 p-2 rounded block hover:bg-indigo-500">Corrective Maintenance</Link>
            <Link href="/pullout" className="bg-indigo-600 p-2 rounded block hover:bg-indigo-500">Pullout Devices</Link>
            <Link href="/change-serial" className="bg-indigo-600 p-2 rounded block hover:bg-indigo-500">Change Serial EDC</Link>
            <Link href="/close-activity" className="bg-indigo-600 p-2 rounded block hover:bg-indigo-500">Daily Close Activity by Technician</Link>
            <Link href="/batch-report" className="bg-indigo-600 p-2 rounded block hover:bg-indigo-500">Batch Report</Link>
          </div>
        )}
      </div>

      {/* Inventory (contoh hanya link dummy) */}
      <div className="mt-4">
        <div
          className="flex items-center justify-between cursor-pointer p-2 hover:bg-indigo-600 rounded"
          onClick={() => toggleMenu('inventory')}
        >
          <span>Inventory</span>
          {activeMenu === 'inventory' ? <FaChevronDown /> : <FaChevronRight />}
        </div>
        {activeMenu === 'inventory' && (
          <div className="ml-4 mt-2 space-y-2">
            <Link href="/receipts" className="p-2 block hover:bg-indigo-500">Receipts</Link>
            <Link href="/inventory-transfer" className="p-2 block hover:bg-indigo-500">Inventory Transfer</Link>
            {/* Tambahkan yang lain sesuai halaman kamu */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;

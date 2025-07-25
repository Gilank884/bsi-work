'use client';

const Header = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white shadow rounded mb-6">
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <div className="flex gap-2">
        <button
          onClick={() => location.reload()}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow"
        >
          Refresh
        </button>
        <button
          onClick={() => alert('Export belum diimplementasi')}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow"
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default Header;

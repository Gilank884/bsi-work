// pages/install-device.tsx
import { useState } from "react";

export default function InstallDevice() {
  const [form, setForm] = useState({
    merchant: "",
    servicePoint: "",
    merchantType: "",
    merchantSegment: "",
    technician: "",
    status: "",
    jobType: "",
    rootCause: "",
    visitDate: "",
    tid: "",
    dateFrom: "",
    dateTo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#F3F2FC] p-6">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button className="mr-2 text-lg">🔙</button>
        <h1 className="text-xl font-semibold text-gray-800">Install Devices</h1>
      </div>

      {/* Filter Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 bg-white p-4 rounded-md shadow mb-4">
        <input name="merchant" onChange={handleChange} value={form.merchant} placeholder="Merchant" className="input input-bordered" />
        <input name="servicePoint" onChange={handleChange} value={form.servicePoint} placeholder="Service Point" className="input input-bordered" />
        <select name="merchantType" onChange={handleChange} value={form.merchantType} className="select select-bordered">
          <option>Merchant Type</option>
        </select>
        <select name="merchantSegment" onChange={handleChange} value={form.merchantSegment} className="select select-bordered">
          <option>Merchant Segment</option>
        </select>
        <select name="technician" onChange={handleChange} value={form.technician} className="select select-bordered">
          <option>Technician</option>
        </select>
        <select name="status" onChange={handleChange} value={form.status} className="select select-bordered">
          <option>Status</option>
        </select>
        <select name="jobType" onChange={handleChange} value={form.jobType} className="select select-bordered">
          <option>Tipe Kerja</option>
        </select>
        <select name="rootCause" onChange={handleChange} value={form.rootCause} className="select select-bordered">
          <option>Root Cause</option>
        </select>
        <input type="date" name="dateFrom" onChange={handleChange} value={form.dateFrom} className="input input-bordered" />
        <input type="date" name="dateTo" onChange={handleChange} value={form.dateTo} className="input input-bordered" />
        <input name="visitDate" onChange={handleChange} value={form.visitDate} type="date" placeholder="Visit Date" className="input input-bordered" />
        <div className="flex items-center">
          <input name="tid" onChange={handleChange} value={form.tid} placeholder="TID/No. SPK" className="input input-bordered flex-1" />
          <button className="btn btn-primary ml-2">🔍</button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-md shadow">
        <table className="table w-full table-zebra">
          <thead className="bg-[#23049D] text-white">
            <tr>
              <th>#</th>
              <th>No. SPK</th>
              <th>Status</th>
              <th>Tipe Kerja</th>
              <th>SPK Date ⬍</th>
              <th>Deadline Date</th>
              <th>Visit Date ⬍</th>
            </tr>
          </thead>
          <tbody>
            {/* Data kosong */}
            <tr>
              <td colSpan={7} className="text-center py-8">
                Tidak ada data ditampilkan.
              </td>
            </tr>
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <button className="btn btn-sm btn-outline" disabled>{"<"}</button>
            <button className="btn btn-sm btn-active">1</button>
            <button className="btn btn-sm btn-outline" disabled>{">"}</button>
          </div>
          <div className="flex items-center gap-2">
            <select className="select select-sm select-bordered">
              <option>10 /page</option>
              <option>25 /page</option>
              <option>50 /page</option>
            </select>
            <div className="text-sm">TOTAL <span className="ml-2 text-blue-600 font-bold">0</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
        
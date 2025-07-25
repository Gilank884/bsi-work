// src/app/login/page.tsx

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 p-10 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Login</h2>
        <form className="space-y-6">
          <div>
            <label className="text-white block mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="text-white block mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="********"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 transition text-white py-2 rounded-lg font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

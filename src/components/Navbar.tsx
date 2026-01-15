import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav className="bg-white text-gray-800 border-b-2 border-gray-300 px-1 py-3 flex items-center">
        <div className="max-w-6xl mx-auto px-6 flex items-center w-full">
          <NavLink to="/" aria-label="Hackhubb home" className="flex items-center">
            <img src="/logo.png" alt="Hackhubb" className="h-22 w-auto mr-6" />
          </NavLink>

          <div className="ml-auto flex items-center space-x-6">
            <NavLink to="/feed" className="hover:text-indigo-900">Feed</NavLink>
            <NavLink to="/profile" className="hover:text-indigo-900">Profile</NavLink>
            <NavLink to="/upload" className="hover:text-indigo-900">Upload</NavLink>
            <NavLink to="/login" className="bg-indigo-900 text-white rounded-xl px-3">Login</NavLink>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

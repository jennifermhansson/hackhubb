import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import FeedPage from "./pages/FeedPage"
import ProfilePage from "./pages/ProfilePage"
import UploadPage from "./pages/UploadPage"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import LoginPage from "./pages/LoginPage"
import ProjectPage from "./pages/ProjectPage"

function App() {
 
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App

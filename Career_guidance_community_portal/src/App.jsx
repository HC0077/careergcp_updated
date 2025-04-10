import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Mentors from "./components/Mentors";
import MentorDetail from "./components/MentorDetail";
import Library from "./components/Library";
import Quiz from "./components/Quiz";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import ForgotPassword from "./components/ForgotPassword";
import Engineering from "./components/Engineering";
import Medical from "./components/Medical";
import Science from "./components/Science";
import Mathematics from "./components/Mathematics";
import Economics from "./components/Economics";
import Sports from "./components/Sports";
import Food from "./components/Food";
import Government from "./components/Government";
import CareerCounseling from "./components/CareerCounseling";
import JobListings from "./components/JobListings";
import ExplorePrograms from "./components/ExplorePrograms";
import ResumeBuilder from "./components/ResumeBuilder";
import DiscussionForum from "./components/DiscussionForum";
import CareerSchool from "./components/CareerSchool";
import CareerIntermediate from "./components/CareerIntermediate";
import CareerHigher from "./components/CareerHigher";
import Certifications from "./components/Certifications";
import DiscoverMore from "./components/DiscoverMore";
import JoinForum from "./components/JoinForum";

// Import CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/mentor/:id" element={<MentorDetail />} />
          <Route path="/request-mentorship/:id" element={<MentorDetail />} />
          <Route path="/library" element={<Library />} />
          <Route path="/resources/:id" element={<DiscoverMore />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/medical" element={<Medical />} />
          <Route path="/science" element={<Science />} />
          <Route path="/mathematics" element={<Mathematics />} />
          <Route path="/economics" element={<Economics />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/food" element={<Food />} />
          <Route path="/government" element={<Government />} />
          <Route path="/counseling" element={<CareerCounseling />} />
          <Route path="/jobs" element={<JobListings />} />
          <Route path="/skills" element={<ExplorePrograms />} />
          <Route path="/resume" element={<ResumeBuilder />} />
          <Route path="/forum" element={<DiscussionForum />} />
          <Route path="/career-school" element={<CareerSchool />} />
          <Route path="/career-intermediate" element={<CareerIntermediate />} />
          <Route path="/career-higher" element={<CareerHigher />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/discover-more" element={<DiscoverMore />} />
          <Route path="/join-forum" element={<JoinForum />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

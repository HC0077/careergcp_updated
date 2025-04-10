import React, { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import axios from "axios";
import mentorsData from "./mentorsData.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCalendarAlt, FaStar, FaStarHalf, FaRegStar, FaCheck, FaClock, FaDollarSign, FaGlobe, FaBook, FaUserTie } from 'react-icons/fa';

console.log("Loaded API Key:", import.meta.env.VITE_GEMINI_API_KEY);

const MentorDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const [mentor, setMentor] = useState(null);
  
  useEffect(() => {
    console.log("MentorDetail: ID parameter =", id);
    console.log("Current path:", location.pathname);
    
    // Try to find the mentor by ID
    const foundMentor = mentorsData.find((m) => m.id.toString() === id.toString());
    
    if (foundMentor) {
      console.log("Found mentor:", foundMentor.name);
      setMentor(foundMentor);
    } else {
      console.log("Mentor not found, using default");
      setMentor(mentorsData[0]); // Fallback to first mentor
    }
  }, [id, location]);
  
  const [activeTab, setActiveTab] = useState("about");
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [bookingTopic, setBookingTopic] = useState("");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const handleAskQuestion = async () => {
    if (!question.trim()) return;

    setLoading(true);

    try {
      // Simulate AI response without actual API call for demo purposes
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const simulatedResponses = {
        "career": "Based on your background and interests, I would recommend exploring roles in product management or UX design, which combine technical knowledge with creativity.",
        "skills": "To enhance your career prospects, focus on developing both technical skills like data analysis and soft skills like communication and leadership.",
        "education": "For your field, a combination of formal education and practical certifications would be ideal. Consider courses in project management or digital marketing.",
        "interview": "When preparing for interviews, research the company thoroughly, practice common questions, and prepare stories that demonstrate your problem-solving abilities.",
        "resume": "Make your resume stand out by quantifying your achievements, tailoring it to each job, and including a strong summary statement that highlights your unique value."
      };
      
      // Generate a relevant response based on keywords in the question
      let answer = "I'd be happy to help with your question. Could you provide more specific details about your career goals?";
      
      const lowerQuestion = question.toLowerCase();
      for (const [keyword, response] of Object.entries(simulatedResponses)) {
        if (lowerQuestion.includes(keyword)) {
          answer = response;
          break;
        }
      }

      setAnswers((prevAnswers) => [...prevAnswers, { question, answer }]);
      setQuestion("");
    } catch (error) {
      console.error("Error generating response:", error);
      setAnswers((prevAnswers) => [
        ...prevAnswers,
        { question, answer: "Sorry, I couldn't provide an answer at the moment. Please try again later." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Time slots for booking
  const timeSlots = [
    "9:00 AM", 
    "10:00 AM", 
    "11:00 AM", 
    "1:00 PM", 
    "2:00 PM", 
    "3:00 PM",
    "4:00 PM"
  ];

  // Handle booking confirmation
  const handleBookSession = (e) => {
    e?.preventDefault();
    // In a real app, you would submit booking details to an API
    console.log({
      mentorId: mentor?.id,
      date: selectedDay,
      time: selectedTimeSlot,
      topic: bookingTopic
    });
    
    setBookingConfirmed(true);
    
    // Reset form after successful booking
    if (selectedDay && selectedTimeSlot) {
      setBookingTopic("");
      setSelectedDay(null);
      setSelectedTimeSlot(null);
      
      // Reset confirmation message after 3 seconds
      setTimeout(() => {
        setBookingConfirmed(false);
      }, 3000);
    }
  };

  // If mentor data is not yet loaded, show loading state
  if (!mentor) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Loading mentor details...</p>
      </div>
    );
  }

  return (
    <div className="container py-5 fade-in">
      {/* Profile Header */}
      <div className="profile-header rounded-3 mb-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-4 text-center text-md-start">
              <img
                src={mentor?.image}
                alt={mentor?.name}
                className="profile-avatar"
                onError={(e) => {e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(mentor?.name)}&background=random&size=256`}}
              />
            </div>
            <div className="col-md-8 text-center text-md-start mt-4 mt-md-0">
              <h1 className="mb-2">{mentor?.name}</h1>
              <h4 className="text-white-50 mb-3">{mentor?.title}</h4>
              
              <div className="d-flex flex-wrap gap-2 mb-4">
                {mentor?.categories && mentor.categories.map((category, index) => (
                  <span key={index} className="badge bg-light text-primary">
                    {category}
                  </span>
                ))}
              </div>
              
              <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-3">
                <div className="text-warning me-2">
                  {Array(5).fill(0).map((_, i) => (
                    <i key={i} className={`bi ${i < Math.floor(mentor?.ratings || 4.5) ? 'bi-star-fill' : i < (mentor?.ratings || 4.5) ? 'bi-star-half' : 'bi-star'}`}></i>
                  ))}
                </div>
                <span className="text-white-50">({mentor?.reviewCount || 30}+ reviews)</span>
              </div>
              
              <div className="d-flex flex-wrap gap-3 mt-4">
                <button className="btn btn-light px-4">
                  <i className="bi bi-calendar-check me-2"></i> Book Session
                </button>
                <button className="btn btn-outline-light px-4">
                  <i className="bi bi-chat-dots me-2"></i> Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="row">
        <div className="col-lg-8">
          {/* Tabs */}
          <ul className="nav nav-tabs mb-4">
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'about' ? 'active' : ''}`}
                onClick={() => setActiveTab('about')}
              >
                About
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'experience' ? 'active' : ''}`}
                onClick={() => setActiveTab('experience')}
              >
                Experience
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'qa' ? 'active' : ''}`}
                onClick={() => setActiveTab('qa')}
              >
                Q&A
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'reviews' ? 'active' : ''}`}
                onClick={() => setActiveTab('reviews')}
              >
                Reviews
              </button>
            </li>
          </ul>
          
          {/* Tab Content */}
          <div className="tab-content p-4 bg-white rounded shadow-sm mb-4">
            {/* About Tab */}
            {activeTab === 'about' && (
              <div>
                <h4 className="mb-4">About {mentor?.name}</h4>
                <p className="lead">{mentor?.bio || `${mentor?.name} is an experienced professional with extensive knowledge in their field. They are passionate about mentoring and helping others achieve their career goals.`}</p>
                
                <div className="row mt-4">
                  <div className="col-md-6 mb-3">
                    <h5 className="mb-3">Education</h5>
                    <div className="d-flex mb-3">
                      <div className="bg-light p-2 rounded me-3">
                        <i className="bi bi-mortarboard text-primary"></i>
                      </div>
                      <div>
                        <div className="fw-medium">{mentor?.education || "Master's Degree"}</div>
                        <div className="text-muted small">{mentor?.educationYear || "2010 - 2012"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <h5 className="mb-3">Expertise</h5>
                    <div className="d-flex flex-wrap gap-2">
                      {(mentor?.categories || ["Career Guidance", "Professional Development"]).map((skill, index) => (
                        <span key={index} className="badge bg-light text-primary p-2">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Experience Tab */}
            {activeTab === 'experience' && (
              <div>
                <h4 className="mb-4">Professional Experience</h4>
                <div className="timeline-item mb-4 position-relative ps-4">
                  <div className="timeline-marker"></div>
                  <h5>{mentor?.title || "Senior Professional"}</h5>
                  <p className="text-muted mb-2">2018 - Present</p>
                  <p>{mentor?.experience}</p>
                </div>
                <div className="timeline-item mb-4 position-relative ps-4">
                  <div className="timeline-marker"></div>
                  <h5>Previous Position</h5>
                  <p className="text-muted mb-2">2015 - 2018</p>
                  <p>Worked on various projects and developed expertise in the field.</p>
                </div>
                <div className="timeline-item position-relative ps-4">
                  <div className="timeline-marker"></div>
                  <h5>Starting Position</h5>
                  <p className="text-muted mb-2">2012 - 2015</p>
                  <p>Began career journey and built foundational skills.</p>
                </div>
              </div>
            )}
            
            {/* Q&A Tab */}
            {activeTab === 'qa' && (
              <div>
                <h4 className="mb-4">Ask {mentor?.name} a Question</h4>
                <div className="card mb-4">
                  <div className="card-body">
                    <textarea
                      className="form-control mb-3"
                      rows="3"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
                      placeholder={`What would you like to ask ${mentor?.name}?`}
                    ></textarea>
        <button
                      className="btn btn-primary px-4"
          onClick={handleAskQuestion}
                      disabled={loading || !question.trim()}
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Processing...
                        </>
                      ) : "Ask Question"}
        </button>
                  </div>
      </div>

                {answers.length > 0 ? (
                  <div>
                    <h5 className="mb-3">Conversation</h5>
          {answers.map((qa, index) => (
                      <div key={index} className="card mb-3">
                        <div className="card-body">
                          <div className="d-flex mb-3">
                            <div className="rounded-circle bg-light p-2 me-2">
                              <i className="bi bi-person"></i>
                            </div>
                            <div>
                              <div className="fw-medium">You</div>
                              <p>{qa.question}</p>
                            </div>
                          </div>
                          <div className="d-flex">
                            <img 
                              src={mentor?.image} 
                              alt={mentor?.name} 
                              className="rounded-circle me-2"
                              style={{width: "40px", height: "40px", objectFit: "cover"}}
                              onError={(e) => {e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(mentor?.name)}&size=40`}}
                            />
                            <div>
                              <div className="fw-medium">{mentor?.name}</div>
                              <p>{qa.answer}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-4">
                    <i className="bi bi-chat-dots fs-1 text-muted"></i>
                    <p className="mt-3">No questions asked yet. Start a conversation with {mentor?.name}!</p>
                  </div>
                )}
              </div>
            )}
            
            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h4 className="mb-0">Reviews ({mentor?.reviewCount || 30})</h4>
                  <div className="d-flex align-items-center">
                    <div className="text-warning me-2">
                      {Array(5).fill(0).map((_, i) => (
                        <i key={i} className={`bi ${i < Math.floor(mentor?.ratings || 4.5) ? 'bi-star-fill' : i < (mentor?.ratings || 4.5) ? 'bi-star-half' : 'bi-star'}`}></i>
                      ))}
                    </div>
                    <span className="fw-medium">{mentor?.ratings || 4.5}</span>
                  </div>
                </div>
                
                {/* Sample Reviews */}
                <div className="review-item mb-4 pb-4 border-bottom">
                  <div className="d-flex justify-content-between mb-2">
                    <div className="d-flex align-items-center">
                      <div className="avatar me-3 bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: "40px", height: "40px"}}>
                        <span>MJ</span>
                      </div>
                      <div>
                        <h6 className="mb-0">Michael Johnson</h6>
                        <div className="text-warning small">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </div>
                      </div>
                    </div>
                    <div className="text-muted small">2 weeks ago</div>
                  </div>
                  <p className="mb-0">I had an excellent mentoring session. The advice was practical and immediately applicable to my career challenges.</p>
                </div>
                
                <div className="review-item mb-4 pb-4 border-bottom">
                  <div className="d-flex justify-content-between mb-2">
                    <div className="d-flex align-items-center">
                      <div className="avatar me-3 bg-success text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: "40px", height: "40px"}}>
                        <span>SL</span>
                      </div>
                      <div>
                        <h6 className="mb-0">Sarah Lee</h6>
                        <div className="text-warning small">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star"></i>
                        </div>
                      </div>
                    </div>
                    <div className="text-muted small">1 month ago</div>
                  </div>
                  <p className="mb-0">The mentor provided great insights into the industry and helped me prepare for my interviews effectively.</p>
                </div>
                
                <div className="review-item">
                  <div className="d-flex justify-content-between mb-2">
                    <div className="d-flex align-items-center">
                      <div className="avatar me-3 bg-warning text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: "40px", height: "40px"}}>
                        <span>DT</span>
                      </div>
                      <div>
                        <h6 className="mb-0">David Thompson</h6>
                        <div className="text-warning small">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-half"></i>
                        </div>
                      </div>
                    </div>
                    <div className="text-muted small">2 months ago</div>
                  </div>
                  <p className="mb-0">Knowledgeable and professional. The mentor helped me navigate a difficult career transition with confidence.</p>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="col-lg-4">
          {/* Booking Widget */}
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-primary text-white py-3">
              <h5 className="mb-0">Book a Session</h5>
            </div>
            <div className="card-body p-4">
              {bookingConfirmed ? (
                <div className="text-center py-3">
                  <div className="mb-3">
                    <span className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: "60px", height: "60px"}}>
                      <i className="bi bi-check-lg fs-1"></i>
                    </span>
                  </div>
                  <h5>Session Booked Successfully!</h5>
                  <p className="mb-3">Your session with {mentor?.name} has been confirmed for:</p>
                  <div className="bg-light p-3 rounded mb-3">
                    <div className="d-flex justify-content-between mb-2">
                      <span className="text-muted">Date:</span>
                      <span className="fw-medium">{selectedDay}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span className="text-muted">Time:</span>
                      <span className="fw-medium">{selectedTimeSlot}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span className="text-muted">Topic:</span>
                      <span className="fw-medium">{bookingTopic}</span>
                    </div>
                  </div>
                  <button className="btn btn-outline-primary w-100" onClick={() => setBookingConfirmed(false)}>
                    Book Another Session
                  </button>
                </div>
              ) : (
                <div>
                  <div className="mb-3">
                    <label className="form-label">Select Day</label>
                    <div className="d-flex flex-wrap gap-2">
                      {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => (
                        <button
                          key={day}
                          type="button"
                          className={`btn ${selectedDay === day ? 'btn-primary' : 'btn-outline-primary'}`}
                          onClick={() => setSelectedDay(day)}
                          disabled={day === "Friday" || day === "Weekend"}
                        >
                          {day.substring(0, 3)}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label className="form-label">Select Time Slot</label>
                    <div className="d-flex flex-wrap gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          className={`btn ${selectedTimeSlot === slot ? 'btn-primary' : 'btn-outline-primary'}`}
                          onClick={() => setSelectedTimeSlot(slot)}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label className="form-label">Discussion Topic</label>
                    <select 
                      className="form-select" 
                      required
                      value={bookingTopic}
                      onChange={(e) => setBookingTopic(e.target.value)}
                    >
                      <option value="">Select a topic</option>
                      <option value="Career Advice">Career Advice</option>
                      <option value="Resume Review">Resume Review</option>
                      <option value="Interview Preparation">Interview Preparation</option>
                      <option value="Skill Development">Skill Development</option>
                      <option value="Industry Insights">Industry Insights</option>
                    </select>
                  </div>
                  
                  <div className="d-grid">
                    <button 
                      type="button" 
                      className="btn btn-primary"
                      onClick={handleBookSession}
                      disabled={!selectedDay || !selectedTimeSlot || !bookingTopic}
                    >
                      Book Now
                    </button>
                  </div>
                  <div className="text-center mt-3">
                    <p className="text-muted small mb-0">
                      Sessions are 45 minutes via video call
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Availability Widget */}
          <div className="card shadow-sm mb-4">
            <div className="card-header py-3">
              <h5 className="mb-0">Availability</h5>
            </div>
            <div className="card-body p-3">
              <div className="d-flex justify-content-between mb-2">
                <span>Monday</span>
                <span className="badge bg-success">Available</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Tuesday</span>
                <span className="badge bg-success">Available</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Wednesday</span>
                <span className="badge bg-warning">Limited</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Thursday</span>
                <span className="badge bg-success">Available</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Friday</span>
                <span className="badge bg-danger">Unavailable</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Weekend</span>
                <span className="badge bg-danger">Unavailable</span>
              </div>
            </div>
          </div>
          
          {/* Similar Mentors */}
          <div className="card shadow-sm">
            <div className="card-header py-3">
              <h5 className="mb-0">Similar Mentors</h5>
            </div>
            <div className="card-body p-3">
              {mentorsData
                .filter(m => m.id !== parseInt(id))
                .slice(0, 2)
                .map(m => (
                  <div key={m.id} className="d-flex align-items-center mb-3">
                    <img 
                      src={m.image} 
                      alt={m.name} 
                      className="rounded-circle me-3"
                      style={{width: "50px", height: "50px", objectFit: "cover"}}
                      onError={(e) => {e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(m.name)}&size=50`}}
                    />
                    <div>
                      <h6 className="mb-0">{m.name}</h6>
                      <div className="text-muted small">{m.title}</div>
                    </div>
                  </div>
                ))
              }
              <Link to="/mentors" className="btn btn-outline-primary w-100 mt-2">
                View All Mentors
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorDetail;

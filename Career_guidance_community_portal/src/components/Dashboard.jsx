import React from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const Dashboard = () => {
  return (
    <div className="container py-5 fade-in">
      <div className="row mb-4">
        <div className="col-md-6">
          <h2 className="mb-0">Dashboard</h2>
          <p className="text-muted">Welcome back, Student!</p>
        </div>
        <div className="col-md-6 text-md-end">
          <Link to="/settings" className="btn btn-outline-primary">
            <i className="bi bi-gear me-2"></i>
            Settings
          </Link>
        </div>
      </div>
      
      {/* Stats Cards */}
      <div className="row mb-4 g-3">
        <div className="col-md-3 col-sm-6">
          <div className="dashboard-card card p-3">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="dashboard-title">Completed Tests</p>
                <h3 className="dashboard-stat">5</h3>
              </div>
              <div className="dashboard-icon bg-primary bg-opacity-10 text-primary">
                <i className="bi bi-clipboard-check"></i>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-3 col-sm-6">
          <div className="dashboard-card card p-3">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="dashboard-title">Mentor Sessions</p>
                <h3 className="dashboard-stat">3</h3>
              </div>
              <div className="dashboard-icon bg-success bg-opacity-10 text-success">
                <i className="bi bi-people"></i>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-3 col-sm-6">
          <div className="dashboard-card card p-3">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="dashboard-title">Resources</p>
                <h3 className="dashboard-stat">12</h3>
              </div>
              <div className="dashboard-icon bg-warning bg-opacity-10 text-warning">
                <i className="bi bi-journal-text"></i>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-3 col-sm-6">
          <div className="dashboard-card card p-3">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="dashboard-title">Upcoming Events</p>
                <h3 className="dashboard-stat">2</h3>
              </div>
              <div className="dashboard-icon bg-info bg-opacity-10 text-info">
                <i className="bi bi-calendar-event"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Career Path Progress */}
      <div className="row mb-4">
        <div className="col-md-8 mb-4 mb-md-0">
          <div className="card h-100">
            <div className="card-header d-flex justify-content-between align-items-center bg-white p-4">
              <h5 className="mb-0">Career Path Progress</h5>
              <div className="dropdown">
                <button className="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                  Last 30 Days
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><a className="dropdown-item" href="#">Last 7 Days</a></li>
                  <li><a className="dropdown-item" href="#">Last 30 Days</a></li>
                  <li><a className="dropdown-item" href="#">Last 90 Days</a></li>
        </ul>
              </div>
            </div>
            <div className="card-body p-4">
              <div className="mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <span>Career Exploration</span>
                  <span>80%</span>
                </div>
                <div className="progress" style={{height: "10px"}}>
                  <div className="progress-bar bg-success" style={{width: "80%"}} role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <span>Skill Development</span>
                  <span>65%</span>
                </div>
                <div className="progress" style={{height: "10px"}}>
                  <div className="progress-bar bg-primary" style={{width: "65%"}} role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <span>Resume Building</span>
                  <span>45%</span>
                </div>
                <div className="progress" style={{height: "10px"}}>
                  <div className="progress-bar bg-warning" style={{width: "45%"}} role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              
              <div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Interview Preparation</span>
                  <span>30%</span>
                </div>
                <div className="progress" style={{height: "10px"}}>
                  <div className="progress-bar" style={{width: "30%", backgroundColor: "#f72585"}} role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-header bg-white p-4">
              <h5 className="mb-0">Upcoming Sessions</h5>
            </div>
            <div className="card-body p-4">
              <div className="mb-3 pb-3 border-bottom">
                <div className="d-flex align-items-center mb-2">
                  <div className="bg-primary text-white rounded-circle p-2 me-3">
                    <i className="bi bi-calendar-check"></i>
                  </div>
                  <h6 className="mb-0">Resume Review</h6>
                </div>
                <div className="ps-5">
                  <p className="mb-1 text-muted small">With: Jane Smith</p>
                  <p className="mb-0 text-muted small">
                    <i className="bi bi-clock me-1"></i> Tomorrow, 10:00 AM
                  </p>
                </div>
              </div>
              
              <div>
                <div className="d-flex align-items-center mb-2">
                  <div className="bg-success text-white rounded-circle p-2 me-3">
                    <i className="bi bi-people"></i>
                  </div>
                  <h6 className="mb-0">Career Strategy</h6>
                </div>
                <div className="ps-5">
                  <p className="mb-1 text-muted small">With: Dr. Alex Brown</p>
                  <p className="mb-0 text-muted small">
                    <i className="bi bi-clock me-1"></i> Friday, 2:00 PM
                  </p>
                </div>
              </div>
            </div>
            <div className="card-footer bg-white border-top-0 text-center p-4">
              <Link to="/mentors" className="btn btn-outline-primary btn-sm">
                Book New Session
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recommended Resources */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card">
            <div className="card-header bg-white p-4 d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Recommended Resources</h5>
              <Link to="/library" className="btn btn-sm btn-link text-decoration-none">View All</Link>
            </div>
            <div className="card-body p-4">
              <div className="row g-3">
                <div className="col-md-4 slide-up">
                  <div className="card h-100 card-hover">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div className="me-3 bg-primary bg-opacity-10 text-primary p-2 rounded">
                          <i className="bi bi-file-earmark-text"></i>
                        </div>
                        <h6 className="mb-0">Resume Writing Guide</h6>
                      </div>
                      <p className="text-muted small mb-0">Learn how to create a standout resume that gets you noticed by recruiters.</p>
                    </div>
                    <div className="card-footer border-top-0 bg-white p-4 pt-0">
                      <Link to="/library" className="btn btn-sm btn-outline-primary">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-4 slide-up delay-1">
                  <div className="card h-100 card-hover">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div className="me-3 bg-warning bg-opacity-10 text-warning p-2 rounded">
                          <i className="bi bi-camera-video"></i>
                        </div>
                        <h6 className="mb-0">Interview Techniques</h6>
                      </div>
                      <p className="text-muted small mb-0">Video tutorials on answering tough interview questions with confidence.</p>
                    </div>
                    <div className="card-footer border-top-0 bg-white p-4 pt-0">
                      <Link to="/library" className="btn btn-sm btn-outline-primary">
                        Watch Now
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-4 slide-up delay-2">
                  <div className="card h-100 card-hover">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div className="me-3 bg-success bg-opacity-10 text-success p-2 rounded">
                          <i className="bi bi-journal-check"></i>
                        </div>
                        <h6 className="mb-0">Career Development Plan</h6>
                      </div>
                      <p className="text-muted small mb-0">Step-by-step guide to creating your personalized career development plan.</p>
                    </div>
                    <div className="card-footer border-top-0 bg-white p-4 pt-0">
                      <Link to="/library" className="btn btn-sm btn-outline-primary">
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quick Actions */}
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header bg-white p-4">
              <h5 className="mb-0">Quick Actions</h5>
            </div>
            <div className="card-body p-4">
              <div className="row g-3">
                <div className="col-md-3 col-sm-6 slide-up">
                  <Link to="/quiz" className="text-decoration-none">
                    <div className="card card-hover h-100 text-center p-4">
                      <div className="text-primary mb-3">
                        <i className="bi bi-clipboard-check fs-1"></i>
                      </div>
                      <h6>Take Assessment</h6>
                      <p className="text-muted small mb-0">Discover your strengths and ideal career paths</p>
                    </div>
                  </Link>
                </div>
                
                <div className="col-md-3 col-sm-6 slide-up delay-1">
                  <Link to="/mentors" className="text-decoration-none">
                    <div className="card card-hover h-100 text-center p-4">
                      <div className="text-success mb-3">
                        <i className="bi bi-people fs-1"></i>
                      </div>
                      <h6>Find a Mentor</h6>
                      <p className="text-muted small mb-0">Connect with professionals in your field of interest</p>
                    </div>
                  </Link>
                </div>
                
                <div className="col-md-3 col-sm-6 slide-up delay-2">
                  <Link to="/resume" className="text-decoration-none">
                    <div className="card card-hover h-100 text-center p-4">
                      <div className="text-warning mb-3">
                        <i className="bi bi-file-earmark-person fs-1"></i>
                      </div>
                      <h6>Update Resume</h6>
                      <p className="text-muted small mb-0">Enhance your resume with our professional tools</p>
                    </div>
                  </Link>
                </div>
                
                <div className="col-md-3 col-sm-6 slide-up delay-3">
                  <Link to="/jobs" className="text-decoration-none">
                    <div className="card card-hover h-100 text-center p-4">
                      <div className="text-info mb-3">
                        <i className="bi bi-briefcase fs-1"></i>
                      </div>
                      <h6>Explore Jobs</h6>
                      <p className="text-muted small mb-0">Browse job listings aligned with your career goals</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

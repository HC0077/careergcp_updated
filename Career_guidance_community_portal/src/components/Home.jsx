import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Home = () => {
  return (
    <div className="main-content">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-md-start text-center slide-up">
              <h1 className="hero-title">Career For Future</h1>
              <p className="hero-subtitle">Empower your career journey with expert guidance and community support</p>
              <div className="d-flex flex-wrap gap-2 justify-content-md-start justify-content-center">
                <Link to="/signup" className="btn btn-light btn-lg">
                  Get Started
                </Link>
                <Link to="/mentors" className="btn btn-outline-light btn-lg">
                  Browse Mentors
                </Link>
              </div>
            </div>
            <div className="col-md-6 mt-5 mt-md-0 text-center slide-up delay-2">
              <img 
                src="/images/career-hero.svg" 
                alt="Career" 
                className="img-fluid" 
                style={{maxHeight: "400px"}}
                onError={(e) => {e.target.src = "https://placehold.co/600x400?text=Career+Planning"}}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Why Choose Us</h2>
          </div>
          <div className="row g-4">
            <div className="col-md-4 fade-in">
              <div className="feature-box">
                <div className="feature-icon">
                  <i className="bi bi-compass"></i>
                </div>
                <h4>Career Guidance</h4>
                <p className="text-muted">
                  Get expert advice on career choices tailored to your skills, interests, and goals.
                </p>
              </div>
            </div>
            <div className="col-md-4 fade-in delay-1">
              <div className="feature-box">
                <div className="feature-icon">
                  <i className="bi bi-people"></i>
                </div>
                <h4>Mentorship</h4>
                <p className="text-muted">
                  Connect with industry professionals who can guide you through your career journey.
                </p>
              </div>
            </div>
            <div className="col-md-4 fade-in delay-2">
              <div className="feature-box">
                <div className="feature-icon">
                  <i className="bi bi-book"></i>
                </div>
                <h4>Resources</h4>
                <p className="text-muted">
                  Access a comprehensive library of career resources, guides, and educational content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Options Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Explore Career Options</h2>
            <p className="text-muted">Choose a career path that suits your education level and interests.</p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4 slide-up">
              <div className="custom-card card h-100">
                <div className="card-body text-center">
                  <div className="icon-box rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center"
                       style={{width: "80px", height: "80px", background: "rgba(67, 97, 238, 0.1)"}}>
                    <i className="bi bi-mortarboard fs-2 text-primary"></i>
                  </div>
                  <h4>For School Students</h4>
                  <p className="text-muted">Discover foundational career paths, skill-building opportunities, and future possibilities.</p>
                  <Link to="/career-school" className="btn btn-primary mt-3">Explore</Link>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 slide-up delay-1">
              <div className="custom-card card h-100">
                <div className="card-body text-center">
                  <div className="icon-box rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center"
                       style={{width: "80px", height: "80px", background: "rgba(67, 97, 238, 0.1)"}}>
                    <i className="bi bi-journal-text fs-2 text-primary"></i>
                  </div>
                  <h4>For Intermediate Students</h4>
                  <p className="text-muted">Find suitable higher education options and career guidance for stream selection.</p>
                  <Link to="/career-intermediate" className="btn btn-primary mt-3">Explore</Link>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 slide-up delay-2">
              <div className="custom-card card h-100">
                <div className="card-body text-center">
                  <div className="icon-box rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center"
                       style={{width: "80px", height: "80px", background: "rgba(67, 97, 238, 0.1)"}}>
                    <i className="bi bi-briefcase fs-2 text-primary"></i>
                  </div>
                  <h4>For Higher Career Options</h4>
                  <p className="text-muted">Learn about professional degrees, certifications, and current industry trends.</p>
                  <Link to="/career-higher" className="btn btn-primary mt-3">Explore</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Career Quiz CTA */}
      <section className="section bg-light text-center py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 fade-in">
              <h2 className="mb-4">Not Sure About Your Career Path?</h2>
              <p className="lead text-muted mb-4">
                Take our comprehensive career quiz to discover career options that match your interests, skills, and preferences.
              </p>
              <Link to="/quiz" className="btn btn-primary btn-lg">
                <i className="bi bi-check2-circle me-2"></i>
                Take Career Quiz
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 slide-up">
              <h2 className="mb-4">Ready to Start Your Career Journey?</h2>
              <p className="text-muted mb-4">
                Join our community today to access personalized career guidance, mentorship opportunities, and resources.
              </p>
              <div className="d-flex gap-3">
                <Link to="/signup" className="btn btn-primary">
                  Sign Up Now
                </Link>
                <Link to="/library" className="btn btn-outline-primary">
                  Explore Resources
                </Link>
              </div>
            </div>
            <div className="col-md-6 text-center slide-up delay-2">
              <img 
                src="/images/career-path.svg" 
                alt="Career Path" 
                className="img-fluid" 
                style={{maxHeight: "400px"}}
                onError={(e) => {e.target.src = "https://placehold.co/600x400?text=Career+Journey"}}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
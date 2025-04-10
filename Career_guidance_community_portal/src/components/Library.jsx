import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Form, Button, Badge } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaArrowRight } from "react-icons/fa";
import { FiFileText, FiMic, FiMap, FiBarChart, FiUsers, FiAward, FiBriefcase, FiHome, FiBook, FiSearch, FiRefreshCw, FiTrendingUp } from "react-icons/fi";
import categoriesData from "./categoriesData.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Library.css";

const Library = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [showResetButton, setShowResetButton] = useState(false);
  const [animatedCategories, setAnimatedCategories] = useState([]);
  
  // This array contains the old categories for backward compatibility
  const oldCategories = [
    { id: 101, name: "Engineering", img: "/engineer.jpg", path: "/engineering", description: "Explore various engineering disciplines and career paths" },
    { id: 102, name: "Medical", img: "/medical.jpg", path: "/medical", description: "Discover careers in healthcare and medical science" },
    { id: 103, name: "Science", img: "/science.jpg", path: "/science", description: "Learn about opportunities in scientific research and development" },
    { id: 104, name: "Mathematics", img: "/maths.jpg", path: "/mathematics", description: "Find careers that use mathematical skills and analysis" },
    { id: 105, name: "Economics", img: "/economic.jpg", path: "/economics", description: "Explore careers in finance, economics, and business" },
    { id: 106, name: "Food", img: "/food and agriculture.jpg", path: "/food", description: "Discover opportunities in food science and agriculture" },
    { id: 107, name: "Sports", img: "/sports.jpg", path: "/sports", description: "Learn about careers in sports management and athletics" },
    { id: 108, name: "Government", img: "/government.jpg", path: "/government", description: "Explore public service and government career paths" },
  ];

  // Get icon component by name
  const getIconComponent = (iconName) => {
    const icons = {
      "file-text": <FiFileText />,
      "mic": <FiMic />,
      "map": <FiMap />,
      "bar-chart": <FiBarChart />,
      "users": <FiUsers />,
      "award": <FiAward />,
      "briefcase": <FiBriefcase />,
      "home": <FiHome />,
      "book": <FiBook />,
      "search": <FiSearch />,
      "refresh-cw": <FiRefreshCw />,
      "trending-up": <FiTrendingUp />
    };
    
    return icons[iconName] || <FiBook />;
  };

  // Set filtered categories initially and animate entries
  useEffect(() => {
    // Combine new categories with old ones
    const combinedCategories = [...categoriesData, ...oldCategories];
    
    setFilteredCategories(combinedCategories);
    
    // Animate the categories appearance with a staggered effect
    const timer = setTimeout(() => {
      const animationInterval = setInterval(() => {
        setAnimatedCategories(prev => {
          if (prev.length >= combinedCategories.length) {
            clearInterval(animationInterval);
            return prev;
          }
          return [...prev, combinedCategories[prev.length].id];
        });
      }, 100);
      
      return () => clearInterval(animationInterval);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // Filter categories based on search term and selected category
  useEffect(() => {
    const shouldShowReset = searchTerm !== "" || selectedCategory !== "";
    setShowResetButton(shouldShowReset);
    
    // Start with combined categories
    let results = [...categoriesData, ...oldCategories];
    
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      results = results.filter(category => 
        category.name.toLowerCase().includes(searchLower) ||
        (category.description && category.description.toLowerCase().includes(searchLower))
      );
    }
    
    setFilteredCategories(results);
  }, [searchTerm, selectedCategory]);

  const handleReset = () => {
    setSearchTerm("");
    setSelectedCategory("");
  };

  const handleCategoryClick = (path) => {
    navigate(path);
  };

  return (
    <Container className="library-container py-5">
      <Row className="mb-5">
        <Col md={12} className="text-center">
          <h1 className="display-4 mb-3 section-title">Career Resource Library</h1>
          <p className="lead text-muted">
            Explore our collection of resources to help guide your career journey
          </p>
        </Col>
      </Row>

      <Row className="mb-4 search-filter-container">
        <Col md={10} className="mb-3 mb-md-0">
          <div className="search-container">
            <FaSearch className="search-icon" />
            <Form.Control
              type="text"
              placeholder="Search for resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </Col>
        <Col md={2}>
          {showResetButton && (
            <Button 
              variant="outline-primary" 
              onClick={handleReset}
              className="reset-button w-100"
            >
              Reset
            </Button>
          )}
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={12}>
          <p className="results-count">
            Showing {filteredCategories.length} {filteredCategories.length === 1 ? 'category' : 'categories'}
          </p>
        </Col>
      </Row>

      <Row className="categories-grid">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => {
            // Determine if it's an old category
            const isOldCategory = category.id >= 100; // Old categories have IDs 100+
            const path = isOldCategory ? category.path : `/resources/${category.id}`;
            const image = isOldCategory ? category.img : category.image;
            
            return (
              <Col 
                key={category.id} 
                lg={3} 
                md={4} 
                sm={6} 
                className={`mb-4 category-card-container ${animatedCategories.includes(category.id) ? 'animated' : ''}`}
              >
                <Card 
                  className="category-card h-100 shadow-sm"
                  onClick={() => handleCategoryClick(path)}
                >
                  <div className="category-image-container">
                    <Card.Img variant="top" src={image} alt={category.name} className="category-img" />
                    <div className="category-overlay">
                      {!isOldCategory && getIconComponent(category.icon || "book")}
                      {isOldCategory && <FiBook className="category-icon" />}
                    </div>
                  </div>
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <Card.Title className="category-name">{category.name}</Card.Title>
                      {!isOldCategory && category.resources && (
                        <Badge bg="info" pill className="resource-badge">
                          {category.resources} {category.resources === 1 ? 'resource' : 'resources'}
                        </Badge>
                      )}
                    </div>
                    <Card.Text className="category-description">
                      {category.description}
                    </Card.Text>
                  </Card.Body>
                  
                  <div 
                    className="hover-button btn btn-outline-light"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCategoryClick(path);
                    }}
                  >
                    <FaArrowRight className="me-1" /> Explore
                  </div>
                </Card>
              </Col>
            );
          })
        ) : (
          <Col md={12} className="text-center py-5">
            <div className="no-results">
              <h3>No categories found</h3>
              <p>Try adjusting your search criteria</p>
              <Button variant="primary" onClick={handleReset}>
                Reset Search
              </Button>
            </div>
          </Col>
        )}
      </Row>

      <Row className="mt-5 cta-section">
        <Col md={12} className="text-center py-4 bg-light rounded shadow-sm">
          <h2>Want to suggest a new resource?</h2>
          <p className="lead">
            Help our community grow by contributing valuable career resources
          </p>
          <Button variant="success" size="lg" className="mt-2">
            Suggest a Resource
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Library;

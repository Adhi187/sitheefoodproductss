import React, { useState, useRef, useEffect } from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import FoodItems from "./components/FoodItems";

function Navbar({ page, setPage, user, onLogout }) {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#2874f0",
    padding: "12px 50px",
    color: "#fff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  };
  
  const logoStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "24px",
    fontWeight: "bold",
  };
  
  const navLinksStyle = {
    display: "flex",
    gap: "30px",
    alignItems: "center",
  };
  
  const linkStyle = (active) => ({
    color: "#fff",
    textDecoration: "none",
    cursor: "pointer",
    padding: "8px 16px",
    borderRadius: "4px",
    fontWeight: "500",
    transition: "background 0.2s",
    background: active ? "rgba(255,255,255,0.2)" : "transparent",
  });

  const userMenuStyle = {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  };

  const userInfoStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "14px",
  };

  const logoutButtonStyle = {
    background: "rgba(255,255,255,0.2)",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "12px",
    fontWeight: "500",
    transition: "background 0.2s",
  };
  
  return (
    <nav style={navStyle}>
      <div style={logoStyle}>
        <span style={{fontSize: "28px"}}>🍲</span>
        <span>Sithee Food Products</span>
      </div>
      <div style={navLinksStyle}>
        <span style={linkStyle(page === "home")}
          onClick={() => setPage("home")}>Home</span>
        <span style={linkStyle(page === "products")}
            onClick={() => setPage("products")}>Products</span>
        <span style={linkStyle(page === "about")}
            onClick={() => setPage("about")}>About</span>
        <span style={linkStyle(page === "contact")}
            onClick={() => setPage("contact")}>Contact</span>
        
        {user && (
          <div style={userMenuStyle}>
            <div style={userInfoStyle}>
              <span>👤</span>
              <span>{user.firstName} {user.lastName}</span>
            </div>
            <button 
              onClick={onLogout}
              style={logoutButtonStyle}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

function Home({ setPage }) {
  // Featured products for home page - Only 4 products
  const featured = [
    {
      name: "Sithee Organic Jaggery Powder",
      img: "https://5.imimg.com/data5/SELLER/Default/2025/4/503334223/DJ/DC/XQ/122442363/appalam-papad-250x250.jpeg",
      price: "₹120/kg",
      rating: 4.5,
    },
    {
      name: "170gm Sithee Roasted Vermicelli",
      img: "https://5.imimg.com/data5/SELLER/Default/2025/4/503502380/UP/MP/QW/122442363/170gm-sithee-roasted-vermicelli-250x250.jpeg",
      price: "₹45/pack",
      rating: 4.3,
    },
    {
      name: "50Kg Tree Mixed Gram Flour",
      img: "https://5.imimg.com/data5/SELLER/Default/2025/4/503335067/VM/KQ/QT/122442363/ragi-floursefesfs-250x250.jpeg",
      price: "₹52/kg",
      rating: 4.6,
    },
    {
      name: "170gm Sithee Ragi Vermicelli",
      img: "https://5.imimg.com/data5/SELLER/Default/2025/4/503331334/MH/LP/FW/122442363/double-roasted-rava-250x250.jpeg",
      price: "₹55/pack",
      rating: 4.4,
    },
  ];

  // Create infinite scroll array by duplicating items
  const infiniteFeatured = [...featured, ...featured, ...featured];

  const carouselRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(featured.length); // Start from the middle set
  const visibleCount = 4; 
  const scrollToIndex = (idx) => {
    if (carouselRef.current) {
      const child = carouselRef.current.children[idx];
      if (child) {
        child.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
      }
    }
  };

  const handleLeft = () => {
      setScrollIndex((idx) => {
        const newIdx = idx - 1;
        scrollToIndex(newIdx);
        return newIdx;
      });
  };
  const handleRight = () => {
      setScrollIndex((idx) => {
        const newIdx = idx + 1;
        scrollToIndex(newIdx);
        return newIdx;
      });
  };

  // Handle infinite scroll reset
  useEffect(() => {
    const handleScrollReset = () => {
      if (scrollIndex >= featured.length * 2) {
        // Reset to middle set when reaching the end
        setScrollIndex(featured.length);
        setTimeout(() => {
          if (carouselRef.current) {
            const middleChild = carouselRef.current.children[featured.length];
            if (middleChild) {
              middleChild.scrollIntoView({ behavior: "auto", inline: "start", block: "nearest" });
            }
          }
        }, 300);
      } else if (scrollIndex < 0) {
        // Reset to middle set when reaching the beginning
        setScrollIndex(featured.length - 1);
        setTimeout(() => {
          if (carouselRef.current) {
            const middleChild = carouselRef.current.children[featured.length - 1];
            if (middleChild) {
              middleChild.scrollIntoView({ behavior: "auto", inline: "start", block: "nearest" });
            }
          }
        }, 300);
      }
    };

    handleScrollReset();
  }, [scrollIndex, featured.length]);

  return (
    <div style={{ background: "#f1f3f6", minHeight: "100vh" }}>
      {/* Hero Section */}
      <div style={{
        background: "linear-gradient(135deg, #2874f0 0%, #1a5bb8 100%)",
        color: "white",
        padding: "60px 20px",
        textAlign: "center",
        marginBottom: "40px",
      }}>
        <h1 style={{ fontSize: "48px", marginBottom: "20px", fontWeight: "bold" }}>
          Premium Food Products
        </h1>
        <p style={{ fontSize: "20px", marginBottom: "30px", opacity: 0.9 }}>
          Discover our organic range of jaggery, vermicelli, and gram flour
        </p>
        <button style={{
          background: "#fff",
          color: "#2874f0",
          border: "none",
          padding: "15px 30px",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}>
          Explore Products
        </button>
            </div>

      {/* Featured Products Section */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
          <h2 style={{ fontSize: "28px", color: "#333", fontWeight: "bold" }}>
            Featured Products
          </h2>
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={handleLeft}
              style={{
                padding: "10px 15px",
                background: "#2874f0",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "500",
                boxShadow: "0 2px 4px rgba(40,116,240,0.3)",
              }}
            >
              ←
            </button>
            <button
              onClick={handleRight}
              style={{
                padding: "10px 15px",
                background: "#2874f0",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "500",
                boxShadow: "0 2px 4px rgba(40,116,240,0.3)",
              }}
            >
              →
            </button>
          </div>
        </div>
        
        <div
          ref={carouselRef}
          style={{
            display: "flex",
            gap: "20px",
            overflow: "hidden",
            scrollBehavior: "smooth",
            padding: "10px 0",
          }}
        >
          {infiniteFeatured.map((item, index) => (
            <div
              key={index}
              style={{
                minWidth: "280px",
                background: "#fff",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                border: "1px solid #f0f0f0",
                textAlign: "center",
                transition: "transform 0.2s, box-shadow 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-5px)";
                e.target.style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
              }}
            >
              <div style={{ position: "relative", marginBottom: "15px" }}>
                <img
                  src={item.img}
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                <div style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  background: "#ff6b6b",
                  color: "white",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}>
                  {item.rating} ★
                </div>
              </div>
              <h3 style={{ 
                fontSize: "16px", 
                margin: "0 0 8px 0", 
                color: "#333",
                fontWeight: "600",
                lineHeight: "1.3"
              }}>
                {item.name}
              </h3>
              <div style={{ 
                fontSize: "18px", 
                color: "#2874f0", 
                fontWeight: "bold",
                marginBottom: "10px"
              }}>
                {item.price}
              </div>
              <button 
                onClick={() => setPage("products")}
                style={{
                  background: "#2874f0",
                  color: "#fff",
                  border: "none",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  fontSize: "14px",
                  fontWeight: "500",
                  cursor: "pointer",
                  width: "100%",
                }}>
                View Details
              </button>
            </div>
          ))}
            </div>
          </div>

      {/* About Section */}
      <div style={{ maxWidth: "1200px", margin: "40px auto", padding: "0 20px" }}>
        <div style={{ background: "#fff", borderRadius: "12px", padding: "40px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
          <h2 style={{ fontSize: "28px", color: "#333", marginBottom: "20px", fontWeight: "bold" }}>
            About Sithee Food Products
          </h2>
          <p style={{ color: "#666", fontSize: "16px", lineHeight: "1.6", marginBottom: "30px" }}>
            Sithee Food Products, established in 2017 and based in Erode, Tamil Nadu, is a trusted manufacturer and wholesaler known for delivering high-quality food essentials. Specializing in a diverse range of products such as gram flour, appalam papad, maida, vermicelli noodles, and wheat flour, the company has built a strong reputation for quality, consistency, and customer satisfaction.
          </p>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginTop: "30px" }}>
            <div style={{ background: "#f8f9fa", padding: "20px", borderRadius: "8px" }}>
              <h3 style={{ color: "#2874f0", fontSize: "18px", marginBottom: "10px", fontWeight: "600" }}>
                ✓ High-Quality Products
              </h3>
              <p style={{ color: "#666", fontSize: "14px" }}>
                We prioritize quality, offering premium food products that meet the highest industry standards.
              </p>
            </div>
            <div style={{ background: "#f8f9fa", padding: "20px", borderRadius: "8px" }}>
              <h3 style={{ color: "#2874f0", fontSize: "18px", marginBottom: "10px", fontWeight: "600" }}>
                ✓ Trusted Since 2017
              </h3>
              <p style={{ color: "#666", fontSize: "14px" }}>
                Over 7 years of experience in the food industry with strong reputation for reliability.
              </p>
            </div>
            <div style={{ background: "#f8f9fa", padding: "20px", borderRadius: "8px" }}>
              <h3 style={{ color: "#2874f0", fontSize: "18px", marginBottom: "10px", fontWeight: "600" }}>
                ✓ Fresh & Hygienic
              </h3>
              <p style={{ color: "#666", fontSize: "14px" }}>
                Our manufacturing processes ensure every product is fresh, hygienic, and packed with original taste.
              </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return null;
}

function AboutUs() {
  return (
    <div style={{ maxWidth: 900, margin: "40px auto", padding: "0 20px" }}>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <h1 style={{ color: "#1a3c34", fontSize: 32, marginBottom: 16 }}>About Sithee Food Products</h1>
        <p style={{ color: "#444", fontSize: 16, lineHeight: 1.6, maxWidth: 700, margin: "0 auto" }}>
          Sithee Food Products, established in 2017 and based in Erode, Tamil Nadu, is a trusted manufacturer and wholesaler known for delivering high-quality food essentials. Specializing in a diverse range of products such as gram flour, appalam papad, maida, vermicelli noodles, and wheat flour, the company has built a strong reputation for quality, consistency, and customer satisfaction. With a focus on traditional taste and modern hygiene standards, Sithee Food Products continues to serve households and businesses across the region, ensuring freshness and excellence in every pack.
        </p>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 32, marginBottom: 40 }}>
        <div style={{ flex: 2, minWidth: 300 }}>
          <h2 style={{ color: "#1a3c34", fontSize: 24, marginBottom: 20 }}>Why Choose Us?</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <div style={{ color: "#28a745", fontSize: 20, fontWeight: "bold" }}>✓</div>
              <div>
                <h3 style={{ color: "#1a3c34", fontSize: 18, marginBottom: 4 }}>High-Quality Products</h3>
                <p style={{ color: "#444", fontSize: 14, lineHeight: 1.5 }}>We prioritize quality, offering premium food products that meet the highest industry standards.</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <div style={{ color: "#28a745", fontSize: 20, fontWeight: "bold" }}>✓</div>
              <div>
                <h3 style={{ color: "#1a3c34", fontSize: 18, marginBottom: 4 }}>Trusted Since 2017</h3>
                <p style={{ color: "#444", fontSize: 14, lineHeight: 1.5 }}>Over 7 years of experience in the food industry with strong reputation for reliability and excellence.</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <div style={{ color: "#28a745", fontSize: 20, fontWeight: "bold" }}>✓</div>
              <div>
                <h3 style={{ color: "#1a3c34", fontSize: 18, marginBottom: 4 }}>Commitment to Freshness</h3>
                <p style={{ color: "#444", fontSize: 14, lineHeight: 1.5 }}>Our manufacturing processes ensure every product is fresh, hygienic, and packed with original taste.</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <div style={{ color: "#28a745", fontSize: 20, fontWeight: "bold" }}>✓</div>
              <div>
                <h3 style={{ color: "#1a3c34", fontSize: 18, marginBottom: 4 }}>Wide Distribution Network</h3>
                <p style={{ color: "#444", fontSize: 14, lineHeight: 1.5 }}>Serving both households and businesses with flexible wholesale options and timely delivery.</p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ flex: 1, minWidth: 250 }}>
          <h2 style={{ color: "#1a3c34", fontSize: 24, marginBottom: 20 }}>Company Factsheet</h2>
          <div style={{ background: "#f4f8fb", borderRadius: 12, padding: 20, marginBottom: 20 }}>
            <h3 style={{ color: "#1a3c34", fontSize: 18, marginBottom: 12 }}>Basic Information</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontWeight: 600, color: "#1a3c34" }}>Nature of Business:</span>
                <span style={{ color: "#444" }}>Manufacturer</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontWeight: 600, color: "#1a3c34" }}>Company CEO:</span>
                <span style={{ color: "#444" }}>Nallasamy Sathasivam</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontWeight: 600, color: "#1a3c34" }}>Legal Status:</span>
                <span style={{ color: "#444" }}>Proprietorship</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontWeight: 600, color: "#1a3c34" }}>Annual Turnover:</span>
                <span style={{ color: "#444" }}>5 - 25 Cr</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontWeight: 600, color: "#1a3c34" }}>Employees:</span>
                <span style={{ color: "#444" }}>51 to 100 People</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontWeight: 600, color: "#1a3c34" }}>GST Registration:</span>
                <span style={{ color: "#444" }}>01-07-2017</span>
              </div>
            </div>
          </div>

          <div style={{ background: "#f4f8fb", borderRadius: 12, padding: 20, marginBottom: 20 }}>
            <h3 style={{ color: "#1a3c34", fontSize: 18, marginBottom: 12 }}>Statutory Profile</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontWeight: 600, color: "#1a3c34" }}>GST Number:</span>
                <span style={{ color: "#444", fontSize: 13 }}>33BFRPS8801J1ZW</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontWeight: 600, color: "#1a3c34" }}>Banker:</span>
                <span style={{ color: "#444" }}>Canara Bank</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontWeight: 600, color: "#1a3c34" }}>GST Partner:</span>
                <span style={{ color: "#444" }}>Nallasamy Sathasivam</span>
              </div>
            </div>
          </div>

          <div style={{ background: "#f4f8fb", borderRadius: 12, padding: 20 }}>
            <h3 style={{ color: "#1a3c34", fontSize: 18, marginBottom: 12 }}>Additional Business</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              <span style={{ background: "#007bff", color: "#fff", padding: "6px 12px", borderRadius: 6, fontSize: 13 }}>Retail Business</span>
              <span style={{ background: "#007bff", color: "#fff", padding: "6px 12px", borderRadius: 6, fontSize: 13 }}>Factory / Manufacturing</span>
              <span style={{ background: "#007bff", color: "#fff", padding: "6px 12px", borderRadius: 6, fontSize: 13 }}>Office / Sale Office</span>
              <span style={{ background: "#007bff", color: "#fff", padding: "6px 12px", borderRadius: 6, fontSize: 13 }}>Wholesale Business</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: "#f8f9fa", borderRadius: 12, padding: 24, textAlign: "center", marginBottom: 40 }}>
        <h2 style={{ color: "#1a3c34", fontSize: 24, marginBottom: 16 }}>Our Mission</h2>
        <p style={{ color: "#444", fontSize: 16, lineHeight: 1.6, maxWidth: 600, margin: "0 auto" }}>
          To provide high-quality, authentic food products that preserve traditional taste while meeting modern hygiene standards. We strive to be the most trusted name in food essentials, serving households and businesses with excellence, reliability, and commitment to customer satisfaction.
        </p>
      </div>

      <div style={{ marginBottom: 40 }}>
        <h2 style={{ color: "#1a3c34", fontSize: 24, marginBottom: 20, textAlign: "center" }}>Infrastructural Set-Up</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "center" }}>
          <div style={{ flex: 1, minWidth: 300, maxWidth: 400 }}>
            <div style={{ background: "#fff", borderRadius: 12, padding: 20, boxShadow: "0 4px 12px rgba(0,0,0,0.1)", textAlign: "center" }}>
              <h3 style={{ color: "#1a3c34", fontSize: 18, marginBottom: 16 }}>Our Signboard</h3>

              <div style={{ marginTop: 12, color: "#444", fontSize: 14 }}>
                <strong>GSTIN:</strong> 33BFRPS8801J1ZW<br />
                <strong>Address:</strong> 6/149A, Mettupalayam, Perode Post, Chittode, Erode (Dt) - 638 102<br />
                <strong>Contact:</strong> Cell: 90925 33833
              </div>
            </div>
          </div>
          
          <div style={{ flex: 1, minWidth: 300, maxWidth: 400 }}>
            <div style={{ background: "#fff", borderRadius: 12, padding: 20, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
              <h3 style={{ color: "#1a3c34", fontSize: 18, marginBottom: 16 }}>Infrastructure Highlights</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ color: "#28a745", fontSize: 18, fontWeight: "bold" }}>🏭</div>
                  <div>
                    <div style={{ fontWeight: 600, color: "#1a3c34", fontSize: 14 }}>Manufacturing Unit</div>
                    <div style={{ color: "#444", fontSize: 13 }}>State-of-the-art production facility</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ color: "#28a745", fontSize: 18, fontWeight: "bold" }}>🏢</div>
                  <div>
                    <div style={{ fontWeight: 600, color: "#1a3c34", fontSize: 14 }}>Office & Sales</div>
                    <div style={{ color: "#444", fontSize: 13 }}>Professional business operations</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ color: "#28a745", fontSize: 18, fontWeight: "bold" }}>📦</div>
                  <div>
                    <div style={{ fontWeight: 600, color: "#1a3c34", fontSize: 14 }}>Warehouse</div>
                    <div style={{ color: "#444", fontSize: 13 }}>Storage and distribution center</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ color: "#28a745", fontSize: 18, fontWeight: "bold" }}>🔧</div>
                  <div>
                    <div style={{ fontWeight: 600, color: "#1a3c34", fontSize: 14 }}>Infrastructure Facilities</div>
                    <div style={{ color: "#444", fontSize: 13 }}>Modern equipment and technology</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactUs() {
  const [showCallModal, setShowCallModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerMessage, setCustomerMessage] = useState("");

  const products = [
    "Sithee Organic Jaggery Powder",
    "170gm Sithee Roasted Vermicelli",
    "170gm Sithee Ragi Vermicelli",
    "50Kg Tree Mixed Gram Flour",
    "500gm Sithee Bajji Bonda Powder",
    "500gm Sithee Rice Flour",
    "500gm Sithee Double Roasted Rava",
    "150gm Sithee Roasted Vermicelli",
    "Other Products"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert("Thank you for your inquiry! We'll contact you soon.");
    setShowCallModal(false);
    // Reset form
    setSelectedProduct("");
    setCustomerName("");
    setCustomerPhone("");
    setCustomerEmail("");
    setCustomerMessage("");
  };

  return (
    <div style={{ maxWidth: 900, margin: "40px auto", padding: "0 20px" }}>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <h1 style={{ color: "#1a3c34", fontSize: 32, marginBottom: 16 }}>Contact Us</h1>
        <p style={{ color: "#444", fontSize: 16, lineHeight: 1.6 }}>
          Get in touch with Sithee Food Products for all your food essentials needs. We're here to serve you with quality products and excellent service.
        </p>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 32, marginBottom: 40 }}>
        <div style={{ flex: 2, minWidth: 300 }}>
          <div style={{ background: "#fff", borderRadius: 12, padding: 24, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
            <h2 style={{ color: "#1a3c34", fontSize: 24, marginBottom: 20 }}>Company Information</h2>
            
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{ background: "#007bff", color: "#fff", padding: "8px 12px", borderRadius: 6, fontSize: 12, fontWeight: 600 }}>
                Verified Plus Supplier
              </div>
              <div style={{ color: "#28a745", fontSize: 14, fontWeight: 600 }}>
                4 yrs
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <div style={{ color: "#ffc107", fontSize: 18 }}>★★★★★</div>
              <div style={{ color: "#28a745", fontSize: 16, fontWeight: 600 }}>4.5(6)</div>
            </div>

            <div style={{ background: "#f8f9fa", borderRadius: 8, padding: 12, marginBottom: 20 }}>
              <div style={{ color: "#444", fontSize: 14, fontWeight: 600, marginBottom: 4 }}>Response Rate</div>
              <div style={{ color: "#28a745", fontSize: 16, fontWeight: 600 }}>75% Call Response Rate</div>
            </div>

                          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <h3 style={{ color: "#1a3c34", fontSize: 18, marginBottom: 8 }}>Reach Us</h3>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ color: "#007bff", fontSize: 20 }}>📍</div>
                  <div>
                    <div style={{ fontWeight: 600, color: "#1a3c34", fontSize: 14 }}>Main Address</div>
                    <div style={{ color: "#444", fontSize: 14 }}>
                      6/149A, Mettupalayam, Perode, Chithode, Erode-638102, Tamil Nadu, India
                    </div>
                    <a 
                      href="https://www.google.co.in/maps/dir//11.398329,77.652088/@11.3983175,77.5696861,12z?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ 
                        color: "#007bff", 
                        fontSize: 13, 
                        textDecoration: "underline",
                        cursor: "pointer",
                        marginTop: 4,
                        display: "inline-block"
                      }}
                    >
                      📍 View on Google Maps
                    </a>
                  </div>
                </div>
              
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ color: "#007bff", fontSize: 20 }}>🏢</div>
                <div>
                  <div style={{ fontWeight: 600, color: "#1a3c34", fontSize: 14 }}>Corporate Office</div>
                  <div style={{ color: "#444", fontSize: 14 }}>
                    147 A, Main Road, 638102, Erode
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ color: "#007bff", fontSize: 20 }}>👤</div>
                <div>
                  <div style={{ fontWeight: 600, color: "#1a3c34", fontSize: 14 }}>Managing Director</div>
                  <div style={{ color: "#444", fontSize: 14 }}>
                    M.S.Sharath Mano
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ color: "#007bff", fontSize: 20 }}>🏷️</div>
                <div>
                  <div style={{ fontWeight: 600, color: "#1a3c34", fontSize: 14 }}>GST Number</div>
                  <div style={{ color: "#444", fontSize: 14 }}>
                    33BFRPS8801J1ZW
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ flex: 1, minWidth: 250 }}>
          <div style={{ background: "#fff", borderRadius: 12, padding: 24, boxShadow: "0 4px 12px rgba(0,0,0,0.1)", marginBottom: 20 }}>
            <h3 style={{ color: "#1a3c34", fontSize: 20, marginBottom: 16 }}>Quick Actions</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                                            <button 
                 onClick={() => setShowCallModal(true)}
                 style={{ 
                   background: "#007bff", 
                   color: "#fff", 
                   border: 0, 
                   borderRadius: 8, 
                   padding: "12px 16px", 
                   fontWeight: 600, 
                   fontSize: 14, 
                   cursor: "pointer",
                   transition: "background 0.2s"
                 }}
               >
                 View Mobile Number
               </button>
                              <button 
                 onClick={() => setShowCallModal(true)}
                 style={{ 
                   background: "#28a745", 
                   color: "#fff", 
                   border: 0, 
                   borderRadius: 8, 
                   padding: "12px 16px", 
                   fontWeight: 600, 
                   fontSize: 14, 
                   cursor: "pointer",
                   transition: "background 0.2s"
                 }}
               >
                 Contact Supplier
               </button>
            </div>
          </div>

          <div style={{ background: "#f8f9fa", borderRadius: 12, padding: 20 }}>
            <h3 style={{ color: "#1a3c34", fontSize: 18, marginBottom: 12 }}>Tell us what you need</h3>
            <p style={{ color: "#444", fontSize: 14, lineHeight: 1.5, marginBottom: 16 }}>
              We'll help you get quotes for your requirements
            </p>
            <button 
              onClick={() => setShowCallModal(true)}
              style={{ 
                background: "#007bff", 
                color: "#fff", 
                border: 0, 
                borderRadius: 6, 
                padding: "10px 16px", 
                fontWeight: 600, 
                fontSize: 14, 
                cursor: "pointer",
                width: "100%"
              }}
            >
              Send Inquiry
            </button>
          </div>
        </div>
      </div>

      <div style={{ background: "#f4f8fb", borderRadius: 12, padding: 24, textAlign: "center" }}>
        <h2 style={{ color: "#1a3c34", fontSize: 20, marginBottom: 12 }}>Business Hours</h2>
        <p style={{ color: "#444", fontSize: 14 }}>
          Monday - Saturday: 9:00 AM - 6:00 PM<br />
          Sunday: Closed
        </p>
        <div style={{ marginTop: 16, color: "#007bff", fontSize: 14, fontWeight: 600 }}>
          For urgent inquiries, please call our mobile number
        </div>
      </div>

      {showCallModal && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0,0,0,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
          padding: "20px"
        }}>
          <div style={{
            background: "#fff",
            borderRadius: 12,
            padding: 32,
            maxWidth: 500,
            width: "100%",
            maxHeight: "90vh",
            overflowY: "auto",
            position: "relative"
          }}>
            <button
              onClick={() => setShowCallModal(false)}
              style={{
                position: "absolute",
                top: 16,
                right: 16,
                background: "none",
                border: "none",
                fontSize: 24,
                cursor: "pointer",
                color: "#666"
              }}
            >
              ×
            </button>

            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <h2 style={{ color: "#1a3c34", fontSize: 24, marginBottom: 8 }}>Contact Sithee Food Products</h2>
              <p style={{ color: "#444", fontSize: 14 }}>
                Fill out the form below and we'll get back to you soon
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontWeight: 600, color: "#1a3c34", marginBottom: 8, fontSize: 14 }}>
                  Company Name *
                </label>
                <div style={{ 
                  background: "#f8f9fa", 
                  padding: "12px 16px", 
                  borderRadius: 8, 
                  border: "1px solid #e0e0e0",
                  color: "#1a3c34",
                  fontWeight: 600,
                  fontSize: 16
                }}>
                  Sithee Food Products
                </div>
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontWeight: 600, color: "#1a3c34", marginBottom: 8, fontSize: 14 }}>
                  Product of Interest *
                </label>
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: 8,
                    border: "1px solid #e0e0e0",
                    fontSize: 14,
                    background: "#fff"
                  }}
                >
                  <option value="">Select a product</option>
                  {products.map((product, index) => (
                    <option key={index} value={product}>{product}</option>
                  ))}
                </select>
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontWeight: 600, color: "#1a3c34", marginBottom: 8, fontSize: 14 }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  required
                  placeholder="Enter your full name"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: 8,
                    border: "1px solid #e0e0e0",
                    fontSize: 14
                  }}
                />
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontWeight: 600, color: "#1a3c34", marginBottom: 8, fontSize: 14 }}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  required
                  placeholder="Enter your phone number"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: 8,
                    border: "1px solid #e0e0e0",
                    fontSize: 14
                  }}
                />
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontWeight: 600, color: "#1a3c34", marginBottom: 8, fontSize: 14 }}>
                  Email Address
                </label>
                <input
                  type="email"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  placeholder="Enter your email address"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: 8,
                    border: "1px solid #e0e0e0",
                    fontSize: 14
                  }}
                />
              </div>

              <div style={{ marginBottom: 24 }}>
                <label style={{ display: "block", fontWeight: 600, color: "#1a3c34", marginBottom: 8, fontSize: 14 }}>
                  Message
                </label>
                <textarea
                  value={customerMessage}
                  onChange={(e) => setCustomerMessage(e.target.value)}
                  placeholder="Tell us about your requirements..."
                  rows={4}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: 8,
                    border: "1px solid #e0e0e0",
                    fontSize: 14,
                    resize: "vertical"
                  }}
                />
              </div>

              <div style={{ display: "flex", gap: 12 }}>
                <button
                  type="button"
                  onClick={() => setShowCallModal(false)}
                  style={{
                    flex: 1,
                    padding: "12px 16px",
                    borderRadius: 8,
                    border: "1px solid #e0e0e0",
                    background: "#fff",
                    color: "#666",
                    fontWeight: 600,
                    fontSize: 14,
                    cursor: "pointer"
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    flex: 1,
                    padding: "12px 16px",
                    borderRadius: 8,
                    border: "none",
                    background: "#007bff",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: 14,
                    cursor: "pointer"
                  }}
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  const [user, setUser] = useState(() => {
    // Check if user is already logged in from localStorage
    const savedUser = localStorage.getItem('userData');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [page, setPage] = useState("home");

  const handleSignup = (userData) => {
    setUser(userData);
    setShowSignup(false);
    setShowLogin(false);
  };

  const handleLogin = (loginData) => {
    setUser(loginData);
    setShowSignup(false);
    setShowLogin(false);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('userData');
  };

  // If user is not logged in, show login/signup
  if (!user) {
    if (showSignup) {
      return (
        <Signup
          onSignup={handleSignup}
          onShowLogin={() => setShowSignup(false)}
        />
      );
    }
    return (
      <Login
        onLogin={handleLogin}
        onShowSignup={() => setShowSignup(true)}
      />
    );
  }

  // After login, show heading, then nav, then selected page
  return (
    <div>
      <Heading />
      <Navbar page={page} setPage={setPage} user={user} onLogout={handleLogout} />
      {page === "home" && <Home setPage={setPage} />}
      {page === "products" && <FoodItems />}
      {page === "about" && <AboutUs />}
      {page === "contact" && <ContactUs />}
    </div>
  );
}

export default App; 
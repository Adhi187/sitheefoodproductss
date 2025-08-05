import React, { useState } from "react";

function FoodItems() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");

  // Helper to get a random image for each product
  function getRandomImage(seed) {
    if (seed.includes("170gm Sithee Roasted Vermicelli")) {
      return "https://5.imimg.com/data5/SELLER/Default/2025/4/503502380/UP/MP/QW/122442363/170gm-sithee-roasted-vermicelli-250x250.jpeg";
    }
    if (seed.includes("150gm Sithee Roasted Vermicelli")) {
      return "https://5.imimg.com/data5/SELLER/Default/2025/4/503332415/FR/GT/XW/122442363/natural-maida-flour-250x250.jpeg";
    }
    if (seed.includes("170gm Sithee Ragi Vermicelli")) {
      return "https://5.imimg.com/data5/SELLER/Default/2025/4/503331334/MH/LP/FW/122442363/double-roasted-rava-250x250.jpeg";
    }
    if (seed.includes("Sithee Organic Jaggery Powder")) {
      return "https://5.imimg.com/data5/SELLER/Default/2025/4/503334223/DJ/DC/XQ/122442363/appalam-papad-250x250.jpeg";
    }
    if (seed.includes("50Kg Tree Mixed Gram Flour")) {
      return "https://5.imimg.com/data5/SELLER/Default/2025/4/503335067/VM/KQ/QT/122442363/ragi-floursefesfs-250x250.jpeg";
    }
    if (seed.includes("50Kg Orange Mixed Gram Flour")) {
      return "https://5.imimg.com/data5/SELLER/Default/2025/4/503335015/KG/JD/GM/122442363/ragi-flourefewf-250x250.jpeg";
    }
    if (seed.includes("50Kg Siruvani Mixed Gram Flour")) {
      return "https://5.imimg.com/data5/SELLER/Default/2025/4/503335147/UR/QF/AX/122442363/organic-ragi-flourefef-250x250.jpeg";
    }
    if (seed.includes("50Kg Sithee Special Gram Flour")) {
      return "https://5.imimg.com/data5/SELLER/Default/2025/4/503467741/AT/LG/DJ/122442363/50kg-sithee-special-gram-flour-250x250.jpeg";
    }
    if (seed.includes("500gm Siruvani Gram Savoury Flour")) {
      return "https://5.imimg.com/data5/SELLER/Default/2025/4/503330986/KY/HQ/ZA/122442363/chakki-fresh-atta-250x250.jpeg";
    }
    if (seed.includes("500gm Sithee Bajji Bonda Powder")) {
      return "https://5.imimg.com/data5/SELLER/Default/2025/4/503332581/BE/LR/BR/122442363/rice-flour-500x500.jpeg";
    }
    if (seed.includes("1Kg Sithee Bajji Bonda Powder")) {
      return "https://5.imimg.com/data5/SELLER/Default/2025/4/503332581/BE/LR/BR/122442363/rice-flour-500x500.jpeg";
    }
    if (seed.includes("2Kg Sithee Bajji Bonda Powder")) {
      return "https://5.imimg.com/data5/SELLER/Default/2025/4/503332581/BE/LR/BR/122442363/rice-flour-500x500.jpeg";
    }
    if (seed.includes("500gm Sithee Rice Flour")) {
      return "https://5.imimg.com/data5/SELLER/Default/2025/4/503333782/UT/NA/UR/122442363/roasted-vermicelli-500x500.jpeg";
    }
    return `https://source.unsplash.com/seed/${encodeURIComponent(seed)}/60x60?food,flour,india,packaging`;
  }

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
    setShowContactForm(false);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your interest! We'll contact you soon.");
    setShowContactForm(false);
    setShowModal(false);
  };

  const foodCategories = [
    {
      name: "Vermicelli",
      items: [
        "170gm Sithee Roasted Vermicelli",
        "150gm Sithee Roasted Vermicelli",
        "170gm Sithee Ragi Vermicelli"
      ]
    },
    {
      name: "Gram Flour",
    items: [
      "50Kg Tree Mixed Gram Flour",
      "50Kg Orange Mixed Gram Flour",
      "50Kg Siruvani Mixed Gram Flour",
      "50Kg Sithee Special Gram Flour",
      "500gm Siruvani Gram Savoury Flour"
    ]
  },
  {
    name: "Mixes",
    items: [
      "500gm Sithee Bajji Bonda Powder",
      "1Kg Sithee Bajji Bonda Powder",
      "2Kg Sithee Bajji Bonda Powder"
    ]
  },
  {
    name: "Rice Flour",
    items: [
      "500gm Sithee Rice Flour"
    ]
  }
  ];

  const productDetails = {
    "170gm Sithee Roasted Vermicelli": {
      price: "₹45/pack",
      rating: 4.3,
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2025/4/503502380/UP/MP/QW/122442363/170gm-sithee-roasted-vermicelli-250x250.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2025/4/503502380/UP/MP/QW/122442363/170gm-sithee-roasted-vermicelli-500x500.jpeg"
      ],
      specifications: {
        "Weight": "170gm",
        "Packaging": "Pack",
        "Brand": "Sithee",
        "Shelf Life": "6 months"
      },
      features: [
        "Made from premium quality wheat",
        "Double roasted for enhanced taste",
        "Perfect for traditional Indian dishes",
        "No artificial preservatives"
      ]
    },
    "150gm Sithee Roasted Vermicelli": {
      price: "₹12/Pack",
      rating: 4.2,
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2025/4/503332415/FR/GT/XW/122442363/natural-maida-flour-250x250.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2025/4/503332415/FR/GT/XW/122442363/natural-maida-flour-500x500.jpeg"
      ],
      specifications: {
        "Weight": "150 g",
        "Packaging": "Pouch",
        "Brand": "Sithee",
        "Shelf Life": "6 Months",
        "Preservative Type": "No Preservatives Added",
        "Ingredients": "Refined Wheat Flour",
        "Storage Instruction": "Keep in Cool dry place",
        "FSSAI": "Yes",
        "Manufacturing By": "Sithee Food Products",
        "Minimum Order Quantity": "100 Pack"
      },
      features: [
        "In a pan, roasted onion, chillies, etc., in oil",
        "Then pour 350ml of water and boil",
        "When boiling add sithee roasted vermicelli and salt to taste",
        "Stir the mix well till it simmers into a thick paste",
        "Stir lightly and serve"
      ]
    },
    "170gm Sithee Ragi Vermicelli": {
      price: "₹17/Pack",
      rating: 4.4,
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2025/4/503331334/MH/LP/FW/122442363/double-roasted-rava-250x250.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2025/4/503331334/MH/LP/FW/122442363/double-roasted-rava-500x500.jpeg"
      ],
      specifications: {
        "Weight": "170gm",
        "Packaging": "Pouch",
        "Brand": "Sithee",
        "Shelf Life": "6 Months",
        "Preservative Type": "No Preservatives Added",
        "Storage Instruction": "Keep in cool dry place",
        "FSSAI": "Yes",
        "Ingredients": "Finger Millet Flour, Refined Wheat Flour",
        "Manufacturing By": "Sithee Food Products",
        "Minimum Order Quantity": "100 Pack"
      },
      features: [
        "Cooking Direction:",
        "Take 170g of Sithee Ragi Vermicelli and soak in water and drain the excess water",
        "Then, cook it in the steam for 5 minutes",
        "Now Sithee Ragi Vermicelli is ready for your recipe",
        "Heat oil in the frying pan, add mustard seeds, black gram, onion, green chilies and curry leaves adequate salt, etc",
        "Then put the cooked Sithee Ragi Vermicelli in the pan and mix thoroughly for five minutes and serve hot"
      ]
    },
    "50Kg Tree Mixed Gram Flour": {
      price: "₹52/Kg",
      rating: 4.6,
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2025/4/503335067/VM/KQ/QT/122442363/ragi-floursefesfs-250x250.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2025/4/503335067/VM/KQ/QT/122442363/ragi-floursefesfs-500x500.jpeg"
      ],
      specifications: {
        "Weight": "50kg",
        "Packaging": "Bag",
        "Brand": "Tree",
        "Shelf Life": "2 Month",
        "Ingredients": "Maize, Gram Dhall",
        "Manufacturing By": "Sithee Food Products",
        "FSSAI": "Yes",
        "Minimum Order Quantity": "100 Kg"
      },
      features: [
        "Premium Quality Blend: Made from a carefully selected mix of various gram pulses (like chickpeas, black gram, and green gram) for enhanced flavor and nutrition",
        "Natural & Additive-Free: 100% pure flour with no artificial preservatives, colors, or additives – perfect for health-conscious cooking",
        "Rich in Protein & Fiber: A nutritious choice packed with plant-based protein, essential minerals, and dietary fiber to support a balanced diet",
        "Ideal for Versatile Use: Suitable for making traditional dishes like pakoras, chillas, and snacks, as well as gluten-free baking and cooking"
      ]
    },
    "50Kg Orange Mixed Gram Flour": {
      price: "₹60/Kg",
      rating: 4.5,
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2025/4/503335015/KG/JD/GM/122442363/ragi-flourefewf-250x250.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2025/4/503335015/KG/JD/GM/122442363/ragi-flourefewf-500x500.jpeg"
      ],
      specifications: {
        "Weight": "50kg",
        "Packaging": "Bag",
        "Brand": "Orange",
        "Shelf Life": "2 Month",
        "Manufacturing By": "Sithee Food Products",
        "FSSAI": "Yes",
        "Ingredients": "Maize, Gram Dhall",
        "Minimum Order Quantity": "100 Kg"
      },
      features: [
        "Wholesome Pulse Blend: A nutritious mix of gram varieties including chickpeas and other pulses, finely milled for a smooth texture",
        "Rich in Nutrients: High in protein, fiber, and essential minerals—perfect for health-conscious cooking and baking",
        "Pure & Natural: Free from additives and preservatives, ensuring fresh, authentic taste in every batch",
        "Bulk Pack for Kitchens & Stores: Ideal for restaurants, caterers, and wholesale needs—consistent quality in every 50Kg pack"
      ]
    },
    "50Kg Siruvani Mixed Gram Flour": {
      price: "₹75/Kg",
      rating: 4.7,
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2025/4/503335147/UR/QF/AX/122442363/organic-ragi-flourefef-250x250.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2025/4/503335147/UR/QF/AX/122442363/organic-ragi-flourefef-500x500.jpeg"
      ],
      specifications: {
        "Weight": "50kg",
        "Packaging": "Bag",
        "Brand": "Siruvani",
        "Shelf Life": "2 Month",
        "Ingredients": "Gram Dhall, Maize, Rice",
        "Manufacturing By": "Sithee Food Products",
        "FSSAI": "Yes",
        "Minimum Order Quantity": "100 Kg"
      },
      features: [
        "Premium Pulse Blend – Made from a balanced mix of high-quality gram pulses for superior taste and texture",
        "Rich in Protein & Fiber – Supports healthy, protein-packed meals with added dietary fiber",
        "Natural & Preservative-Free – 100% pure flour with no artificial additives or chemicals",
        "Bulk Pack for Heavy Use – Ideal for hotels, restaurants, and wholesale supply with consistent quality in every batch"
      ]
    },
    "50Kg Sithee Special Gram Flour": {
      price: "₹85/Kg",
      rating: 4.8,
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2025/4/503467741/AT/LG/DJ/122442363/50kg-sithee-special-gram-flour-250x250.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2025/4/503467741/AT/LG/DJ/122442363/50kg-sithee-special-gram-flour-500x500.jpeg"
      ],
      specifications: {
        "Weight": "50kg",
        "Packaging": "Bag",
        "Brand": "Sithee",
        "Shelf Life": "2 Month",
        "Ingredients": "Gram Dhall, Maize, Rice",
        "Manufacturing By": "Sithee Food Products",
        "FSSAI": "Yes",
        "Minimum Order Quantity": "100 Kg"
      },
      features: [
        "Finely Milled Quality – Made from premium-grade gram for a smooth, lump-free texture ideal for all recipes",
        "Rich in Protein & Fiber – A healthy choice packed with natural nutrients to support a balanced diet",
        "100% Pure & Natural – Free from preservatives, additives, and artificial colors for authentic taste",
        "Ideal for Bulk Use – Perfect for restaurants, catering services, and wholesale kitchen needs"
      ]
    },
    "500gm Siruvani Gram Savoury Flour": {
      price: "₹35/pack",
      rating: 4.3,
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2025/4/503330986/KY/HQ/ZA/122442363/chakki-fresh-atta-250x250.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2025/4/503330986/KY/HQ/ZA/122442363/chakki-fresh-atta-500x500.jpeg"
      ],
      specifications: {
        "Weight": "500gm",
        "Packaging": "Pack",
        "Brand": "Siruvani",
        "Shelf Life": "6 months"
      },
      features: [
        "Perfect for savory dishes",
        "Traditional grinding process",
        "Fresh and aromatic",
        "Ideal for home cooking"
      ]
    },
    "500gm Sithee Special Gram Flour": {
      price: "₹90/Kg",
      rating: 4.4,
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2025/4/503467741/AT/LG/DJ/122442363/50kg-sithee-special-gram-flour-250x250.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2025/4/503467741/AT/LG/DJ/122442363/50kg-sithee-special-gram-flour-500x500.jpeg"
      ],
      specifications: {
        "Weight": "500gm",
        "Packaging": "Pouch",
        "Brand": "Sithee",
        "Shelf Life": "3 Month",
        "FSSAI": "Yes",
        "Manufacturing By": "Sithee Food Products",
        "Storage Instruction": "Keep in cool dry place",
        "Preservative Type": "No Preservatives Added",
        "Minimum Order Quantity": "100 Kg"
      },
      features: [
        "Gram dal we procure high quality gram dal, which are processed and cleaned in our high technology plant",
        "It gives you better quality to enrich you your food with a real natural taste and good aroma"
      ]
    },
    "500gm Sithee Bajji Bonda Powder": {
      price: "₹65/pack",
      rating: 4.6,
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2025/4/503332581/BE/LR/BR/122442363/rice-flour-500x500.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2025/4/503332581/BE/LR/BR/122442363/rice-flour-500x500.jpeg"
      ],
      specifications: {
        "Weight": "500gm",
        "Packaging": "Pack",
        "Brand": "Sithee",
        "Shelf Life": "8 months"
      },
      features: [
        "Perfect blend for authentic bajji and bonda",
        "Ready-to-use mix for quick preparation",
        "Traditional taste and texture",
        "No artificial preservatives",
        "Effective & timely delivery"
      ]
    },
    "1Kg Sithee Bajji Bonda Powder": {
      price: "₹120/pack",
      rating: 4.5,
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2025/4/503332581/BE/LR/BR/122442363/rice-flour-500x500.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2025/4/503332581/BE/LR/BR/122442363/rice-flour-500x500.jpeg"
      ],
      specifications: {
        "Weight": "1Kg",
        "Packaging": "Pack",
        "Brand": "Sithee",
        "Shelf Life": "8 months"
      },
      features: [
        "Perfect blend for authentic bajji and bonda",
        "Ready-to-use mix for quick preparation",
        "Traditional taste and texture",
        "No artificial preservatives",
        "Effective & timely delivery"
      ]
    },
    "2Kg Sithee Bajji Bonda Powder": {
      price: "₹220/pack",
      rating: 4.7,
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2025/4/503332581/BE/LR/BR/122442363/rice-flour-500x500.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2025/4/503332581/BE/LR/BR/122442363/rice-flour-500x500.jpeg"
      ],
      specifications: {
        "Weight": "2Kg",
        "Packaging": "Pack",
        "Brand": "Sithee",
        "Shelf Life": "8 months"
      },
      features: [
        "Perfect blend for authentic bajji and bonda",
        "Ready-to-use mix for quick preparation",
        "Traditional taste and texture",
        "No artificial preservatives",
        "Effective & timely delivery"
      ]
    },
    "500gm Sithee Rice Flour": {
      price: "₹45/Kg",
      rating: 4.4,
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2025/4/503333782/UT/NA/UR/122442363/roasted-vermicelli-500x500.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2025/4/503333782/UT/NA/UR/122442363/roasted-vermicelli-500x500.jpeg"
      ],
      specifications: {
        "Weight": "500gm",
        "Packaging": "Pouch",
        "Brand": "Sithee",
        "Shelf Life": "3 Month",
        "Manufacturing By": "Sithee Food Products",
        "Storage Instruction": "Keep in cool dry place",
        "FSSAI": "Yes",
        "Preservative Type": "No Preservatives Added",
        "Minimum Order Quantity": "100 Kg"
      },
      features: [
        "Raw rice we procure high-quality rice, which are cleaned and roasted in our high technology plant",
        "It gives you better quality to enrich your food with a real natural taste and good aroma",
        "Sithee rice flour is suitable for delicious appam, idiyappam, puttu and sweets",
        "Contains natural vitamins and minerals of rice",
        "No additives or preservatives used"
      ]
    }
  };

  return (
    <div style={{ background: "#f1f3f6", minHeight: "100vh", padding: "20px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1 style={{ fontSize: "36px", color: "#333", fontWeight: "bold", marginBottom: "10px" }}>
            Our Products
          </h1>
          <p style={{ fontSize: "18px", color: "#666", maxWidth: "600px", margin: "0 auto" }}>
            Discover our premium range of organic food products including jaggery, vermicelli, and gram flour
          </p>
        </div>

        {/* Product Categories */}
        {foodCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} style={{ marginBottom: "50px" }}>
            <h2 style={{ 
              fontSize: "28px", 
              color: "#333", 
              fontWeight: "bold", 
              marginBottom: "30px",
              borderBottom: "3px solid #2874f0",
              paddingBottom: "10px"
            }}>
              {category.name}
            </h2>
            
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
              gap: "25px" 
            }}>
              {category.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "20px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                    border: "1px solid #f0f0f0",
                    cursor: "pointer",
                    transition: "transform 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-5px)";
                    e.target.style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
                  }}
                  onClick={() => handleProductClick(item)}
                >
                  <div style={{ position: "relative", marginBottom: "15px", padding: "10px" }}>
                    <img
                      src={getRandomImage(item)}
                      alt={item}
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        borderRadius: "8px",
                        border: "1px solid #f0f0f0",
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
                      {productDetails[item]?.rating || 4.5} ★
                    </div>
                  </div>
                  
                  <h3 style={{ 
                    fontSize: "16px", 
                    margin: "0 0 8px 0", 
                    color: "#333",
                    fontWeight: "600",
                    lineHeight: "1.3"
                  }}>
                  {item}
                  </h3>
                  
                  <div style={{ 
                    fontSize: "18px", 
                    color: "#2874f0", 
                    fontWeight: "bold",
                    marginBottom: "15px"
                  }}>
                    {productDetails[item]?.price || "₹50/kg"}
                  </div>
                  
                  <button style={{
                    background: "#2874f0",
                    color: "#fff",
                    border: "none",
                    padding: "10px 20px",
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
        ))}
      </div>

      {/* Product Modal */}
      {showModal && selectedProduct && (
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
            borderRadius: "12px",
            maxWidth: "800px",
            width: "100%",
            maxHeight: "90vh",
            overflow: "auto",
            position: "relative"
          }}>
            <button
              onClick={() => setShowModal(false)}
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                background: "#fff",
                border: "none",
                fontSize: "24px",
                cursor: "pointer",
                zIndex: 1,
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
              }}
            >
              ×
            </button>
            
            <div style={{ padding: "30px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px", marginBottom: "30px" }}>
                <div style={{ padding: "10px" }}>
                  <img
                    src={productDetails[selectedProduct]?.images?.[0] || getRandomImage(selectedProduct)}
                    alt={selectedProduct}
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      border: "1px solid #f0f0f0",
                    }}
                  />
                </div>
                
                <div>
                  <h2 style={{ fontSize: "24px", color: "#333", marginBottom: "15px", fontWeight: "bold" }}>
                    {selectedProduct}
                  </h2>
                  
                  <div style={{ 
                    fontSize: "24px", 
                    color: "#2874f0", 
                    fontWeight: "bold",
                    marginBottom: "20px"
                  }}>
                    {productDetails[selectedProduct]?.price || "₹50/kg"}
                  </div>
                  
                  <div style={{ marginBottom: "20px" }}>
                    <h3 style={{ fontSize: "18px", color: "#333", marginBottom: "10px", fontWeight: "600" }}>
                      Specifications
                    </h3>
                    <div style={{ display: "grid", gap: "8px" }}>
                      {Object.entries(productDetails[selectedProduct]?.specifications || {}).map(([key, value]) => (
                        <div key={key} style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontWeight: "500" }}>{key}:</span>
                          <span style={{ color: "#333", fontWeight: "600" }}>{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div style={{ marginBottom: "20px" }}>
                    <h3 style={{ fontSize: "18px", color: "#333", marginBottom: "10px", fontWeight: "600" }}>
                      Key Features
                    </h3>
                    <ul style={{ paddingLeft: "20px", color: "#666" }}>
                      {productDetails[selectedProduct]?.features?.map((feature, index) => (
                        <li key={index} style={{ marginBottom: "5px" }}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <button
                    onClick={() => setShowContactForm(true)}
                    style={{
                      background: "#2874f0",
                      color: "#fff",
                      border: "none",
                      padding: "12px 24px",
                      borderRadius: "6px",
                      fontSize: "16px",
                      fontWeight: "500",
                      cursor: "pointer",
                      width: "100%",
                    }}
                  >
                    Yes, I am interested!
                  </button>
                </div>
              </div>
              
              {showContactForm && (
                <div style={{
                  borderTop: "1px solid #e0e0e0",
                  paddingTop: "20px",
                  marginTop: "20px"
                }}>
                  <h3 style={{ fontSize: "20px", color: "#333", marginBottom: "15px", fontWeight: "600" }}>
                    Contact Form
                  </h3>
                  <form onSubmit={handleContactSubmit}>
                    <div style={{ marginBottom: "15px" }}>
                      <label style={{ display: "block", marginBottom: "5px", color: "#333", fontWeight: "500" }}>
                        Product: {selectedProduct}
                      </label>
                      <input
                        type="text"
                        value={selectedProduct}
                        readOnly
                        style={{
                          width: "100%",
                          padding: "10px",
                          border: "1px solid #ddd",
                          borderRadius: "4px",
                          background: "#f9f9f9"
                        }}
                      />
                    </div>
                    
                    <div style={{ marginBottom: "15px" }}>
                      <label style={{ display: "block", marginBottom: "5px", color: "#333", fontWeight: "500" }}>
                        Seller: Sithee Food Products, Erode, Tamil Nadu
                      </label>
                      <input
                        type="text"
                        value="Sithee Food Products, Erode, Tamil Nadu"
                        readOnly
                        style={{
                          width: "100%",
                          padding: "10px",
                          border: "1px solid #ddd",
                          borderRadius: "4px",
                          background: "#f9f9f9"
                        }}
                      />
                    </div>
                    
                    <div style={{ marginBottom: "15px" }}>
                      <label style={{ display: "block", marginBottom: "5px", color: "#333", fontWeight: "500" }}>
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        placeholder="Enter your mobile number"
                        required
                        style={{
                          width: "100%",
                          padding: "10px",
                          border: "1px solid #ddd",
                          borderRadius: "4px"
                        }}
                      />
                    </div>
                    
                    <div style={{ display: "flex", gap: "10px" }}>
                      <button
                        type="submit"
                        style={{
                          background: "#2874f0",
                          color: "#fff",
                          border: "none",
                          padding: "10px 20px",
                          borderRadius: "4px",
                          fontSize: "14px",
                          fontWeight: "500",
                          cursor: "pointer",
                          flex: 1
                        }}
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowContactForm(false)}
                        style={{
                          background: "#fff",
                          color: "#2874f0",
                          border: "1px solid #2874f0",
                          padding: "10px 20px",
                          borderRadius: "4px",
                          fontSize: "14px",
                          fontWeight: "500",
                          cursor: "pointer",
                          flex: 1
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FoodItems; 
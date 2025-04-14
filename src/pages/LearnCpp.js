import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LearnCpp = () => {
  const [selectedTopic, setSelectedTopic] = useState("setup");
  const [isBroMode, setIsBroMode] = useState(false);
  const [content, setContent] = useState("");
  const [styles, setStyles] = useState("");

  const loadContent = useCallback(async () => {
    try {
      const filePath = isBroMode
        ? `/content/${selectedTopic}_bro.html`
        : `/content/${selectedTopic}_normal.html`;

      console.log("Fetching content from:", filePath);
      const response = await fetch(filePath);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const html = await response.text();

      // Extract the styles from the HTML
      const styleMatch = html.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
      if (styleMatch) {
        setStyles(styleMatch[1]);
      }

      // Extract the body content from the HTML
      const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
      if (bodyMatch) {
        setContent(bodyMatch[1]);
      } else {
        setContent("<p>Content not properly formatted</p>");
      }
    } catch (error) {
      console.error("Error loading content:", error);
      setContent("<p>Content not available. Error: " + error.message + "</p>");
    }
  }, [selectedTopic, isBroMode]);

  useEffect(() => {
    loadContent();
  }, [loadContent]);

  const topics = {
    setup: "Setting Up Your Environment",
    syntax: "Basic Syntax and Structure",
    dataTypes: "Data Types and Variables",
    controlFlow: "Control Flow (if, for, while)",
    functions: "Functions",
    oop: "Object-Oriented Programming",
    stl: "Standard Template Library (STL)"
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          width: "100vw",
          backgroundColor: "#f8f9fa",
          overflow: "hidden",
          position: "fixed",
          top: 0,
          left: 0
        }}
      >
        {/* Top Navbar */}
        <div style={{
          width: "100%",
          backgroundColor: "#FF8C00",
          padding: "15px 40px 15px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          boxSizing: "border-box"
        }}>
          <h2 style={{
            margin: 0,
            color: "#ffffff",
            fontSize: "24px",
            fontWeight: "600"
          }}>Learn C++</h2>
          <a
            href="/"
            style={{
              textDecoration: "none",
              backgroundColor: "#ffffff",
              color: "#FF8C00",
              padding: "8px 20px",
              borderRadius: "6px",
              fontSize: "16px",
              fontWeight: "500",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              transition: "all 0.2s ease",
              marginRight: "20px"
            }}
          >
            Home
          </a>
        </div>

        {/* Main Content Container */}
        <div style={{
          display: "flex",
          flex: 1,
          overflow: "hidden"
        }}>
          {/* Left Sidebar */}
          <div style={{
            width: "300px",
            height: "100%",
            padding: "30px 25px",
            borderRight: "1px solid #eaeaea",
            backgroundColor: "#ffffff",
            boxShadow: "2px 0 5px rgba(0,0,0,0.05)",
            overflowY: "auto"
          }}>
            <h3 style={{
              marginBottom: "30px",
              color: "#333",
              fontSize: "24px",
              fontWeight: "600"
            }}>Topics</h3>
            <ul style={{ listStyleType: "none", padding: 0, marginBottom: "40px" }}>
              {Object.entries(topics).map(([key, value]) => (
                <li key={key} style={{ margin: "15px 0" }}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedTopic(key)}
                    style={{
                      ...buttonStyle,
                      backgroundColor: selectedTopic === key ? "#FF8C00" : "#ffffff",
                      color: selectedTopic === key ? "#ffffff" : "#333",
                      border: `1px solid ${selectedTopic === key ? "#FF8C00" : "#eaeaea"}`,
                    }}
                  >
                    {value}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content Area */}
          <div style={{
            flex: 1,
            height: "100%",
            position: "relative",
            backgroundColor: "#ffffff"
          }}>
            {/* BRO MODE Toggle Button */}
            <div style={{
              position: "sticky",
              top: 0,
              padding: "25px 40px",
              backgroundColor: "#ffffff",
              borderBottom: "1px solid #eaeaea",
              zIndex: 1000,
              display: "flex",
              justifyContent: "flex-end"
            }}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsBroMode(!isBroMode)}
                style={{
                  background: isBroMode ? "#FF8C00" : "#ffffff",
                  border: `1px solid ${isBroMode ? "#FF8C00" : "#eaeaea"}`,
                  color: isBroMode ? "#ffffff" : "#333",
                  padding: "12px 25px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "500",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
                }}
              >
                {isBroMode ? "NORMAL MODE" : "BRO MODE 🔥"}
              </motion.button>
            </div>

            {/* Scrollable Content Area */}
            <motion.div
              key={isBroMode ? 'bro' : 'normal'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                height: "calc(100% - 85px)",
                overflowY: "auto",
                padding: "40px",
                backgroundColor: "#ffffff"
              }}
            >
              <div style={{
                maxWidth: "1000px",
                margin: "0 auto",
                padding: "0 20px"
              }}>
                <style>{styles}</style>
                <div dangerouslySetInnerHTML={{ __html: content }} />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const buttonStyle = {
  width: "100%",
  padding: "15px 20px",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "500",
  textAlign: "left",
  transition: "all 0.2s ease",
  backgroundColor: "#ffffff",
  marginBottom: "5px",
};

export default LearnCpp;
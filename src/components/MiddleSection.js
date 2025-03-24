import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MiddleSection = () => {
    return (
        <div style={{ textAlign: "center", padding: "20px 20px" }}>
            <motion.div
                className="paid-courses-section"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{ marginTop: "30px" }}
            >
                <motion.h1
                    style={{ fontSize: "2.5rem", fontWeight: "bold" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                >
                    Paid Courses
                </motion.h1>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginTop: "30px" }}>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        style={{ backgroundColor: "orange", padding: "10px", borderRadius: "10px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)", display: "flex", alignItems: "center" }}
                    >
                        <img src="https://www.bsitsoftware.com/images/mern/mongodb-BSIT-Software-Services-Web-And-App-Development-Company-In-India.jpg" alt="MEAN Stack" style={{ width: "100px", height: "80px", borderRadius: "10px", marginRight: "20px" }} />
                        <div>
                            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>MERN Stack</h2>
                            <p style={{ fontSize: "1rem", marginTop: "10px" }}>Learn the MERN stack (MongoDB, Express.js, React, Node.js) to build full-stack web applications.</p>
                            <Link to="/learn-mern">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    style={{ backgroundColor: "black", color: "white", padding: "10px 20px", border: "2px solid orange", borderRadius: "5px", marginTop: "10px" }}
                                >
                                    Learn MERN
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        style={{ backgroundColor: "orange", padding: "10px", borderRadius: "10px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)", display: "flex", alignItems: "center" }}
                    >
                        <img src="https://img.freepik.com/free-vector/tiny-scientists-developing-ai-using-machine-learning-brain-computing-data-flat-vector-illustration-artificial-intelligence-technology-science-concept-banner-website-design-landing-web-page_74855-22578.jpg" alt="Data Science" style={{ width: "100px", height: "80px", borderRadius: "10px", marginRight: "20px" }} />
                        <div>
                            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Data Science</h2>
                            <p style={{ fontSize: "1rem", marginTop: "10px" }}>Master data science concepts and tools, including Python, R, and machine learning algorithms.</p>
                            <Link to="/learn-data-science">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    style={{ backgroundColor: "black", color: "white", padding: "10px 20px", border: "2px solid orange", borderRadius: "5px", marginTop: "10px" }}
                                >
                                    Learn Data Science
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        style={{ backgroundColor: "orange", padding: "10px", borderRadius: "10px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)", display: "flex", alignItems: "center" }}
                    >
                        <img src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg" alt="DSA" style={{ width: "100px", height: "80px", borderRadius: "10px", marginRight: "20px" }} />
                        <div>
                            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Data Structures and Algorithms</h2>
                            <p style={{ fontSize: "1rem", marginTop: "10px" }}>Learn the fundamentals of data structures and algorithms to improve your coding skills.</p>
                            <Link to="/learn-dsa">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    style={{ backgroundColor: "black", color: "white", padding: "10px 20px", border: "2px solid orange", borderRadius: "5px", marginTop: "10px" }}
                                >
                                    Learn DSA
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default MiddleSection;
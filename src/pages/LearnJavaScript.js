import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LearnJavaScript = () => {
    const [selectedTopic, setSelectedTopic] = useState("setup");

    const topics = {
        setup: (
            <div>
                <h2>Setting Up Your Environment</h2>
                <p>To start writing JavaScript code, you need to set up your development environment. Here are the tools you need:</p>
                <ul>
                    <li>Visual Studio Code with the JavaScript extension.</li>
                    <li>Node.js for running JavaScript code outside the browser.</li>
                </ul>
                <p>Once your environment is set up, you can write your first JavaScript program:</p>
                <pre style={{ backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px' }}>
                    <code>
                        {`console.log("Hello, World!");`}
                    </code>
                </pre>
                <p>This program outputs "Hello, World!" to the console. The `console.log` function is used to display the output.</p>
            </div>
        ),
        syntax: (
            <div>
                <h2>Basic Syntax and Structure</h2>
                <p>Content for Basic Syntax and Structure...</p>
            </div>
        ),
        dataTypes: (
            <div>
                <h2>Data Types and Variables</h2>
                <p>Content for Data Types and Variables...</p>
            </div>
        ),
        controlFlow: (
            <div>
                <h2>Control Flow (if, for, while)</h2>
                <p>Content for Control Flow...</p>
            </div>
        ),
        functions: (
            <div>
                <h2>Functions</h2>
                <p>Content for Functions...</p>
            </div>
        ),
        oop: (
            <div>
                <h2>Object-Oriented Programming</h2>
                <p>Content for Object-Oriented Programming...</p>
            </div>
        ),
        collections: (
            <div>
                <h2>Collections (Arrays, Objects)</h2>
                <p>Content for Collections...</p>
            </div>
        ),
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                style={{ display: "flex" }}
            >
                <div style={{ width: "25%", height: "100vh", overflowY: "auto", padding: "20px", borderRight: "1px solid #ccc" }}>
                    <h3>Topics</h3>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                        <li style={{ margin: "10px 0" }}>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setSelectedTopic("setup")}
                                style={buttonStyle}
                            >
                                Setting Up Your Environment
                            </motion.button>
                        </li>
                        <li style={{ margin: "10px 0" }}>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setSelectedTopic("syntax")}
                                style={buttonStyle}
                            >
                                Basic Syntax and Structure
                            </motion.button>
                        </li>
                        <li style={{ margin: "10px 0" }}>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setSelectedTopic("dataTypes")}
                                style={buttonStyle}
                            >
                                Data Types and Variables
                            </motion.button>
                        </li>
                        <li style={{ margin: "10px 0" }}>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setSelectedTopic("controlFlow")}
                                style={buttonStyle}
                            >
                                Control Flow (if, for, while)
                            </motion.button>
                        </li>
                        <li style={{ margin: "10px 0" }}>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setSelectedTopic("functions")}
                                style={buttonStyle}
                            >
                                Functions
                            </motion.button>
                        </li>
                        <li style={{ margin: "10px 0" }}>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setSelectedTopic("oop")}
                                style={buttonStyle}
                            >
                                Object-Oriented Programming
                            </motion.button>
                        </li>
                        <li style={{ margin: "10px 0" }}>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setSelectedTopic("collections")}
                                style={buttonStyle}
                            >
                                Collections (Arrays, Objects)
                            </motion.button>
                        </li>
                    </ul>
                </div>
                <div style={{ width: "75%", padding: "20px" }}>
                    {topics[selectedTopic]}
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

const buttonStyle = {
    background: "linear-gradient(135deg, #FFA500, #FF8C00)", // Orange gradient
    border: "none",
    color: "white",
    padding: "15px 20px",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "16px",
    width: "100%",
    textAlign: "left",
    transition: "background 0.3s ease",
};

export default LearnJavaScript;

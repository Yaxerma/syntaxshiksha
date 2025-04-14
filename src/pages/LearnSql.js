import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LearnSQL = () => {
    const [selectedTopic, setSelectedTopic] = useState("setup");

    const topics = {
        setup: (
            <div>
                <h2>Setting Up Your Environment</h2>
                <p>To start writing SQL queries, you need to set up your development environment. Here are the tools you need:</p>
                <ul>
                    <li>SQL Server Management Studio (SSMS) or any other SQL client.</li>
                    <li>A database server like MySQL, PostgreSQL, or SQL Server.</li>
                </ul>
                <p>Once your environment is set up, you can write your first SQL query:</p>
                <pre style={{ backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px' }}>
                    <code>
                        {`SELECT 'Hello, World!';`}
                    </code>
                </pre>
                <p>This query outputs "Hello, World!" to the result set. The `SELECT` statement is used to retrieve data from the database.</p>
            </div>
        ),
        basics: (
            <div>
                <h2>Basic SQL Commands</h2>
                <p>Content for Basic SQL Commands...</p>
            </div>
        ),
        dataTypes: (
            <div>
                <h2>Data Types</h2>
                <p>Content for Data Types...</p>
            </div>
        ),
        queries: (
            <div>
                <h2>Writing Queries</h2>
                <p>Content for Writing Queries...</p>
            </div>
        ),
        joins: (
            <div>
                <h2>Joins</h2>
                <p>Content for Joins...</p>
            </div>
        ),
        functions: (
            <div>
                <h2>Functions</h2>
                <p>Content for Functions...</p>
            </div>
        ),
        transactions: (
            <div>
                <h2>Transactions</h2>
                <p>Content for Transactions...</p>
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
                                onClick={() => setSelectedTopic("basics")}
                                style={buttonStyle}
                            >
                                Basic SQL Commands
                            </motion.button>
                        </li>
                        <li style={{ margin: "10px 0" }}>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setSelectedTopic("dataTypes")}
                                style={buttonStyle}
                            >
                                Data Types
                            </motion.button>
                        </li>
                        <li style={{ margin: "10px 0" }}>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setSelectedTopic("queries")}
                                style={buttonStyle}
                            >
                                Writing Queries
                            </motion.button>
                        </li>
                        <li style={{ margin: "10px 0" }}>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setSelectedTopic("joins")}
                                style={buttonStyle}
                            >
                                Joins
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
                                onClick={() => setSelectedTopic("transactions")}
                                style={buttonStyle}
                            >
                                Transactions
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
    background: "linear-gradient(135deg, #FFA500, #FF8C00)",
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

export default LearnSQL;

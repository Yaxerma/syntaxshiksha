import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { motion } from "framer-motion";
import LearnCpp from "./pages/LearnCpp";
import LearnJava from "./pages/LearnJava";
import LearnJs from "./pages/LearnJavaScript";
import LearnPython from "./pages/Learnpython";
import LearnPhp from "./pages/LearnPhp";
import LearnSql from "./pages/LearnSql";
import Mern from "./components/PaidCourses/Mern";
import Dsa from "./components/PaidCourses/Dsa";
import MiddleSection from "./components/MiddleSection";
import Notes from "./components/PaidCourses/Notes/NotesSection";
import Login from "./components/LoginPage/Login";
import Cart from "./pages/Cart";
import chillGuyImage from './chillguy.jpg'
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';



const TopBar = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", backgroundColor: "white", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", color: "orange", fontWeight: "bold", fontSize: "30px" }}>
        &lt;/&gt; SyntaxShiksha.in
      </div>

      {/* Navigation Links */}
      <div>
        <Link to="/" style={{ margin: "0 20px", color: "black", textDecoration: "none", fontSize: "18px" }}>Home</Link>
        <Link to="/learn-" style={{ margin: "0 20px", color: "black", textDecoration: "none", fontSize: "18px" }}>Paid Courses</Link>
        <Link to="/notes" style={{ margin: "0 20px", color: "black", textDecoration: "none", fontSize: "18px" }}>Notes</Link>
        <Link to="/blogs" style={{ margin: "0 20px", color: "black", textDecoration: "none", fontSize: "18px" }}>Blogs</Link>
        <Link to="/contact" style={{ margin: "0 20px", color: "black", textDecoration: "none", fontSize: "18px" }}>Contact us</Link>
      </div>

      {/* Buttons */}
      <div>
        <Link to="/login">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ backgroundColor: "orange", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", marginRight: "10px", fontSize: "18px" }}
          >
            Login
          </motion.button>
        </Link>
        <Link to="/signup">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ backgroundColor: "orange", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", fontSize: "18px" }}
          >
            Signup
          </motion.button>
        </Link>
      </div>
    </nav>
  );
};

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ textAlign: "center", padding: "20px 20px" }}
    >
      <motion.div
        className="summary-section"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start", // Changed to flex-start to push content to left
          backgroundImage: `url(${chillGuyImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center 20%",
          padding: "50px",
          borderRadius: "10px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          height: "600px",
          minHeight: "100%",
        }}
      >
        <div style={{
          textAlign: "left", // Changed to left alignment
          color: "white",
          textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
          paddingLeft: "50px", // Added left padding for spacing
          maxWidth: "50%", // Limit width to left side
        }}>
          <motion.h1
            style={{ fontSize: "2.5rem", fontWeight: "bold" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Welcome to SyntaxShiksha
          </motion.h1>
          <motion.p
            style={{ fontSize: "1.2rem", marginTop: "20px", margin: "20px 0" }} // Changed margin to push left
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Welcome to SyntaxShiksha, where learning to code is as chill as the chill guy himself.
            No more sweating over confusing syntax—here, we break it down so smoothly that even your lazy side would approve.
            Whether you're just starting out or leveling up, our bite-sized lessons, real-world projects, and meme-infused explanations will keep you hooked. So grab a cup of coffee, relax, and let's turn those error messages into high-fives.
            <h3> Code. Compile. Chill.</h3>
          </motion.p>
        </div>
      </motion.div>
      <motion.div
        className="learn-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        style={{ marginTop: "30px" }}
      >
        <motion.h1
          style={{ fontSize: "2.5rem", fontWeight: "bold" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Learn to Code
        </motion.h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "30px", marginTop: "30px" }}>
          <Link to="/learn-cpp">
            <motion.button
              whileHover={{ scale: 1.1 }}
              style={{ backgroundColor: "orange", color: "white", padding: "20px", border: "none", borderRadius: "5px", fontSize: "1rem", height: "100px", width: "100%" }}
            >
              Learn C++
            </motion.button>
          </Link>
          <Link to="/learn-java">
            <motion.button
              whileHover={{ scale: 1.1 }}
              style={{ backgroundColor: "orange", color: "white", padding: "20px", border: "none", borderRadius: "5px", fontSize: "1rem", height: "100px", width: "100%" }}
            >
              Learn Java
            </motion.button>
          </Link>
          <Link to="/learn-js">
            <motion.button
              whileHover={{ scale: 1.1 }}
              style={{ backgroundColor: "orange", color: "white", padding: "20px", border: "none", borderRadius: "5px", fontSize: "1rem", height: "100px", width: "100%" }}
            >
              Learn JavaScript
            </motion.button>
          </Link>
          <Link to="/learn-python">
            <motion.button
              whileHover={{ scale: 1.1 }}
              style={{ backgroundColor: "orange", color: "white", padding: "20px", border: "none", borderRadius: "5px", fontSize: "1rem", height: "100px", width: "100%" }}
            >
              Learn Python
            </motion.button>
          </Link>
          <Link to="/learn-php">
            <motion.button
              whileHover={{ scale: 1.1 }}
              style={{ backgroundColor: "orange", color: "white", padding: "20px", border: "none", borderRadius: "5px", fontSize: "1rem", height: "100px", width: "100%" }}
            >
              Learn PHP
            </motion.button>
          </Link>
          <Link to="/learn-sql">
            <motion.button
              whileHover={{ scale: 1.1 }}
              style={{ backgroundColor: "orange", color: "white", padding: "20px", border: "none", borderRadius: "5px", fontSize: "1rem", height: "100px", width: "100%" }}
            >
              Learn SQL
            </motion.button>
          </Link>
        </div>
      </motion.div>
      <MiddleSection />

      <motion.div
        className="testimonials-section"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ marginTop: "30px", backgroundColor: "#f9f9f9", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
      >
        <motion.h1
          style={{ fontSize: "2.5rem", fontWeight: "bold" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Testimonials
        </motion.h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "20px", marginTop: "20px" }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
          >
            <p>"ma</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
          >
            <p>"The courses are well-structured and easy to follow." - Jane Smith</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
          >
            <p>"I love the interactive exercises and projects." - Alice Johnson</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
          >
            <p>"Great platform for both beginners and advanced learners." - Bob Brown</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
          >
            <p>"The support from the community is amazing." - Charlie Davis</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const App = () => {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn-cpp" element={<LearnCpp />} />
        <Route path="/learn-java" element={<LearnJava />} />
        <Route path="/learn-js" element={<LearnJs />} />
        <Route path="/learn-python" element={<LearnPython />} />
        <Route path="/learn-php" element={<LearnPhp />} />
        <Route path="/learn-sql" element={<LearnSql />} />
        <Route path="/learn-mern" element={<Mern />} />
        <Route path="/learn-dsa" element={<Dsa />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
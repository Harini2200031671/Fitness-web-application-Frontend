import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const styles = {
    homeContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "linear-gradient(135deg, #ff8a8a, #ffdbdb)",
      minHeight: "100vh",
      padding: "50px",
      fontFamily: "Arial, sans-serif",
    },
    textSection: {
      maxWidth: "50%",
      padding: "20px",
    },
    title: {
      fontSize: "3.5rem",
      fontWeight: "bold",
      color: "#333",
    },
    highlightText: {
      color: "#ff3366",
    },
    description: {
      fontSize: "1.1rem",
      color: "#555",
      marginTop: "10px",
      lineHeight: "1.5",
    },
    learnMoreBtn: {
      display: "inline-block",
      marginTop: "20px",
      padding: "12px 24px",
      background: "#ff3366",
      color: "#fff",
      border: "none",
      fontSize: "1rem",
      fontWeight: "bold",
      cursor: "pointer",
      borderRadius: "20px",
      transition: "0.3s ease",
      textDecoration: "none",
    },
    imageSection: {
      maxWidth: "50%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    logoImage: {
      width: "90%",
      marginTop: "20px",
    },
  };

  return (
    <div style={styles.homeContainer}>
      {/* LEFT SIDE - TEXT */}
      <div style={styles.textSection}>
        <h1 style={styles.title}>
          FITNESS <span style={styles.highlightText}>TRACKING APP</span>
        </h1>
        <p style={styles.description}>
          Achieve your fitness goals with real-time tracking, expert guidance,
          and personalized workout plans.
        </p>
        <button
          style={styles.learnMoreBtn}
          onClick={() => navigate("/learn-more")}
        >
          Learn More →
        </button>
      </div>

      {/* RIGHT SIDE - IMAGES */}
      <div style={styles.imageSection}>
        <img src="/fitness-logo.png" alt="Fitness Logo" style={styles.logoImage} />
      </div>
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const Profile = () => {
  const [username, setUsername] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [fitnessGoal, setFitnessGoal] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [calories, setCalories] = useState(null);
  const [weightProgress] = useState([62, 61.5, 61, 60.5, 60]);
  const [bmi, setBmi] = useState(null);
  const [workoutStreak] = useState(5);
  const [monthlyStats] = useState([300, 400, 350, 500, 600, 550, 620]);
  const [darkTheme, setDarkTheme] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [isWorkoutStarted, setIsWorkoutStarted] = useState(false);
  const [workoutTime, setWorkoutTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const fetchUsername = async () => {
      const mockFetchedName = "Harini";
      setUsername(mockFetchedName);
    };
    fetchUsername();
  }, []);

  useEffect(() => {
    let timer;
    if (isWorkoutStarted) {
      timer = setInterval(() => {
        setWorkoutTime((prev) => prev + 1);
      }, 1000);
      setIntervalId(timer);
    }
    return () => clearInterval(timer);
  }, [isWorkoutStarted]);

  const stopWorkout = () => {
    clearInterval(intervalId);
    setIsWorkoutStarted(false);
    setWorkoutTime(0);
  };

  const calculateCalories = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);

    if (w && h && a && gender) {
      let bmr = 10 * w + 6.25 * h - 5 * a;
      bmr += gender === "male" ? 5 : gender === "female" ? -161 : -100;
      const totalCalories = Math.round(bmr * 1.55);
      setCalories(totalCalories);
      const bmiValue = (w / ((h / 100) ** 2)).toFixed(1);
      setBmi(bmiValue);
    } else {
      alert("Please enter all fields including gender.");
    }
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const toggleTheme = () => setDarkTheme(!darkTheme);
  const toggleEditMode = () => setEditMode(!editMode);

  const getFitnessLevel = () => {
    if (workoutStreak >= 7 && bmi && bmi < 25) return "💪 Beast Mode";
    if (workoutStreak >= 4) return "🚀 Intermediate";
    return "🌱 Beginner";
  };

  return (
    <div style={{ ...pageLayout, backgroundColor: darkTheme ? "#222" : "#fff", color: darkTheme ? "#fff" : "#000" }}>
      <div style={profileBox}>
        <h2>👋 Welcome, {username || "Guest"}!</h2>

        <div style={picContainer}>
          {profilePic ? (
            <img src={profilePic} alt="Profile" style={profileImageStyle} />
          ) : (
            <div style={defaultAvatar}>🧍</div>
          )}
          <input type="file" accept="image/*" onChange={handleProfilePicChange} />
        </div>

        <div>
          <label><strong>🎯 Fitness Goal:</strong></label>
          <select value={fitnessGoal} onChange={(e) => setFitnessGoal(e.target.value)} style={inputStyle}>
            <option value="">Select your goal</option>
            <option value="Lose Weight">Lose Weight</option>
            <option value="Build Muscle">Build Muscle</option>
            <option value="Stay Fit">Stay Fit</option>
          </select>
        </div>

        <div style={{ marginTop: "15px" }}>
          <label><strong>🚻 Gender:</strong></label>
          <div style={genderContainer}>
            {["male", "female", "other"].map((g) => (
              <label key={g}>
                <input
                  type="radio"
                  value={g}
                  checked={gender === g}
                  onChange={(e) => setGender(e.target.value)}
                />{" "}
                {g.charAt(0).toUpperCase() + g.slice(1)}
              </label>
            ))}
          </div>
        </div>

        <h3>🔥 Calorie Burn Recommendation</h3>
        <input type="number" placeholder="Age (years)" value={age} onChange={(e) => setAge(e.target.value)} style={inputStyle} />
        <input type="number" placeholder="Weight (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} style={inputStyle} />
        <input type="number" placeholder="Height (cm)" value={height} onChange={(e) => setHeight(e.target.value)} style={inputStyle} />
        <button onClick={calculateCalories} style={buttonStyle}>Calculate</button>

        {calories && <p style={resultText}>You should burn approximately <strong>{calories}</strong> calories per day!</p>}
      </div>

      <div style={panelsWithBadgeContainer}>
        <div style={leftPanel}>
          <div style={boxStyle}>
            <h4>📉 Weight Progress</h4>
            <Line
              data={{
                labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
                datasets: [
                  {
                    label: "Weight (kg)",
                    data: weightProgress,
                    borderColor: "rgb(225, 67, 106)",
                    backgroundColor: "rgb(139, 64, 186)",
                    tension: 0.3,
                  },
                ],
              }}
              options={{ responsive: true, plugins: { legend: { display: false } } }}
            />
          </div>

          <div style={boxStyle}><h4>🔥 Workout Streak</h4><p>You’ve worked out for <strong>{workoutStreak}</strong> days in a row! 💪</p></div>

          <div style={boxStyle}><h4>📊 BMI Progress</h4>{bmi ? (<p>Your BMI is <strong>{bmi}</strong> ({bmi < 18.5 ? "Underweight" : bmi < 25 ? "Normal" : "Overweight"})</p>) : (<p>Calculate calories to see your BMI.</p>)}</div>

          <div style={boxStyle}><h4>📆 Monthly Improvement</h4><Line data={{ labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7"], datasets: [{ label: "Calories Burned", data: monthlyStats, borderColor: "#8a2be2", backgroundColor: "#eee0ff", tension: 0.3 }] }} options={{ responsive: true, plugins: { legend: { display: false } } }} /></div>

          <div style={boxStyle}><h4>📅 Schedule / Reminders</h4><ul style={{ paddingLeft: "20px", textAlign: "left" }}><li>🏋️‍♀️ Next Workout: Full Body – <strong>Tomorrow 7 AM</strong></li><li>⏰ Daily Reminder: Drink 2L of water 💧</li><li>🛌 Rest Day: <strong>Sunday</strong> – Recovery & Stretch</li></ul></div>
        </div>

        <div style={centerBadgeBox}>
          <h3>📦 Fitness Level</h3>
          <div style={badgeLevelStyle}>{getFitnessLevel()}</div>

          {/* ⏱️ Quick Start Workout */}
          <div style={{ marginTop: "30px" }}>
            <h4>⏱️ Quick Start Workout</h4>
            {!isWorkoutStarted ? (
              <button onClick={() => setIsWorkoutStarted(true)} style={buttonStyle}>Start Workout</button>
            ) : (
              <>
                <p>Workout Time: <strong>{workoutTime}s</strong></p>
                <button onClick={stopWorkout} style={{ ...buttonStyle, backgroundColor: " rgb(0, 0, 0)" }}>Stop Workout</button>
              </>
            )}
          </div>
        </div>

        <div style={rightPanel}>
          <div style={boxStyle}>
            <h4>🧠 Motivation</h4>
            <p style={{ fontStyle: "italic" }}>“Push yourself, because no one else is going to do it for you.” 💥</p>
            <div style={{ marginTop: "15px" }}>
              <h5>🏅 Achievements</h5>
              <div style={badgeContainer}>
                <div style={badgeStyle}>🔥</div>
                <div style={badgeStyle}>🏋️‍♀️</div>
                <div style={badgeStyle}>⏱️</div>
              </div>
              <p style={{ marginTop: "10px" }}>3 Badges Earned</p>
            </div>
            <div style={{ marginTop: "20px" }}><p><strong>🏆 Leaderboard Rank:</strong> #7 in your group</p></div>
          </div>

          <div style={boxStyle}>
            <h4>🎛️Settings</h4>
            <ul style={{ paddingLeft: "20px", textAlign: "left" }}>
              <li style={{ cursor: "pointer" }} onClick={toggleTheme}>🌓 Theme Toggle: {darkTheme ? "Dark" : "Light"}</li>
              <li style={{ cursor: "pointer" }} onClick={toggleEditMode}>✏️ {editMode ? "Save Profile" : "Edit Profile"}</li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  );
};

// Style constants
const pageLayout = { 
  display: "flex", 
  flexDirection: "column", 
  padding: "20px" , 
  backgroundImage: "url('/back1.png')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};
const panelsWithBadgeContainer = { 
  display: "flex", 
  justifyContent: "space-between", 
  gap: "20px",
   alignItems: "flex-start" 
  };
const leftPanel = { 
  width: "30%", 
  maxHeight: "calc(100vh - 100px)", 
  overflowY: "auto" 
};
const rightPanel = { 
  width: "30%", 
  maxHeight: "calc(100vh - 100px)", 
  overflowY: "auto" 
};
// const centerBadgeBox = { 
//   width: "20%", 
//   background: "rgb(245, 237, 189)", 
//   padding: "20px", 
//   textAlign: "center", 
//   borderRadius: "10px", 
//   boxShadow: "0 2px 10px rgb(5, 4, 4)",
//    marginTop: "20px"
//   };

const centerBadgeBox = {
  width: "20%",
  background: "rgba(245, 237, 189, 0.3)", // semi-transparent yellow tint
  padding: "20px",
  textAlign: "center",
  borderRadius: "15px",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.2)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)", // Safari support
  border: "1px solid rgba(255, 255, 255, 0.18)",
  marginTop: "20px"
};


const badgeLevelStyle = { 
  fontSize: "24px", 
  fontWeight: "bold",
   marginTop: "15px",
    background: "#fff", 
    padding: "10px", 
    borderRadius: "10px", 
    boxShadow: "0 1px 4px rgba(8, 7, 7, 0.1)"
   };
// const boxStyle = {
//    backgroundColor: "rgb(245, 237, 189)", 
//    border: "1px solid #ddd",
//     padding: "15px",
//      borderRadius: "10px", 
//      marginBottom: "20px",
//       boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
//      };

const boxStyle = {
  background: "rgba(255, 255, 255, 0.2)", // translucent background
  border: "1px solid rgba(255, 255, 255, 0.18)",
  padding: "15px",
  borderRadius: "15px",
  marginBottom: "20px",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.2)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)", // for Safari
};


// const profileBox = { background: "rgb(245, 237, 189)", 
//   padding: "20px", 
//   borderRadius: "5px", 
//   width: "60%", 
//   justifyContent: "center",
//    marginBottom: "20px" ,
//    margin: "0 auto"
//   };

const profileBox = {
  background: "rgba(255, 255, 255, 0.2)",  // semi-transparent white
  padding: "20px",
  borderRadius: "15px",
  width: "60%",
  marginBottom: "20px",
  margin: "0 auto",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)", // for Safari
  border: "1px solid rgba(255, 255, 255, 0.18)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};


const inputStyle = { 
  display: "block", 
   margin: "10px auto", 
   padding: "10px", 
   width: "80%", 
   borderRadius: "5px",
    border: "1px solid #ccc"
   };
const buttonStyle = {
   padding: "10px 20px",
    backgroundColor: "rgb(2, 1, 1)",
     color: "white", 
     border: "none",
      borderRadius: "5px",
       cursor: "pointer",
        marginTop: "10px"
       };
const resultText = { 
  marginTop: "15px", 
  fontSize: "18px"
 };
const profileImageStyle = {
   width: "100px",
    height: "100px",
     borderRadius: "50%",
      objectFit: "cover",
       marginBottom: "10px"
       };
const defaultAvatar = {
   width: "100px", 
   height: "100px",
    borderRadius: "50%", 
    backgroundColor: "#ccc",
     fontSize: "50px", 
     lineHeight: "100px",
      margin: "0 auto 10px"
     };
const picContainer = { marginBottom: "20px" };
const genderContainer = {
   display: "flex", 
   justifyContent: "center",
    gap: "20px",
     marginTop: "10px" 
    };
const badgeContainer = {
   display: "flex", 
   gap: "15px",
    justifyContent: "center",
     flexWrap: "wrap", 
     marginTop: "10px"
     };
const badgeStyle = { fontSize: "40px", padding: "10px", borderRadius: "50%", backgroundColor: "#fff", boxShadow: "0 2px 5px rgba(0,0,0,0.2)" };


export default Profile;
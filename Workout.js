import React, { useState } from "react";

const workouts = [
  {
    name: "Jumping Jacks",
    video: "https://www.youtube.com/embed/UpH7rm0cYbM",
    about: {
      benefits: "Improves cardiovascular health, boosts stamina, burns calories quickly.",
      fatBurn: "Helps burn approximately 100 calories in 10 minutes.",
    },
  },
  {
    name: "Squats",
    video: "https://www.youtube.com/embed/aclHkVaku9U",
    about: {
      benefits: "Strengthens legs and glutes, improves core balance.",
      fatBurn: "Can burn about 80-100 calories per 15 minutes.",
    },
  },
  {
    name: "Yoga Stretch",
    video: "https://www.youtube.com/embed/v7AYKMP6rOE",
    about: {
      benefits: "Enhances flexibility and reduces stress.",
      fatBurn: "Burns fewer calories, great for toning and calming.",
    },
  },
  {
    name: "Plank",
    video: "https://www.youtube.com/embed/pSHjTRCQxIw",
    about: {
      benefits: "Tightens core muscles, improves posture.",
      fatBurn: "Burns 2-5 calories per minute but boosts metabolism long-term.",
    },
  },
  { name: "High Knees", 
    video: "https://www.youtube.com/embed/OAJ_J3EZkdY",
  about: {
    benefits: "Boosts heart rate and improves cardiovascular endurance ,Strengthens leg muscles and core ,Great for warming up or as part of a HIIT workout ,Enhances coordination and agility.",
    fatBurn: "Burns 8–14 calories per minute, depending on intensity and body weight .",
  },
  
  },
  { name: "Push Ups", 
    video: "https://www.youtube.com/embed/_l3ySVKYVJ8",
    about: {
      benefits: " Builds upper body strength (chest, shoulders, triceps),Engages core muscles and improves stability,Enhances muscle endurance and posture, Enhances muscle endurance and posture.",
      fatBurn: "Burns 7–10 calories per minute depending on speed and body weight.",
    },
  },
  { name: "Lunges",
     video: "https://www.youtube.com/embed/QOVaHwm-Q6U" ,
     about: {
      benefits: "Strengthens quads, hamstrings, glutes, and coreImproves balance, flexibility, and coordination Great for toning lower body muscles,Helps correct muscle imbalances between legs.",
      fatBurn: "Burns around 6–9 calories per minute, depending on pace and body weight.",
     },
    },
  { name: "Mountain Climbers",
     video: "https://www.youtube.com/embed/cnyTQDSE884", 
     about: {
      benefits: "Full-body workout: strengthens core, shoulders, arms, and legs Excellent for cardiovascular endurance Boosts agility and coordination Helps improve balance and posture Great for HIIT routines",
      fatBurn: "Burns around 8–10 calories per minute, Due to its high-intensity nature, it elevates heart rate quickly and helps melt fat fast Supports afterburn effect (EPOC), continuing to burn calories even after the workout ends.",
     },
    
    },
  { name: "Bicycle Crunches",
     video: "https://www.youtube.com/embed/Iwyvozckjak" ,
    about: {
      benefits: "Targets multiple core muscles: rectus abdominis, obliques, and transverse abdominis,Enhances core strength and stability Improves muscle coordination and balance, Helps tone the waistline Supports better posture and lower back strength",
      fatBurn: "Burns approximately 100–120 calories in 10 minutes,One of the most effective ab exercises for engaging the entire core,Contributes to belly fat reduction when combined with a proper diet and cardio",
    },
    
    },
  { name: "Side Plank", 
    video: "https://www.youtube.com/embed/K2VljzCC16g" ,
    about: {
      benefits: "Strengthens obliques, shoulders, and hips Improves core stability and spinal alignment Enhances balance and posture Reduces risk of back injuries by building deep core muscles Great for low-impact strengthening",
      fatBurn: "Burns around 3–6 calories per minute, depending on intensity and muscle engagement",
    },
  },
  { name: "Burpees",
     video: "https://www.youtube.com/embed/dZgVxmf6jkA",
     about: {
      benefits: "Full-body workout engaging arms, chest, quads, glutes, hamstrings, and core Builds strength, endurance, and cardiovascular fitness Boosts agility and coordination Increases explosiveness and overall stamina No equipment needed – perfect for home workouts ",
      fatBurn: "Burns approximately 10–15 calories per minute High-intensity movement spikes your heart rate, promoting afterburn effect (calories burned even after the workout)",
    },
    },
  { name: "Arm Circles", 
    video: "https://www.youtube.com/embed/140RTNMciH8",
    about: {
      benefits: "Warms up and tones shoulders, biceps, and triceps Improves shoulder mobility and range of motion Helps prevent injuries by activating upper body muscles Enhances posture and upper body endurance Simple and beginner-friendly – no equipment needed",
      fatBurn: "Burns about 50–70 calories in 10–15 minutes (depending on speed/intensity), Great as part of a warm-up or active rest in high-intensity workouts, Helps sculpt arms when done consistently",
    },
  },
  { name: "Russian Twists",
     video: "https://www.youtube.com/embed/wkD8rjkodUI" ,
     about: {
      benefits: "Targets obliques (side abs) and core muscles,Improves balance and rotational strength,Great for torso definition and waist shaping,Strengthens the lower back and helps with posture ",
      fatBurn: "Burns around 10–15 calories per minute (varies with speed/intensity),Excellent for ab shredding when part of a circuit,Increases caloric afterburn if done with weights or fast-paced",
    },
    },
  { name: "Leg Raises", 
    video: "https://www.youtube.com/embed/JB2oyawG9KI" ,
    about: {
      benefits: "Focuses on lower abs, hip flexors, and lower back,Helps strengthen the core and pelvic muscles,Great for improving muscle control and stability,Reduces risk of lower back injuries when done with proper form",
      fatBurn: "Burns about 5–8 calories per minute, higher when done slowly and with control,Builds lean muscle in the core, aiding in overall fat reduction,Often included in toning and core-building routines",
    },
  },
  { name: "Wall Sit",
     video: "https://www.youtube.com/embed/-cdph8hv0O0",
     about: {
      benefits: "Strengthens quads, glutes, and hamstrings,Improves endurance and muscle tone in lower body ,Enhances core engagement and mental toughness ,Low-impact, making it knee-friendly.",
      fatBurn: "Burns around 5–7 calories per minute,The longer the hold, the more muscle endurance and calorie burn,Builds lean muscle → better resting metabolism.",
    },
    },
  { name: "Flutter Kicks",
     video: "https://www.youtube.com/embed/bfMYh_-o8qA" ,
     about: {
      benefits: "Targets lower abs, hip flexors, and core stability,Helps with abdominal definition and lower belly strength  Improves leg coordination and core control",
      fatBurn: "Burns approximately 6–10 calories per minute,When done fast-paced in a circuit, boosts fat burn and heart rate,Tones the midsection, especially the lower abs.",
    },
    },
  { name: "Bear Crawls",
     video: "https://www.youtube.com/embed/Gb2e9edK8a4",
     about: {
      benefits: "Full-body workout – hits shoulders, core, legs, and glutes,Improves coordination, agility, and core strength,Builds functional strength and cardio endurance. ",
      fatBurn: "Burns about 10–15 calories per minute, High-intensity movement great for HIIT and fat loss,Activates multiple muscle groups for maximum calorie burn. ",
    },
    },
  { name: "Side Lunges",
     video: "https://www.youtube.com/embed/RtjEwRa12XE",
     about: {
      benefits: "Strengthens inner and outer thighs, glutes, and quads, Improves balance, stability, and hip mobility Great for toning and shaping the legs Reduces risk of injury by improving lateral movement strength",
      fatBurn: "Burns around 6–10 calories per minute,Engages large leg muscles, contributing to increased fat loss,More effective in toning and sculpting than just static holds",
    },
    },
  { name: "Crab Walk", 
    video: "https://www.youtube.com/embed/OLTepDCT49M",
    about: {
      benefits: "Targets triceps, shoulders, core, hamstrings, and glutes Improves coordination, mobility, and stability Boosts upper and lower body strength Fun and functional movement for full-body activation",
      fatBurn: "Burns around 7–12 calories per minute,Great for HIIT-style circuits and strength + cardio combo,Keeps heart rate up while building muscle endurance",
    },
  },
  { name: "Inchworms",
     video: "https://www.youtube.com/embed/H_YsTBL4Q-Q" ,
     about: {
      benefits: "Works core, shoulders, arms, and hamstrings,Enhances flexibility and mobility in posterior chain,Excellent warm-up and core-strengthening move ,Encourages control, balance, and mind-muscle connection.",
      fatBurn: "Burns approximately 5–8 calories per minute,Best used in circuit training to raise heart rate,Effective for fat burning when performed in dynamic sets",
    },
    },
  { name: "Knee Push Ups",
     video: "https://www.youtube.com/embed/1nAsgpufzhc" ,
     about: {
      benefits: "Great for beginners building upper body strength,Targets chest, shoulders, triceps, and core Improves muscle tone and endurance Less strain on the lower back and shoulders than standard push-ups",
      fatBurn: "Burns about 4–7 calories per minute, A solid option for strength training with light cardio benefits,Helps build muscle, which improves resting metabolic rate",
    },
    },
  { name: "Bird Dog",
     video: "https://www.youtube.com/embed/wiFNA3sqjCA",
     about: {
      benefits: "Strengthens core, lower back, glutes, and shoulders,Improves balance, posture, and stability Excellent for spinal alignment and preventing back pain Great low-impact option for full-body control",
      fatBurn: "Burns 3–6 calories per minute,More effective as a toning and rehab move,Can be used in a core circuit for fat burn boost",
    },
    },
  { name: "Jump Squats", 
    video: "https://www.youtube.com/embed/U4s4mEQ5VqU" ,
    about: {
      benefits: "Builds leg power, strength, and explosiveness,Tones quads, glutes, hamstrings, and calves Great for cardio, agility, and fat loss Increases heart rate rapidly, making it ideal for HIIT",
      fatBurn: "Burns 10–14 calories per minute 🔥,High-impact, full-body fat burning move,Boosts metabolism for longer calorie burn post-workout",
    },
  },
  { name: "Reverse Crunches",
     video: "https://www.youtube.com/embed/DqmFSpYosrY",
     about: {
      benefits: "Focuses on the lower abdominal muscles,Helps flatten the stomach and strengthen the core,Safer on the spine than traditional crunches,Safer on the spine than traditional crunches,Improves pelvic control and core endurance",
      fatBurn: "Burns 5–8 calories per minute,Most effective for toning and core definition,When combined with cardio, contributes to overall fat reduction",
    },
   },
  { name: "Scissor Kicks",
     video: "https://www.youtube.com/embed/aqMfWavH2X4" ,
     about: {
      benefits: "Strengthens lower abs and hip flexors,Improves core endurance,enhances coordination and control",
      fatBurn: "Burns approximately 50–70 calories per 10 minutes,Great for toning lower belly and tightening the midsection",
    },
  },
  { name: "Triceps Dips",
     video: "https://www.youtube.com/embed/0326dy_-CzM" ,
     about: {
      benefits: "Targets triceps, shoulders, and chest,Enhances upper body strength,Improves muscle definition in arms",
      fatBurn: "Burns around 75–100 calories in 15 minutes,Builds lean muscle which boosts resting metabolism",
    },
  },
  { name: "Side Kicks", 
    video: "https://www.youtube.com/embed/isfOg50BElc" ,
    about: {
      benefits: "Works glutes, hips, and thighs,Improves balance, coordination, and flexibility Tones the lower body effectively",
      fatBurn: "Can burn up to 100 calories in 10–15 minutes depending on intensit,Engages core and legs simultaneously for better burn",
    },
  },
  { name: "Superman",
     video: "https://www.youtube.com/embed/z6PJMT2y8GQ",
     about: {
      benefits: "Strengthens lower back, glutes, and shoulders,Helps with posture and spine stability,Reduces risk of lower back pain",
      fatBurn: "Burns about 50–60 calories per 10 minutes,Activates core and lower body for gentle toning",
    },
   },
  { name: "Windshield Wipers",
     video: "https://www.youtube.com/embed/2wyDhxkTLsE",
     about: {
      benefits: "Targets the obliques and lower abs,Improves core strength and rotational stability,Enhances flexibility in the lower back and hips",
      fatBurn: "Burns around 60–80 calories per 10 minutes,Great for sculpting the waistline and tightening the core",
    },
   },
  { name: "Jump Rope", 
    video: "https://www.youtube.com/embed/u3zgHI8QnqE",
    about: {
      benefits: "Boosts cardiovascular endurance and coordination,Strengthens legs, core, and shoulders,Improves agility and burns fat fast",
      fatBurn: "Burns around 200–300 calories in 15 minutes 🔥,One of the most efficient full-body fat-burning workouts",
    },
   },
  { name: "Marching", 
    video: "https://www.youtube.com/embed/V55s_GcJN_A" ,
    about: {
      benefits: "🚶‍♀️Low-impact cardio, great for beginners,Improves leg strength and posture,Enhances blood circulation and heart health",
      fatBurn: "Burns around 80–100 calories in 20 minutes,Ideal for light warm-ups or cooldowns",
    },
  },
  { name: "Toe Touch", 
    video: "https://www.youtube.com/embed/9iEI95-eZWk" ,
    about: {
      benefits: "Increases hamstring and lower back flexibility,Strengthens the abs and improves posture,Enhances range of motion and balance",
      fatBurn: "Burns approximately 50–70 calories in 10 minutes,Great for toning abs and stretching at the same time",
    },
  },
  { name: "Standing Obliques", 
    video: "https://www.youtube.com/embed/DLZX35ZDtbA" ,
    about: {
      benefits: "🤸‍♀️Targets the side abs (obliques) and core,Improves balance and coordination Great for toning the waist without floor work",
      fatBurn: "Burns about 50–70 calories in 10 minutes,Helps trim the love handles with consistent practice",
    },
  },
  { name: "Chair Dips", 
    video: "https://www.youtube.com/embed/6kALZikXxLc",
    about: {
      benefits: "Strengthens triceps, shoulders, and chest,Tones the upper arms and improves shoulder mobility Can be done easily at home with a sturdy chair",
      fatBurn: "Burns around 80–100 calories in 10–15 minutes,Focuses more on toning than heavy calorie burn",
    },
   },
  { name: "Step Ups",
     video: "https://www.youtube.com/embed/d4p6Jy6KUO4",
     about: {
      benefits: "Strengthens legs, glutes, and calves Improves balance and lower-body endurance,Simulates stair climbing — great for cardiovascular health",
      fatBurn: "Burns approximately 150–200 calories in 20 minutes,Excellent for fat loss and lower-body toning",
    },
   },
  { name: "Dead Bug",
     video: "https://www.youtube.com/embed/4pLUleLdwY4",
     about: {
      benefits: "Builds core stability and spinal alignment,Low impact but very effective for abs and coordination,Strengthens deep abdominal muscles",
      fatBurn: "Burns around 60–80 calories in 15 minutes,Helps tone and strengthen without strain",
    },
   },
  { name: "Hip Circles", 
    video: "https://www.youtube.com/embed/2pLT-olgUJs",
    about: {
      benefits: "Increases hip flexibility and mobility,Loosens tight hip joints — great for warm-up or cooldown,Loosens tight hip joints — great for warm-up or cooldown Engages core muscles gently",
      fatBurn: "Burns around 50–70 calories in 10 minutes,Gentle, but helpful for core activation and shaping hips",
    },
   },
  { name: "Heel Touches", 
    video: "https://www.youtube.com/embed/VnMXdc85vgA",
    about: {
      benefits: "Targets obliques and side abs,Improves core definition and stability,Great for toning the waistline",
      fatBurn: "Burns around 50–70 calories in 10 minutes,Focuses more on shaping than high fat loss",
    },
   },
  { name: "Arm Punches",
     video: "https://www.youtube.com/embed/hX2lCsfxuds" ,
     about: {
      benefits: "Strengthens arms, shoulders, and upper chest,Improves hand-eye coordination Great as a cardio warm-up",
      fatBurn: "Burns around 80–100 calories in 15 minutes Good for fat burning with high repetitions.",
    },
  },
  { name: "Wall Push Ups", 
    video: "https://www.youtube.com/embed/b01muAD0_NI" ,
    about: {
      benefits: "Gentle way to strengthen arms and chest,Suitable for beginners or injury recovery Enhances shoulder mobility",
      fatBurn: "Burns around 50–70 calories in 10–15 minutes,Toning-focused, less intense than regular push-ups.",
    },
  },
  { name: "Reverse Lunges", 
    video: "https://www.youtube.com/embed/COKYKgQ8KR0",
    about: {
      benefits: "Strengthens glutes, hamstrings, and quads,Lower impact on knees than forward lunges Improves balance and leg stability",
      fatBurn: "Burns approximately 90–120 calories in 15 minutes,Great for toning and sculpting legs",
    },
   },
  { name: "Skipping",
     video: "https://www.youtube.com/embed/76LzM0PDTDU",
     about: {
      benefits: "Full-body cardio workout,Improves coordination, endurance, and bone strength Burns fat and builds stamina",
      fatBurn: "Burns 200–300 calories in just 15–20 minutes,One of the best fat-burning exercises!",
    },
   },
  { name: "Jump Lunges",
     video: "https://www.youtube.com/embed/FKjLgOHsMGw",
     about: {
      benefits: "Tones thighs and glutes,Boosts heart rate and leg power,Enhances explosive strength and balance",
      fatBurn: "Burns around 200 calories in 20 minutes,Intense and effective for fat loss",
    },
   },
  { name: "Back Stretch",
     video: "https://www.youtube.com/embed/44eYerscDWk",
     about: {
      benefits: "Relieves tension and stiffness in the spine,Increases flexibility and posture,Promotes relaxation.",
      fatBurn: "Minimal calorie burn (around 30–50 in 15 minutes),More for mobility and recovery",
    },
   },
  { name: "Neck Stretch", 
    video: "https://www.youtube.com/embed/mERvRs47KMM" ,
    about: {
      benefits: "Reduces neck tension and stiffness,Prevents headaches caused by tight muscles,Encourages good posture",
      fatBurn: "Burns very few calories,Best for relaxation and muscle relief.",
    },
  },
  { name: "Full Body Warmup", 
    video: "https://www.youtube.com/embed/c0VxUFHdYzs",
    about: {
      benefits: "Prepares your entire body for exercise,Increases blood flow, mobility, and muscle temperature,Reduces injury risk and enhances workout performance.",
      fatBurn: "Burns about 50–100 calories in 10–15 minutes,Excellent before a workout to rev up metabolism",
    },
   },
];

const WorkoutPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAbout = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div style={styles.container}>
      <div style={styles.grid}>
        {workouts.map((workout, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.titleRow}>
              <h3>{workout.name}</h3>
              {workout.about && (
                <button style={styles.aboutBtn} onClick={() => toggleAbout(index)}>
                  {activeIndex === index ? "Hide" : "About"}
                </button>
              )}
            </div>

            {activeIndex === index && workout.about && (
              <div style={styles.aboutBox}>
                <p><strong>Benefits:</strong> {workout.about.benefits}</p>
                <p><strong>Fat Burn:</strong> {workout.about.fatBurn}</p>
              </div>
            )}

            <div style={styles.videoWrapper}>
              <iframe
                width="100%"
                height="200"
                src={workout.video}
                title={workout.name}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#ffe4ec",
    minHeight: "100vh",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "white",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  videoWrapper: {
    borderRadius: "10px",
    overflow: "hidden",
    marginTop: "10px",
  },
  titleRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },
  aboutBtn: {
    padding: "5px 10px",
    fontSize: "14px",
    backgroundColor: "#ff66a3",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  aboutBox: {
    backgroundColor: "#fff4f8",
    border: "1px solid #ffb6c1",
    borderRadius: "8px",
    padding: "10px",
    textAlign: "left",
    marginBottom: "10px",
  },
};

export default WorkoutPage;

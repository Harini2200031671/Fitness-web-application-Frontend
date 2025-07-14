import React from "react";

const LearnMore = () => {
  const styles = {
    container: {
      padding: "50px",
      fontFamily: "Arial, sans-serif",
      background: "#fff0f0",
      minHeight: "100vh",
    },
    sectionTitle: {
      fontSize: "2rem",
      color: "#ff3366",
      marginBottom: "10px",
    },
    paragraph: {
      fontSize: "1.1rem",
      lineHeight: "1.6",
      color: "#333",
      marginBottom: "20px",
    },
    list: {
      paddingLeft: "20px",
      marginBottom: "30px",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.sectionTitle}>🏁 App Overview / Introduction</h2>
      <p style={styles.paragraph}>
      Welcome to the Fitness Tracking App – your ultimate partner on the journey to a healthier, stronger, and more confident you. Whether you're just beginning your fitness adventure or already smashing goals, our app is here to help you stay consistent, stay motivated, and achieve real results.

Our app is designed to cater to everyone — from beginners who are unsure where to start, to experienced athletes looking to fine-tune their routines. With a beautifully intuitive interface and smart features, it’s never been easier to stay on track with your health goals.

One of our biggest strengths is personalization. Once you sign up, you’ll be able to set your fitness goals — whether it's weight loss, muscle gain, flexibility, or overall wellness. Based on your goals and preferences, we generate customized workout plans that are easy to follow and flexible to your schedule.

But we don’t stop there. We help you track your workouts in real time, monitor your steps, log your meals, and analyze your nutritional intake. You’ll get daily reminders, motivational tips, and smart analytics to keep you informed and inspired.

Want to visualize your progress? Our app provides clean, easy-to-read charts that show your journey over days, weeks, and months. This makes it super satisfying to see how far you’ve come!

We also believe fitness should be fun and social. Join fitness challenges, compete with friends, or just share your progress — because doing it together makes it even better.

With our anime-inspired, cheerful UI and accurate tracking features, this app is not just about fitness — it’s about enjoying the journey.

Let’s make fitness a lifestyle. Start your journey today with the Fitness Tracking App! 💪



      </p>

      <h2 style={styles.sectionTitle}>💡 Why It’s Helpful</h2>
      <p style={styles.paragraph}>
      The Fitness Tracking App is incredibly helpful because it brings structure, motivation, and clarity to your health journey. 
      Many people struggle to stay consistent with fitness goals due to a lack of guidance or accountability. 
      This app solves that by providing personalized workout plans tailored to your body type, goals, and fitness level.
       It also tracks your daily activity, including steps, calories burned, and heart rate, so you always know where you stand.
      With built-in nutrition tracking, you can monitor what you eat and how it affects your progress.
       The app helps you build healthy habits through reminders, streaks, and encouraging insights.
        Whether you're aiming to lose weight, build muscle, or maintain a balanced lifestyle, 
        the Fitness Tracking App is like having a coach in your pocket.
         Plus, the supportive community and easy-to-read progress charts make staying fit feel exciting and rewarding—not overwhelming.
       </p>

       <h2 style={styles.sectionTitle}>⚡ Quick Summary of Benefits</h2>
      <p style={styles.list}>
      <li>🎯 Personalized Plans  :
Get workout and nutrition plans tailored to your specific fitness goals and body type.</li>

<li>📊 Real-Time Tracking  : 
Monitor steps, heart rate, calories burned, and more to stay on top of your daily activity.</li>

<li>🍽️ Nutrition Logging  :
Track meals, calories, macros, and water intake to maintain a balanced diet.</li>

<li>📈 Progress Visualization  :
See your transformation with easy-to-understand graphs and analytics.</li>

<li>⏰ Daily Reminders & Schedules  :
Never miss a workout or meal with smart alerts that keep you consistent.</li>

<li>🤝 Community Motivation :
Join challenges, follow friends, and celebrate wins together.</li>

<li>📱 All-in-One Convenience  :
Everything you need for your fitness journey is in one user-friendly app.</li>

<li>🔐 Safe & Secure  :
Your data is private, protected, and used only to improve your experience.</li>


      </p>

      <h2 style={styles.sectionTitle}>🏁 App Overview </h2>
      <ul style={styles.paragraph}>
      The Fitness Tracking App is a smart, all-in-one solution designed to help users reach their health and fitness goals with ease.
       Whether you're a beginner or an experienced athlete, this app offers personalized workout plans, real-time tracking, nutrition logging,
        and progress analytics to keep you motivated and on track. With a friendly and intuitive interface, the app makes fitness simple, effective,
         and enjoyable. You can set goals, follow daily routines, monitor your achievements, and even connect with others for added motivation.
          It's more than just an app—it’s your fitness companion every step of the way.

     </ul>
    </div>
  );
};

export default LearnMore;

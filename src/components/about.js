import React from "react";
// page with info about the website
function About() {
  return (
    <section>
      <h1>About MoenyTracker</h1>
      <p>
        With this app yo can create categories with maximum spending goals and
        then add entries for each exspense connected to the catecory.
      </p>
      <p>The data is stored in a MongoDB Atlas database connected via an API created with Express.js.</p>
      <p>This site is created with React and Bootstra.</p>
      <p>This is a project by Jessica Ejelöv for the course "Programming with C# .NET" at Mid Sweden University.</p>
    </section>
  );
}
export default About;

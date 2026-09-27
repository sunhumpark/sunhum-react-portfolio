export default function About() {
  return (
    <section className="page">
      <h1>About Me</h1>

      <div className="two-col">
        <img
          src="/profile.jpg"
          alt="Sunhum Park"
          className="profile-photo"
        />

        <div>
          <h2>Sunhum Park</h2>

          <p>
            I am a Software Engineering Technician student at Centennial
            College in Toronto. I enjoy learning how front-end and back-end
            technologies work together and building applications through
            hands-on projects.
          </p>

          <p>
            My current interests include React, JavaScript, Java, C#, SQL,
            APIs, and full-stack web development. I am continuing to improve
            my programming and problem-solving skills through school projects
            and personal practice.
          </p>

          <a
            className="button"
            href="/Sunhum-Park-Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}


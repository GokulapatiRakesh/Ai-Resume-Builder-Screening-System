import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="logo">
          <div className="logo-icon">AI</div>

          <div className="logo-text">
            <h2>AI Resume</h2>
            <span>& Screening System</span>
          </div>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#about">About</a>
          <a href="#faq">FAQ</a>

          <a href="/Loginpage" className="nav-Loginpage">
            Login
          </a>

          <a href="/register" className="nav-register">
            Get Started
          </a>
        </div>
      </nav>


      {/* ================= HERO ================= */}
      <section className="hero" id="home">

        <div className="hero-background">
          <div className="glow glow-one"></div>
          <div className="glow glow-two"></div>
        </div>

        <div className="hero-content">

          <div className="hero-badge">
            <span className="live-dot"></span>
            AI-Powered Recruitment Platform
          </div>

          <h1>
            Build Better Resumes.
            <br />
            <span>Hire Smarter Talent.</span>
          </h1>

          <p>
            Create ATS-friendly resumes, analyze candidate profiles,
            match skills with jobs, and accelerate recruitment with
            intelligent AI-powered technology.
          </p>

          <div className="hero-buttons">

            <a href="/register" className="primary-btn">
              Start Building Free
              <span>→</span>
            </a>

            <a href="#how-it-works" className="secondary-btn">
              See How It Works
              <span>▶</span>
            </a>

          </div>

          <div className="hero-trust">

            <div className="trust-item">
              <strong>10K+</strong>
              <span>Resumes Created</span>
            </div>

            <div className="trust-line"></div>

            <div className="trust-item">
              <strong>5K+</strong>
              <span>Candidates Screened</span>
            </div>

            <div className="trust-line"></div>

            <div className="trust-item">
              <strong>95%</strong>
              <span>Match Accuracy</span>
            </div>

          </div>

        </div>


        {/* ================= AI DASHBOARD ================= */}
        <div className="hero-dashboard">

          <div className="dashboard-window">

            <div className="window-header">

              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="window-title">
                AI Resume Intelligence
              </div>

              <div className="window-status">
                <span></span>
                Live
              </div>

            </div>


            <div className="dashboard-body">

              <div className="dashboard-sidebar">

                <div className="side-logo">
                  AI
                </div>

                <div className="side-item active">
                  ◈
                </div>

                <div className="side-item">
                  ◫
                </div>

                <div className="side-item">
                  ◎
                </div>

                <div className="side-item">
                  ◉
                </div>

                <div className="side-item">
                  ⚙
                </div>

              </div>


              <div className="dashboard-main">

                <div className="dashboard-top">

                  <div>
                    <span>Resume Analysis</span>
                    <h3>John Anderson</h3>
                  </div>

                  <div className="analysis-status">
                    <span></span>
                    Analysis Complete
                  </div>

                </div>


                <div className="analysis-grid">

                  {/* Score */}
                  <div className="score-card">

                    <span>ATS Resume Score</span>

                    <div className="score-container">

                      <div className="score-ring">
                        <div>
                          <strong>92</strong>
                          <small>/100</small>
                        </div>
                      </div>

                    </div>

                    <div className="score-label">
                      Excellent Resume
                    </div>

                  </div>


                  {/* Skills */}
                  <div className="skills-card">

                    <div className="card-title">
                      <span>Skill Analysis</span>
                      <small>View All</small>
                    </div>

                    <div className="skill-row">
                      <div>
                        <span>Python</span>
                        <b>95%</b>
                      </div>

                      <div className="skill-progress">
                        <span style={{ width: "95%" }}></span>
                      </div>
                    </div>

                    <div className="skill-row">
                      <div>
                        <span>React.js</span>
                        <b>88%</b>
                      </div>

                      <div className="skill-progress">
                        <span style={{ width: "88%" }}></span>
                      </div>
                    </div>

                    <div className="skill-row">
                      <div>
                        <span>SQL</span>
                        <b>82%</b>
                      </div>

                      <div className="skill-progress">
                        <span style={{ width: "82%" }}></span>
                      </div>
                    </div>

                    <div className="skill-row">
                      <div>
                        <span>FastAPI</span>
                        <b>90%</b>
                      </div>

                      <div className="skill-progress">
                        <span style={{ width: "90%" }}></span>
                      </div>
                    </div>

                  </div>

                </div>


                {/* Job Match */}
                <div className="job-match-card">

                  <div className="match-header">

                    <div>
                      <span>AI Job Matching</span>
                      <h4>Backend Python Developer</h4>
                    </div>

                    <div className="match-score">
                      94%
                    </div>

                  </div>

                  <div className="match-bar">
                    <span></span>
                  </div>

                  <div className="match-details">

                    <span>
                      ✓ Skills Match
                    </span>

                    <span>
                      ✓ Experience Match
                    </span>

                    <span>
                      ✓ Education Match
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* Floating cards */}

          <div className="floating-card candidate-card">

            <div className="floating-icon">
              👤
            </div>

            <div>
              <strong>Candidate Matched</strong>
              <span>94% Job Match</span>
            </div>

            <div className="check">
              ✓
            </div>

          </div>


          <div className="floating-card ai-card">

            <div className="ai-mini-icon">
              ✦
            </div>

            <div>
              <strong>AI Analysis</strong>
              <span>Completed in 2.4s</span>
            </div>

          </div>

        </div>

      </section>


      {/* ================= TRUST SECTION ================= */}

      <section className="trusted-section">

        <p>Trusted technology for modern recruitment teams</p>

        <div className="trusted-logos">

          <span>MICROSOFT</span>
          <span>GOOGLE</span>
          <span>INFOSYS</span>
          <span>TCS</span>
          <span>ACCENTURE</span>
          <span>CAPGEMINI</span>

        </div>

      </section>


      {/* ================= FEATURES ================= */}

      <section className="features-section" id="features">

        <div className="section-heading">

          <span>POWERFUL FEATURES</span>

          <h2>
            Everything You Need to
            <br />
            <strong>Recruit Smarter</strong>
          </h2>

          <p>
            One intelligent platform for resume creation,
            candidate screening and AI-powered recruitment.
          </p>

        </div>


        <div className="features-grid">

          <div className="feature-card-large">

            <div className="feature-number">
              01
            </div>

            <div className="feature-icon-box blue-icon">
              ✦
            </div>

            <h3>AI Resume Builder</h3>

            <p>
              Build professional, ATS-friendly resumes with
              intelligent content suggestions and modern templates.
            </p>

            <div className="feature-tags">
              <span>ATS Optimized</span>
              <span>AI Suggestions</span>
            </div>

          </div>


          <div className="feature-card-large">

            <div className="feature-number">
              02
            </div>

            <div className="feature-icon-box purple-icon">
              ◎
            </div>

            <h3>AI Resume Screening</h3>

            <p>
              Automatically analyze hundreds of resumes and
              identify candidates based on skills and experience.
            </p>

            <div className="feature-tags">
              <span>AI Analysis</span>
              <span>Bulk Screening</span>
            </div>

          </div>


          <div className="feature-card-large">

            <div className="feature-number">
              03
            </div>

            <div className="feature-icon-box green-icon">
              ◈
            </div>

            <h3>Smart Job Matching</h3>

            <p>
              Match candidates with suitable job opportunities
              using intelligent skill and experience analysis.
            </p>

            <div className="feature-tags">
              <span>Skill Matching</span>
              <span>Job Fit Score</span>
            </div>

          </div>


          <div className="feature-card-large">

            <div className="feature-number">
              04
            </div>

            <div className="feature-icon-box orange-icon">
              ◉
            </div>

            <h3>Recruitment Analytics</h3>

            <p>
              Track hiring pipelines, candidate performance,
              resume scores and recruitment insights.
            </p>

            <div className="feature-tags">
              <span>Analytics</span>
              <span>Reports</span>
            </div>

          </div>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}

      <section className="how-section" id="how-it-works">

        <div className="section-heading">

          <span>HOW IT WORKS</span>

          <h2>
            Recruitment Made
            <strong>Simple</strong>
          </h2>

          <p>
            From resume creation to candidate selection,
            everything happens in one intelligent workflow.
          </p>

        </div>


        <div className="steps-container">

          <div className="step-card">

            <div className="step-number">
              01
            </div>

            <div className="step-icon">
              📄
            </div>

            <h3>Create Resume</h3>

            <p>
              Build your professional resume using
              AI-powered templates.
            </p>

          </div>


          <div className="step-line"></div>


          <div className="step-card">

            <div className="step-number">
              02
            </div>

            <div className="step-icon">
              ✦
            </div>

            <h3>AI Analysis</h3>

            <p>
              Our AI analyzes skills, experience,
              keywords and resume quality.
            </p>

          </div>


          <div className="step-line"></div>


          <div className="step-card">

            <div className="step-number">
              03
            </div>

            <div className="step-icon">
              ◎
            </div>

            <h3>Smart Matching</h3>

            <p>
              Match candidates with jobs based
              on relevant qualifications.
            </p>

          </div>


          <div className="step-line"></div>


          <div className="step-card">

            <div className="step-number">
              04
            </div>

            <div className="step-icon">
              ✓
            </div>

            <h3>Hire Faster</h3>

            <p>
              Review qualified candidates and
              make faster hiring decisions.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CANDIDATE / RECRUITER ================= */}

      <section className="audience-section">

        <div className="audience-card candidate-audience">

          <div className="audience-content">

            <span>CANDIDATES</span>

            <h2>
              Build a Resume
              <br />
              That Gets Noticed.
            </h2>

            <p>
              Create a professional resume, improve your ATS score,
              discover skill gaps and find relevant opportunities.
            </p>

            <a href="/register" className="audience-btn">
              Create Your Resume →
            </a>

          </div>


          <div className="audience-visual">

            <div className="resume-paper">

              <div className="resume-avatar"></div>

              <div className="resume-lines">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="resume-score">
                <strong>92</strong>
                <small>ATS Score</small>
              </div>

            </div>

          </div>

        </div>


        <div className="audience-card recruiter-audience">

          <div className="audience-content">

            <span>RECRUITERS</span>

            <h2>
              Find the Right
              <br />
              Candidate Faster.
            </h2>

            <p>
              Screen resumes, compare candidates, manage your
              hiring pipeline and discover top matches automatically.
            </p>

            <a href="/register" className="audience-btn dark-btn">
              Start Recruiting →
            </a>

          </div>


          <div className="recruiter-visual">

            <div className="candidate-list">

              <div className="candidate-row">
                <div className="candidate-avatar">JD</div>

                <div>
                  <strong>John Doe</strong>
                  <span>Python Developer</span>
                </div>

                <b>96%</b>
              </div>

              <div className="candidate-row">
                <div className="candidate-avatar">AS</div>

                <div>
                  <strong>Alex Smith</strong>
                  <span>Backend Engineer</span>
                </div>

                <b>91%</b>
              </div>

              <div className="candidate-row">
                <div className="candidate-avatar">RK</div>

                <div>
                  <strong>Riya Kumar</strong>
                  <span>Software Engineer</span>
                </div>

                <b>88%</b>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= ANALYTICS ================= */}

      <section className="analytics-section">

        <div className="analytics-content">

          <span>INTELLIGENT ANALYTICS</span>

          <h2>
            Turn Recruitment Data
            <br />
            Into <strong>Better Decisions.</strong>
          </h2>

          <p>
            Get real-time visibility into candidates, resumes,
            skills, job matches and recruitment performance.
          </p>

          <div className="analytics-points">

            <div>
              <span>✓</span>
              Real-time candidate insights
            </div>

            <div>
              <span>✓</span>
              Resume score analytics
            </div>

            <div>
              <span>✓</span>
              Skill gap identification
            </div>

            <div>
              <span>✓</span>
              Recruitment performance reports
            </div>

          </div>

        </div>


        <div className="analytics-dashboard">

          <div className="analytics-header">
            <div>
              <span>Recruitment Overview</span>
              <h3>Candidate Analytics</h3>
            </div>

            <button>This Month ▾</button>
          </div>


          <div className="analytics-stats">

            <div>
              <span>Total Candidates</span>
              <strong>2,846</strong>
              <small>+18.4%</small>
            </div>

            <div>
              <span>Shortlisted</span>
              <strong>684</strong>
              <small>+12.8%</small>
            </div>

            <div>
              <span>Avg. Match</span>
              <strong>87%</strong>
              <small>+6.2%</small>
            </div>

          </div>


          <div className="chart">

            <div className="chart-labels">
              <span>100</span>
              <span>75</span>
              <span>50</span>
              <span>25</span>
              <span>0</span>
            </div>

            <div className="chart-bars">

              <span style={{ height: "40%" }}></span>
              <span style={{ height: "55%" }}></span>
              <span style={{ height: "48%" }}></span>
              <span style={{ height: "72%" }}></span>
              <span style={{ height: "64%" }}></span>
              <span style={{ height: "86%" }}></span>
              <span style={{ height: "78%" }}></span>
              <span style={{ height: "94%" }}></span>

            </div>

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section className="about-section" id="about">

        <div className="about-badge">
          ABOUT OUR PLATFORM
        </div>

        <h2>
          One Platform.
          <br />
          <strong>Smarter Recruitment.</strong>
        </h2>

        <p>
          AI Resume and Screening System combines resume building,
          artificial intelligence, candidate screening, job matching
          and recruitment analytics into one modern platform.
        </p>

        <div className="about-stats">

          <div>
            <strong>10K+</strong>
            <span>Resumes</span>
          </div>

          <div>
            <strong>5K+</strong>
            <span>Candidates</span>
          </div>

          <div>
            <strong>95%</strong>
            <span>Match Accuracy</span>
          </div>

          <div>
            <strong>24/7</strong>
            <span>Platform Access</span>
          </div>

        </div>

      </section>


      {/* ================= FAQ ================= */}

      <section className="faq-section" id="faq">

        <div className="section-heading">

          <span>FAQ</span>

          <h2>
            Frequently Asked
            <strong>Questions</strong>
          </h2>

        </div>


        <div className="faq-container">

          <details>
            <summary>
              What is AI Resume and Screening System?
              <span>+</span>
            </summary>

            <p>
              It is an AI-powered platform designed to help candidates
              create resumes and help recruiters screen and match
              candidates efficiently.
            </p>

          </details>


          <details>
            <summary>
              Can I create an ATS-friendly resume?
              <span>+</span>
            </summary>

            <p>
              Yes. The platform provides resume templates and
              optimization features designed around common ATS
              requirements.
            </p>

          </details>


          <details>
            <summary>
              How does candidate matching work?
              <span>+</span>
            </summary>

            <p>
              Candidate profiles can be analyzed against job
              requirements to generate a matching score based on
              relevant skills and experience.
            </p>

          </details>


          <details>
            <summary>
              Can recruiters screen multiple resumes?
              <span>+</span>
            </summary>

            <p>
              Yes. The recruiter workflow can support bulk resume
              analysis and candidate comparison.
            </p>

          </details>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="final-cta">

        <div className="cta-glow"></div>

        <span>START YOUR JOURNEY</span>

        <h2>
          Build Better.
          <br />
          <strong>Hire Smarter.</strong>
        </h2>

        <p>
          Join the next generation of AI-powered recruitment.
        </p>

        <div className="cta-buttons">

          <a href="/register" className="cta-primary">
            Create Free Account →
          </a>

          <a href="/login" className="cta-secondary">
            Sign In
          </a>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-main">

          <div className="footer-brand">

            <div className="logo">

              <div className="logo-icon">
                AI
              </div>

              <div className="logo-text">
                <h2>AI Resume</h2>
                <span>& Screening System</span>
              </div>

            </div>

            <p>
              Intelligent tools for modern resume building
              and recruitment.
            </p>

          </div>


          <div className="footer-column">

            <h4>Platform</h4>

            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#about">About</a>
            <a href="#faq">FAQ</a>

          </div>


          <div className="footer-column">

            <h4>For Candidates</h4>

            <a href="/register">Resume Builder</a>
            <a href="#">Resume Score</a>
            <a href="#">Job Matching</a>
            <a href="#">Career Insights</a>

          </div>


          <div className="footer-column">

            <h4>For Recruiters</h4>

            <a href="/register">Candidate Screening</a>
            <a href="#">Candidate Matching</a>
            <a href="#">Analytics</a>
            <a href="#">Recruitment Dashboard</a>

          </div>

        </div>


        <div className="footer-bottom">

          <span>
            © 2026 AI Resume and Screening System
          </span>

          <div>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>

        </div>

      </footer>

    </div>
  );
}

export default LandingPage;
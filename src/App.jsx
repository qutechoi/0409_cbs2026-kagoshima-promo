import './App.css'

const highlights = [
  {
    title: 'Sakurajima, the symbol of Kagoshima',
    text: 'One of Japan’s most iconic active volcanoes, Sakurajima defines the skyline and gives the city a dramatic sense of place.',
  },
  {
    title: 'A city made for easy conference travel',
    text: 'Kagoshima is well connected by air, Shinkansen, airport limousine bus, tram, and taxi—making venue access refreshingly simple.',
  },
  {
    title: 'Food, scenery, and warm hospitality',
    text: 'From Sengan-en and bay views to local specialties and footbaths near Sakurajima, Kagoshima offers a memorable conference stay.',
  },
]

const conferenceFacts = [
  ['Event', 'Cherry Blossom Symposium 2026 (CBS 2026)'],
  ['Subtitle', 'The 14th International Conference of Clinical Laboratory Automation'],
  ['Dates', 'April 9 (Thu) – 11 (Sat), 2026'],
  ['Theme', 'Future Dreams Come True in Automation and Robotics'],
  ['Venue', 'Kagoshima Prefectural Citizens Exchange Center'],
  ['Language', 'English'],
]

const programPoints = [
  'Plenary lectures on regenerative medicine and Bayesian applications in clinical laboratory medicine',
  'Symposia on AI in laboratory medicine, digital transformation, robotics, LIS/LAS integration, and quality assurance',
  'Industry workshops, poster presentations, exhibition tours, a site tour, and networking events',
]

const travelTips = [
  'Kagoshima Airport → Kagoshima Chuo Station: about 40–50 minutes by limousine bus',
  'Kagoshima Chuo Station → venue: about 10 minutes by city tram to Suizokukanguchi + 4-minute walk',
  'JR Kagoshima Station → venue: about 10 minutes on foot',
]

function App() {
  return (
    <main className="page-shell">
      <section className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">CBS 2026 × Kagoshima</span>
          <h1>Where clinical laboratory automation meets one of Japan’s most unforgettable cities.</h1>
          <p>
            Cherry Blossom Symposium 2026 brings global experts in automation, robotics, AI, and digital healthcare to Kagoshima—
            a city of volcano views, elegant gardens, excellent access, and warm southern hospitality.
          </p>
          <div className="hero-actions">
            <a href="https://www.cbs-labauto.com/14th/" target="_blank" rel="noreferrer">Official CBS 2026 Site</a>
            <a href="https://www.kagoshima-yokanavi.jp/en" target="_blank" rel="noreferrer" className="secondary">Visit Kagoshima</a>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/50/Sakurajima_from_Kagoshima.jpg"
            alt="Sakurajima seen from Kagoshima"
          />
        </div>
      </section>

      <section className="info-grid">
        {highlights.map((item) => (
          <article key={item.title} className="info-card">
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="section-block split-layout">
        <div>
          <span className="section-label">Why CBS 2026 matters</span>
          <h2>A focused international meeting on the future of laboratory medicine</h2>
          <p>
            According to the official overview, CBS 2026 centers on automation and robotics in clinical laboratory medicine.
            The program includes plenary lectures, symposia, industry workshops, poster presentations, and exhibitions, all in English.
          </p>
          <ul>
            {programPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="fact-panel">
          <h3>Conference Snapshot</h3>
          <div className="fact-list">
            {conferenceFacts.map(([label, value]) => (
              <div key={label} className="fact-row">
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="image-band">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Sengan-en_and_Sakurajima.jpg"
          alt="Sengan-en with Sakurajima in the background"
        />
        <div className="image-copy">
          <span className="section-label">Kagoshima atmosphere</span>
          <h2>A conference destination with real character</h2>
          <p>
            Kagoshima’s official tourism site highlights landmarks such as Sengan-en, Sakurajima, Kotsuki River, local food stalls,
            the aquarium, bicycle routes, kayaking, and the famous Sakurajima footbath. It’s the kind of city where conference time
            and travel time fit together naturally.
          </p>
        </div>
      </section>

      <section className="section-block split-layout reverse">
        <div className="travel-panel">
          <span className="section-label">Easy logistics</span>
          <h2>Simple routes from airport to venue</h2>
          <ul>
            {travelTips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
          <p className="fine-print">
            Official venue information lists Kagoshima Prefectural Citizens Exchange Center at 14-50 Yamashita-cho, Kagoshima City.
          </p>
        </div>
        <div className="travel-image">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Kagoshima_City_view.jpg"
            alt="View of Kagoshima city"
          />
        </div>
      </section>

      <section className="section-block final-cta">
        <span className="section-label">Invitation</span>
        <h2>Come for the science. Stay for the city.</h2>
        <p>
          CBS 2026 in Kagoshima offers more than a conference schedule. It combines meaningful scientific exchange with a venue city
          that is scenic, accessible, and memorable—an ideal setting for conversations about the future of automation, AI, and digital healthcare.
        </p>
        <div className="hero-actions center">
          <a href="https://www.cbs-labauto.com/14th/program.html" target="_blank" rel="noreferrer">View Program</a>
          <a href="https://www.cbs-labauto.com/14th/venue.html" target="_blank" rel="noreferrer" className="secondary">Venue & Access</a>
        </div>
      </section>
    </main>
  )
}

export default App

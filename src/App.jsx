import './App.css'

const highlights = [
  {
    title: 'Sakurajima, the symbol of Kagoshima',
    text: 'One of Japan\u2019s most iconic active volcanoes, Sakurajima defines the skyline and gives the city a dramatic sense of place.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Sakurajima_at_Sunset.jpg',
    imageAlt: 'Sakurajima volcano at sunset',
  },
  {
    title: 'A city made for easy conference travel',
    text: 'Kagoshima is well connected by air, Shinkansen, airport limousine bus, tram, and taxi\u2014making venue access refreshingly simple.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Kagoshima_City_Tramcar_at_Shiyakusho-mae_Station.jpg',
    imageAlt: 'Kagoshima city tram at Shiyakusho-mae station',
  },
  {
    title: 'Food, scenery, and warm hospitality',
    text: 'From Sengan-en and bay views to local specialties and footbaths near Sakurajima, Kagoshima offers a memorable conference stay.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Sengan-en2.jpg',
    imageAlt: 'Sengan-en garden in Kagoshima',
  },
]

const conferenceFacts = [
  ['Event', 'Cherry Blossom Symposium 2026 (CBS 2026)'],
  ['Subtitle', 'The 14th International Conference of Clinical Laboratory Automation'],
  ['Dates', 'April 9 (Thu) \u2013 11 (Sat), 2026'],
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
  'Kagoshima Airport \u2192 Kagoshima Chuo Station: about 40\u201350 minutes by limousine bus',
  'Kagoshima Chuo Station \u2192 venue: about 10 minutes by city tram to Suizokukanguchi + 4-minute walk',
  'JR Kagoshima Station \u2192 venue: about 10 minutes on foot',
]

function App() {
  return (
    <main className="page-shell">
      <section className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">CBS 2026 \u00d7 Kagoshima</span>
          <h1>Where clinical laboratory automation meets one of Japan's most unforgettable cities.</h1>
          <p>
            Cherry Blossom Symposium 2026 brings global experts in automation, robotics, AI, and digital healthcare to Kagoshima\u2014
            a city of volcano views, elegant gardens, excellent access, and warm southern hospitality.
          </p>
          <div className="hero-actions">
            <a href="https://www.cbs-labauto.com/14th/" target="_blank" rel="noreferrer">Official CBS 2026 Site</a>
            <a href="https://www.kagoshima-yokanavi.jp/en" target="_blank" rel="noreferrer" className="secondary">Visit Kagoshima</a>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Kagoshima_and_Sakurajima.jpg"
            alt="Kagoshima city with Sakurajima volcano"
          />
        </div>
      </section>

      <section className="info-grid">
        {highlights.map((item) => (
          <article key={item.title} className="info-card">
            <img className="info-card-image" src={item.image} alt={item.imageAlt} />
            <div className="info-card-content">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
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
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Sakurajima_from_Sengan-en.jpg/1280px-Sakurajima_from_Sengan-en.jpg"
          alt="Sakurajima seen from Sengan-en garden"
        />
        <div className="image-copy">
          <span className="section-label">Kagoshima atmosphere</span>
          <h2>A conference destination with real character</h2>
          <p>
            Kagoshima's official tourism site highlights landmarks such as Sengan-en, Sakurajima, Kotsuki River, local food stalls,
            the aquarium, bicycle routes, kayaking, and the famous Sakurajima footbath. It's the kind of city where conference time
            and travel time fit together naturally.
          </p>
          <div className="food-gallery">
            <div className="food-gallery-item">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Kagoshima_Ramen.jpg"
                alt="Kagoshima ramen with rich pork bone broth"
              />
              <span>Kagoshima Ramen</span>
            </div>
            <div className="food-gallery-item">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Sengan-en_4.jpg"
                alt="Sengan-en garden"
              />
              <span>Sengan-en Garden</span>
            </div>
          </div>
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
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Kagoshima-central-tower-20201006.jpg/1280px-Kagoshima-central-tower-20201006.jpg"
            alt="Kagoshima Chuo Station area"
          />
        </div>
      </section>

      <section className="section-block final-cta">
        <span className="section-label">Invitation</span>
        <h2>Come for the science. Stay for the city.</h2>
        <p>
          CBS 2026 in Kagoshima offers more than a conference schedule. It combines meaningful scientific exchange with a venue city
          that is scenic, accessible, and memorable\u2014an ideal setting for conversations about the future of automation, AI, and digital healthcare.
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

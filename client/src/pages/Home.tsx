/**
 * Stilnotiz: Klassische FC-Elmshorn-Vereinsseite — bordeauxfarbener Header,
 * warmes Elfenbein, editoriale Serifenschrift, zurückhaltende Linien und ein
 * leicht abgedunkeltes Spielfeldmotiv bilden die verbindliche Referenzsprache.
 */
import { useEffect, useState } from "react";
import { ChevronDown, Check, Menu, X, MapPin, Mail, ArrowUpRight } from "lucide-react";

const heroImage = "/manus-storage/fce-hero-players_692c94ee.jpg";
const crestImage = "/manus-storage/fce-mark_a8812dac.png";
const coTrainerPoster = "/manus-storage/fce-co-trainer-poster_4d650169.jpg";
const boardPoster = "/manus-storage/fce-board-poster_9b04c153.jpg";
const youthPoster = "/manus-storage/fce-youth-poster_245eb573.jpg";

const navigation = [
  { label: "Startseite", href: "#start" },
  { label: "Verein", href: "#verein" },
  { label: "Mannschaften", href: "#mannschaften", hasMenu: true },
  { label: "Service", href: "#service", hasMenu: true },
  { label: "Sponsoren", href: "#sponsoren" },
  { label: "Kontakt", href: "#kontakt" },
];

function CookieDialog({ onDismiss }: { onDismiss: () => void }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="cookie-layer" role="presentation">
      <section
        className="cookie-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-title"
        aria-describedby="cookie-description"
      >
        <div className="cookie-heading">
          <h2 id="cookie-title">Privatsphäre-Einstellungen</h2>
          <button className="dialog-close" type="button" onClick={onDismiss} aria-label="Cookie-Einstellungen schließen">
            <X aria-hidden="true" size={18} />
          </button>
        </div>
        <div className="cookie-content">
          <p id="cookie-description">
            Wir verwenden Cookies und ähnliche Technologien auf unserer Website und verarbeiten personenbezogene Daten von dir, um Inhalte und Anzeigen zu personalisieren,
            Medien von Drittanbietern einzubinden oder Zugriffe auf unsere Website zu analysieren. Die Datenverarbeitung kann auch erst in Folge gesetzter Cookies stattfinden.
          </p>
          <p>
            Die Datenverarbeitung kann mit deiner Einwilligung oder auf Basis eines berechtigten Interesses erfolgen, dem du in den Privatsphäre-Einstellungen widersprechen kannst.
            Weitere Informationen zur Verwendung deiner Daten findest du in unserer <a href="#datenschutz">Datenschutzerklärung</a>.
          </p>
          <p className="cookie-note">
            Wenn du alle Services akzeptierst, erlaubst du, dass optionale Dienste geladen werden. Diese sind nach ihrem Zweck in Gruppen unterteilt.
          </p>
          {showDetails && (
            <div className="cookie-preferences" aria-live="polite">
              <strong>Optionale Dienste</strong>
              <label>
                <input type="checkbox" defaultChecked /> Externe Medien und Karten laden
              </label>
              <label>
                <input type="checkbox" defaultChecked /> Anonymisierte Nutzungsanalyse erlauben
              </label>
            </div>
          )}
          <div className="cookie-actions">
            <button type="button" onClick={onDismiss}>Alle akzeptieren</button>
            <button type="button" onClick={onDismiss}>Weiter ohne Einwilligung</button>
          </div>
          <button className="text-link cookie-settings" type="button" onClick={() => setShowDetails((current) => !current)}>
            {showDetails ? "Einstellungen schließen" : "Privatsphäre-Einstellungen individuell festlegen"}
          </button>
        </div>
        <a className="cookie-privacy" href="#datenschutz">Datenschutzerklärung</a>
      </section>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cookiesOpen, setCookiesOpen] = useState(true);

  useEffect(() => {
    document.title = "Willkommen beim FC Elmshorn – Fußballverein in Elmshorn";

    const description = "FC Elmshorn: Fußball erleben für Herren, Jugend und Senioren. Aktuelle Mannschaften, Trainingszeiten, Spiele und Vereinsneuigkeiten.";
    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.setAttribute("name", "description");
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.setAttribute("content", description);

    const escapeHandler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setCookiesOpen(false);
      }
    };
    window.addEventListener("keydown", escapeHandler);
    return () => window.removeEventListener("keydown", escapeHandler);
  }, []);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#hauptinhalt">Zum Inhalt springen</a>

      <header className="site-header" id="start">
        <div className="header-inner">
          <a className="brand" href="#start" aria-label="FC Elmshorn – Startseite">
            <img src={crestImage} alt="Stilisiertes Wappen des FC Elmshorn" />
            <span className="brand-copy">
              <strong>FC ELMSHORN</strong>
              <small>von 1920 e.V.</small>
            </span>
          </a>

          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? "Navigation schließen" : "Navigation öffnen"}
            aria-expanded={menuOpen}
            aria-controls="hauptnavigation"
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>

          <nav className={menuOpen ? "main-nav nav-open" : "main-nav"} id="hauptnavigation" aria-label="Hauptnavigation">
            {navigation.map((item, index) => (
              <a className={index === 0 ? "active" : ""} href={item.href} key={item.label} onClick={() => setMenuOpen(false)}>
                {item.label}
                {item.hasMenu && <ChevronDown aria-hidden="true" size={13} strokeWidth={1.8} />}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="hauptinhalt">
        <section className="welcome-section" aria-labelledby="welcome-title">
          <div className="welcome-copy">
            <p className="eyebrow">Fußballverein in Elmshorn</p>
            <h1 id="welcome-title">Willkommen beim FC Elmshorn</h1>
            <p>Gemeinsam Fußball erleben – für Jung &amp; Alt</p>
          </div>
          <div className="hero-actions" aria-label="Schnellzugriff">
            <a href="#spielplan">Spielplan ansehen</a>
            <a href="#trainingszeiten">Aktuelle Trainingszeiten</a>
            <a href="#kontakt">Anfahrt</a>
          </div>
        </section>

        <figure className="hero-image" aria-label="Spieler des FC Elmshorn auf dem Weg zum Fußballplatz">
          <img src={heroImage} alt="Spieler des FC Elmshorn gehen in grünen Trikots über den Fußballplatz." />
        </figure>

        <section className="teams-section" id="mannschaften" aria-labelledby="teams-title">
          <div className="section-intro">
            <p className="eyebrow">Gemeinsam auf dem Platz</p>
            <h2 id="teams-title">Mannschaften</h2>
            <p>Der FC Elmshorn verfügt über Herren- und Senioren-Teams sowie eine große Jugendabteilung.</p>
          </div>
          <div className="team-actions">
            <a href="#herren">Herren</a>
            <a href="#jugend">Jugend</a>
            <a href="#senioren">Senioren</a>
          </div>
        </section>

        <section className="news-section" id="aktuelles" aria-labelledby="news-title">
          <div className="section-heading">
            <p className="eyebrow">Aus dem Verein</p>
            <h2 id="news-title">Aktuelles</h2>
          </div>

          <article className="news-story story-featured" id="trainingszeiten">
            <figure className="poster-frame">
              <img src={coTrainerPoster} alt="Bordeauxfarbener Informationsflyer für den Fußballnachwuchs." />
            </figure>
            <div className="story-copy">
              <p className="story-kicker">Jugendfußball · Jahrgang 2015</p>
              <h3>Co-Trainer und neue Spieler für den Jahrgang 2015 gesucht</h3>
              <p>Du bist Jahrgang 2015 und hast Lust auf Fußball in einem familiären Umfeld? Oder möchtest du als Co-Trainer junge Talente auf ihrem Weg begleiten?</p>
              <p>Dann bist du beim FC Elmshorn genau richtig. Dich erwarten qualifiziertes Training, ein starkes Miteinander und jede Menge Spaß am Fußball.</p>
              <a className="story-link" href="mailto:info@fc-elmshorn.de">Kontakt aufnehmen <ArrowUpRight size={15} aria-hidden="true" /></a>
            </div>
            <figure className="poster-frame poster-secondary">
              <img src={coTrainerPoster} alt="Zweite Ansicht des Informationsflyers für den Fußballnachwuchs." />
            </figure>
          </article>

          <article className="news-story story-board" id="verein">
            <figure className="poster-frame board-frame">
              <img src={boardPoster} alt="Ankündigungsgrafik zum Vorstand des FC Elmshorn." />
            </figure>
            <div className="story-copy">
              <p className="story-kicker">Vereinsleben</p>
              <h3>Unser Vorstand</h3>
              <p>Ein engagiertes Team gestaltet gemeinsam die Zukunft des FC Elmshorn. Mit Herz, Erfahrung und einem klaren Blick für unsere Mannschaften stehen sie für den Verein ein.</p>
              <p>Wir danken allen ehrenamtlich Engagierten für ihren Einsatz auf und neben dem Platz.</p>
            </div>
          </article>

          <article className="news-story story-text" id="jugend">
            <div className="story-copy">
              <p className="story-kicker">Nachwuchs</p>
              <h3>Jahrgang 2014: Neuanmeldungen möglich</h3>
              <p>Für unseren Jahrgang 2014 haben wir noch freie Plätze im Team. Gesucht werden zwei Feldspieler und zwei Torhüter.</p>
              <p>Du hast Lust auf Teamgeist, Entwicklung und echten Fußballspaß beim FC Elmshorn? Dann melde dich gern bei unserem Trainerteam.</p>
            </div>
          </article>

          <article className="news-story story-board" id="herren">
            <figure className="poster-frame board-frame">
              <img src={youthPoster} alt="Bordeauxfarbene Informationsgrafik für engagierte Jugendtrainerinnen und Jugendtrainer." />
            </figure>
            <div className="story-copy">
              <p className="story-kicker">Engagement</p>
              <h3>Jugendtrainer gesucht</h3>
              <a className="inline-mail" href="mailto:info@fc-elmshorn.de"><Mail aria-hidden="true" size={15} /> E-Mail schreiben</a>
              <ul className="check-list">
                <li><Check aria-hidden="true" size={16} /> Ehrenamt</li>
                <li><Check aria-hidden="true" size={16} /> Spaß am Spiel</li>
                <li><Check aria-hidden="true" size={16} /> Sofort beginnen</li>
              </ul>
            </div>
          </article>
        </section>

        <section className="club-note" id="service" aria-labelledby="club-note-title">
          <div>
            <p className="eyebrow">Immer gut informiert</p>
            <h2 id="club-note-title">Dein Verein. Dein Fußball. Deine Stadt.</h2>
          </div>
          <p>Trainingszeiten, Teams, neue Spieltermine und Vereinsneuigkeiten werden klar strukturiert und barrierearm aufbereitet.</p>
        </section>

        <section className="contact-section" id="kontakt" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow">Kontakt &amp; Anfahrt</p>
            <h2 id="contact-title">Wir freuen uns auf dich.</h2>
          </div>
          <div className="contact-links">
            <a href="mailto:info@fc-elmshorn.de"><Mail aria-hidden="true" size={18} /> info@fc-elmshorn.de</a>
            <a href="https://www.google.com/maps/search/?api=1&query=FC+Elmshorn" target="_blank" rel="noreferrer"><MapPin aria-hidden="true" size={18} /> Anfahrt zum Vereinsgelände</a>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="sponsoren">
        <div className="footer-brand">
          <img src={crestImage} alt="Stilisiertes Wappen des FC Elmshorn" />
          <div><strong>FC ELMSHORN</strong><span>von 1920 e.V.</span></div>
        </div>
        <p>2026 © FC Elmshorn · Gemeinsam Fußball erleben.</p>
        <div className="footer-links">
          <a href="#datenschutz">Datenschutz</a>
          <button type="button" onClick={() => setCookiesOpen(true)}>Cookie-Einstellungen</button>
        </div>
      </footer>

      <div id="spielplan" className="visually-hidden">Der aktuelle Spielplan ist beim FC Elmshorn abrufbar.</div>
      <div id="senioren" className="visually-hidden">Informationen zu den Seniorenteams des FC Elmshorn.</div>
      <div id="datenschutz" className="visually-hidden">Hinweise zum Datenschutz und zu Privatsphäre-Einstellungen.</div>
      {cookiesOpen && <CookieDialog onDismiss={() => setCookiesOpen(false)} />}
    </div>
  );
}

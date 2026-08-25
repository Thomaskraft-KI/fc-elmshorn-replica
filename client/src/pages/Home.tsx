/**
 * Stilnotiz: „Matchday Editorial“ für den FC Elmshorn — eigene Vereinsfarbe
 * Bordeaux, ruhige Papierflächen, klare Sportnavigation, dominante Inhalte und
 * dynamische Match-Center-Module; keine Übernahme fremder Vereinsmarken.
 */
import { useEffect, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Mail,
  MapPin,
  Menu,
  Newspaper,
  PlayCircle,
  ShieldCheck,
  Trophy,
  UsersRound,
  X,
} from "lucide-react";

const heroImage = "/manus-storage/fce-hero-players_692c94ee.jpg";
const crestImage = "/manus-storage/fce-mark_a8812dac.png";
const coTrainerPoster = "/manus-storage/fce-co-trainer-poster_4d650169.jpg";
const boardPoster = "/manus-storage/fce-board-poster_9b04c153.jpg";
const youthPoster = "/manus-storage/fce-youth-poster_245eb573.jpg";

const navigation = [
  { label: "News", href: "#news" },
  { label: "Teams", href: "#teams", hasMenu: true },
  { label: "Match Center", href: "#matchcenter" },
  { label: "Verein", href: "#verein", hasMenu: true },
  { label: "Kontakt", href: "#kontakt" },
];

const teamDetails = {
  Herren: {
    title: "Herren",
    text: "Aktuelle Infos zu den Herrenteams, Spielplänen und den sportlichen Zielen des FC Elmshorn.",
    href: "#news",
  },
  Jugend: {
    title: "Jugend",
    text: "Von den ersten Ballkontakten bis zum ambitionierten Team: Nachwuchsarbeit mit Freude, Struktur und Zusammenhalt.",
    href: "#news",
  },
  Senioren: {
    title: "Senioren",
    text: "Fußball, Gemeinschaft und Wettbewerb — die Seniorenteams des Vereins im Überblick.",
    href: "#kontakt",
  },
} as const;

type TeamName = keyof typeof teamDetails;

function CookieDialog({ onDismiss }: { onDismiss: () => void }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="cookie-layer" role="presentation">
      <section className="cookie-dialog" role="dialog" aria-modal="true" aria-labelledby="cookie-title" aria-describedby="cookie-description">
        <div className="cookie-heading">
          <p className="dialog-overline">Deine Auswahl</p>
          <h2 id="cookie-title">Privatsphäre-Einstellungen</h2>
          <button className="dialog-close" type="button" onClick={onDismiss} aria-label="Cookie-Einstellungen schließen"><X aria-hidden="true" size={18} /></button>
        </div>
        <div className="cookie-content">
          <p id="cookie-description">Wir verwenden notwendige Technologien für die Funktion der Website. Optionale Dienste werden nur geladen, wenn du zustimmst.</p>
          {showDetails && (
            <div className="cookie-preferences" aria-live="polite">
              <strong>Optionale Dienste</strong>
              <label><input type="checkbox" defaultChecked /> Externe Medien und Karten laden</label>
              <label><input type="checkbox" defaultChecked /> Anonymisierte Nutzungsanalyse erlauben</label>
            </div>
          )}
          <div className="cookie-actions">
            <button type="button" onClick={onDismiss}>Alle akzeptieren</button>
            <button className="cookie-secondary" type="button" onClick={onDismiss}>Nur notwendige wählen</button>
          </div>
          <button className="text-link cookie-settings" type="button" onClick={() => setShowDetails((current) => !current)}>
            {showDetails ? "Einstellungen schließen" : "Auswahl individuell festlegen"}
          </button>
        </div>
        <a className="cookie-privacy" href="#datenschutz">Datenschutzerklärung</a>
      </section>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cookiesOpen, setCookiesOpen] = useState(false);
  const [activeTeam, setActiveTeam] = useState<TeamName>("Herren");

  useEffect(() => {
    document.title = "FC Elmshorn – Fußball erleben in Elmshorn";
    const escapeHandler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setCookiesOpen(false);
      }
    };
    window.addEventListener("keydown", escapeHandler);
    return () => window.removeEventListener("keydown", escapeHandler);
  }, []);

  const selectedTeam = teamDetails[activeTeam];

  return (
    <div className="site-shell premium-shell">
      <a className="skip-link" href="#hauptinhalt">Zum Inhalt springen</a>

      <header className="site-header" id="start">
        <div className="utility-bar">
          <p>FC Elmshorn von 1920 e.V.</p>
          <div><a href="#kontakt">Kontakt</a><span aria-hidden="true">•</span><a href="#verein">Der Verein</a></div>
        </div>
        <div className="header-inner">
          <a className="brand" href="#start" aria-label="FC Elmshorn – Startseite">
            <img src={crestImage} alt="Stilisiertes Wappen des FC Elmshorn" />
            <span className="brand-copy"><strong>FC ELMSHORN</strong><small>von 1920 e.V.</small></span>
          </a>
          <button type="button" className="menu-toggle" aria-label={menuOpen ? "Navigation schließen" : "Navigation öffnen"} aria-expanded={menuOpen} aria-controls="hauptnavigation" onClick={() => setMenuOpen((current) => !current)}>
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
          <nav className={menuOpen ? "main-nav nav-open" : "main-nav"} id="hauptnavigation" aria-label="Hauptnavigation">
            {navigation.map((item) => <a href={item.href} key={item.label} onClick={() => setMenuOpen(false)}>{item.label}{item.hasMenu && <ChevronDown aria-hidden="true" size={13} strokeWidth={1.8} />}</a>)}
          </nav>
          <a className="header-cta" href="#matchcenter">Spielplan <ArrowRight aria-hidden="true" size={15} /></a>
        </div>
      </header>

      <main id="hauptinhalt">
        <section className="pro-hero" aria-labelledby="hero-title">
          <img className="pro-hero-image" src={heroImage} alt="Spieler des FC Elmshorn gehen in grünen Trikots über den Fußballplatz." />
          <div className="hero-scrim" aria-hidden="true" />
          <div className="hero-layout">
            <div className="hero-copy">
              <p className="hero-kicker"><span /> FCE MATCHDAY EDITORIAL</p>
              <h1 id="hero-title">Der Platz gehört<br /><em>uns allen.</em></h1>
              <p className="hero-intro">Fußball, Zusammenhalt und echtes Vereinsleben — seit 1920 in Elmshorn.</p>
              <div className="hero-actions">
                <a className="button-light" href="#news">Aktuelle News <ArrowRight aria-hidden="true" size={16} /></a>
                <a className="text-action" href="#teams">Unsere Teams <ArrowRight aria-hidden="true" size={15} /></a>
              </div>
            </div>
            <aside className="hero-match-card" aria-label="Schnellzugriff Match Center">
              <div className="match-card-top"><p>FCE Match Center</p><span>Saison 2026/27</span></div>
              <div className="match-card-main">
                <div className="match-icon"><Trophy aria-hidden="true" size={27} /></div>
                <div><strong>Alle Teams.<br />Ein Spielplan.</strong><p>Spiele, Trainingszeiten und Treffpunkte im Überblick.</p></div>
              </div>
              <a href="#matchcenter">Zum Match Center <ArrowRight aria-hidden="true" size={15} /></a>
            </aside>
          </div>
        </section>

        <section className="club-command-bar" id="matchcenter" aria-label="Schnellzugriffe für den Verein">
          <a href="#teams"><UsersRound aria-hidden="true" size={22} /><span><strong>Mannschaften</strong><small>Herren, Jugend &amp; Senioren</small></span><ArrowRight aria-hidden="true" size={16} /></a>
          <a href="#training"><CalendarDays aria-hidden="true" size={22} /><span><strong>Training</strong><small>Zeiten &amp; Informationen</small></span><ArrowRight aria-hidden="true" size={16} /></a>
          <a href="#news"><Newspaper aria-hidden="true" size={22} /><span><strong>Aktuelles</strong><small>Neuigkeiten aus dem Verein</small></span><ArrowRight aria-hidden="true" size={16} /></a>
        </section>

        <section className="headline-section" id="news" aria-labelledby="headline-title">
          <div className="section-cap"><span>01</span><p>Aus dem Verein</p></div>
          <div className="headline-grid">
            <article className="lead-story">
              <figure><img src={boardPoster} alt="Bordeauxfarbene Ankündigungsgrafik zum Vorstand des FC Elmshorn." /><figcaption>Vereinsleben</figcaption></figure>
              <div className="lead-story-copy"><p className="eyebrow-light">FCE IM FOKUS</p><h2 id="headline-title">Ein Verein lebt von den Menschen, die ihn bewegen.</h2><p>Der FC Elmshorn verbindet sportlichen Anspruch mit echter Gemeinschaft. Lerne die Menschen kennen, die auf und neben dem Platz Verantwortung übernehmen.</p><a href="#verein">Mehr über den Verein <ArrowRight aria-hidden="true" size={16} /></a></div>
            </article>
            <div className="side-news" aria-label="Weitere Nachrichten">
              <article className="compact-story"><img src={coTrainerPoster} alt="Informationsflyer des FC Elmshorn für den Fußballnachwuchs." /><div><p>Jugendfußball</p><h3>Neue Spieler und Unterstützung für den Jahrgang 2015 gesucht</h3><a href="mailto:info@fc-elmshorn.de">Kontakt <ArrowRight aria-hidden="true" size={14} /></a></div></article>
              <article className="compact-story"><img src={youthPoster} alt="Informationsgrafik für engagierte Jugendtrainerinnen und Jugendtrainer." /><div><p>Engagement</p><h3>Jugendtrainer gesucht: Werde Teil der FCE-Familie</h3><a href="mailto:info@fc-elmshorn.de">E-Mail schreiben <ArrowRight aria-hidden="true" size={14} /></a></div></article>
            </div>
          </div>
          <a className="all-news-link" href="#news">Alle Vereinsnews ansehen <ArrowRight aria-hidden="true" size={16} /></a>
        </section>

        <section className="team-world" id="teams" aria-labelledby="teams-title">
          <div className="team-world-copy"><p className="section-kicker">FUSSBALL FÜR ALLE</p><h2 id="teams-title">Unsere Teams.<br /><em>Unsere Farben.</em></h2><p>Jede Mannschaft schreibt ihre eigene Geschichte. Entdecke die Teams des FC Elmshorn und finde deinen Platz im Verein.</p></div>
          <div className="team-panel">
            <div className="team-tabs" role="tablist" aria-label="Mannschaftsbereiche">
              {(Object.keys(teamDetails) as TeamName[]).map((team) => <button type="button" key={team} className={activeTeam === team ? "active" : ""} role="tab" aria-selected={activeTeam === team} onClick={() => setActiveTeam(team)}>{team}</button>)}
            </div>
            <div className="team-panel-content" role="tabpanel">
              <p className="panel-number">0{(Object.keys(teamDetails) as TeamName[]).indexOf(activeTeam) + 1}</p>
              <div><p className="eyebrow-light">FCE TEAMS</p><h3>{selectedTeam.title}</h3><p>{selectedTeam.text}</p><a href={selectedTeam.href}>Bereich entdecken <ArrowRight aria-hidden="true" size={16} /></a></div>
            </div>
          </div>
        </section>

        <section className="training-section" id="training" aria-labelledby="training-title">
          <div className="training-copy"><p className="section-kicker">WISSEN, WO ES LANGGEHT</p><h2 id="training-title">Training beginnt<br />mit Orientierung.</h2><p>Auf einen Blick zu den aktuellen Trainingsinformationen, Mannschaftsbereichen und Kontaktwegen.</p></div>
          <div className="training-cards">
            <a href="#teams"><span className="training-card-icon"><Clock3 aria-hidden="true" size={22} /></span><strong>Trainingszeiten</strong><p>Die aktuellen Zeiten der Mannschaften kompakt und klar.</p><span className="card-arrow"><ArrowRight aria-hidden="true" size={16} /></span></a>
            <a href="#kontakt"><span className="training-card-icon"><MapPin aria-hidden="true" size={22} /></span><strong>Anfahrt &amp; Kontakt</strong><p>So findest du zum Platz und erreichst die richtigen Ansprechpartner.</p><span className="card-arrow"><ArrowRight aria-hidden="true" size={16} /></span></a>
            <a href="#verein"><span className="training-card-icon"><ShieldCheck aria-hidden="true" size={22} /></span><strong>Der Verein</strong><p>Einblick in Werte, Menschen und das Engagement hinter dem FCE.</p><span className="card-arrow"><ArrowRight aria-hidden="true" size={16} /></span></a>
          </div>
        </section>

        <section className="club-film" id="verein" aria-labelledby="club-film-title">
          <div className="film-grid-lines" aria-hidden="true" />
          <div className="club-film-copy"><p className="section-kicker light">FCE SEIT 1920</p><h2 id="club-film-title">Fußball ist mehr<br />als neunzig Minuten.</h2><p>Er ist das erste Training im Regen, der Jubel von der Seitenlinie und das Gefühl, gemeinsam für Elmshorn aufzulaufen.</p><a href="#kontakt">Teil der FCE-Familie werden <ArrowRight aria-hidden="true" size={16} /></a></div>
          <div className="film-stat"><span>1920</span><p>Gemeinsam verwurzelt.<br />Gemeinsam in Bewegung.</p></div>
        </section>

        <section className="contact-section" id="kontakt" aria-labelledby="contact-title">
          <div><p className="section-kicker light">KONTAKT &amp; ANFAHRT</p><h2 id="contact-title">Wir freuen uns<br />auf dich.</h2></div>
          <div className="contact-links"><a href="mailto:info@fc-elmshorn.de"><Mail aria-hidden="true" size={18} /><span><small>Schreib uns</small>info@fc-elmshorn.de</span><ArrowRight aria-hidden="true" size={16} /></a><a href="https://www.google.com/maps/search/?api=1&query=FC+Elmshorn" target="_blank" rel="noreferrer"><MapPin aria-hidden="true" size={18} /><span><small>Vereinsgelände</small>Anfahrt zum Platz</span><ArrowRight aria-hidden="true" size={16} /></a></div>
        </section>
      </main>

      <footer className="site-footer" id="sponsoren">
        <div className="footer-brand"><img src={crestImage} alt="Stilisiertes Wappen des FC Elmshorn" /><div><strong>FC ELMSHORN</strong><span>von 1920 e.V.</span></div></div>
        <div className="footer-center"><p>Gemeinsam Fußball erleben — für Jung &amp; Alt.</p><span>2026 © FC Elmshorn</span></div>
        <div className="footer-links"><a href="#datenschutz">Datenschutz</a><button type="button" onClick={() => setCookiesOpen(true)}>Cookie-Einstellungen</button></div>
      </footer>
      <div id="spielplan" className="visually-hidden">Aktuelle Spielinformationen des FC Elmshorn.</div>
      <div id="senioren" className="visually-hidden">Informationen zu den Seniorenteams des FC Elmshorn.</div>
      <div id="datenschutz" className="visually-hidden">Hinweise zum Datenschutz und zu Privatsphäre-Einstellungen.</div>
      {cookiesOpen && <CookieDialog onDismiss={() => setCookiesOpen(false)} />}
    </div>
  );
}

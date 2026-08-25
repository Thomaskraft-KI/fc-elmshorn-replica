# SEO-, KI-Sichtbarkeits- und Technik-Audit

**Objekt:** FC Elmshorn · Startseite  
**Bearbeitungsstand:** 25. August 2026  
**Autor:** Manus AI

> **Hinweis zur Einordnung:** Diese technische Einschätzung ist keine Rechtsberatung. Die Umsetzung folgt den einschlägigen Webstandards; ob im konkreten Betrieb rechtliche Pflichten, insbesondere zu Datenschutz, Consent und Barrierefreiheit, erfüllt sind, sollte vor dem Livegang fachlich geprüft werden.

## Kurzfazit

Die Referenzseite hat bereits einige solide Grundlagen: Sie ist crawlbar, enthält einen Canonical-Link, nutzt Open-Graph-Daten, eine XML-Sitemap und JSON-LD. Die Auswertung zeigt jedoch **keine abrufbare `/llms.txt`-Datei** und kein reguläres Meta-Description-Element auf der Startseite. Die neue Anwendung schließt diese Lücken, ohne auf inhaltsleere KI-Textblöcke oder manipulative „Tricks“ zu setzen.

Die neue Startseite ist als mobile-first, semantische Vereinsseite umgesetzt. Sie liefert eine eindeutige Inhaltsstruktur, für Menschen lesbare lokale Vereinsinformationen, ein sichtbares Cookie-Modal, klare Kontaktwege sowie initial auslieferbare strukturierte Daten und Crawl-Dateien. Der Produktions-Build und die Typprüfung waren erfolgreich.

| Themenfeld | Befund der Referenzseite | Umsetzung in der neuen Anwendung |
| --- | --- | --- |
| Indexierung | `robots.txt` erlaubt Crawling und verweist auf eine Sitemap. | Beibehalten und als eigenständige `robots.txt` ausgeliefert. |
| Sitemap | Eine Sitemap ist vorhanden. | Eine Sitemap-Datei ist enthalten; die finale Domain ist vor Livegang zu bestätigen. |
| Meta-Description | Im DOM der Referenz nicht vorhanden. | Präzise deutsche Beschreibung im initialen Dokument ergänzt. |
| Canonical / Social | Canonical und Open Graph sind vorhanden. | Canonical, Open Graph, Twitter Card und Theme Color eingebunden. |
| Strukturierte Daten | Yoast liefert `WebPage`-/Organisation-Daten aus. | `WebSite`, `SportsOrganization` und `WebPage` als initiales JSON-LD ergänzt. |
| KI-Lesbarkeit | `/llms.txt` war nicht abrufbar. | Kuratierte `/llms.txt` und `rel="describedby"` ergänzt. |
| Zugänglichkeit | Cookie-Dialog und visuelle Seite erkennbar, aber nicht vollständig automatisiert geprüft. | Semantische Landmarken, Skip-Link, sichtbare Fokuszustände, tastaturbedienbarer Dialog und reduzierte Bewegung berücksichtigt. |

## Einordnung der KI-Optimierung

`llms.txt` ist **kein verbindlicher Suchmaschinenstandard und kein Ranking-Signal**. Es ist eine veröffentlichte Spezifikation, die KI-Agenten eine kurze, kuratierte Orientierung und weiterführende Links in Markdown anbietet. Die Spezifikation selbst empfiehlt eine knappe Beschreibung, klar gelistete Quellen und optional verlinkte Markdown-Inhalte. Deshalb ist die Datei in der neuen Anwendung bewusst sachlich gehalten und verweist nicht auf erfundene Daten. [1]

Die wichtigste Grundlage für KI- und Suchsichtbarkeit bleibt weiterhin eine öffentlich abrufbare, konsistente und gut strukturierte Website. Sie wird hier durch passende Seitensprache, aussagekräftige Überschriften, Alt-Texte, lokale Organisationsdaten, eindeutige Kontaktwege und strukturierte Daten umgesetzt. Google weist darauf hin, dass strukturierte Daten das Verständnis einer Organisation unterstützen können; es gibt jedoch keine Garantie auf ein bestimmtes Rich Result. [2]

| Maßnahme | Nutzen | Bewusste Grenze |
| --- | --- | --- |
| Semantisches HTML | Hilft Screenreadern, Crawlern und KI-Systemen, Hierarchien zuverlässig zu erfassen. | Ersetzt keine aktuellen, fachlich gepflegten Vereinsinhalte. |
| JSON-LD `SportsOrganization` | Klärt Name, Gründungsjahr, Website, E-Mail und soziale Profile. | Keine frei erfundenen Ratings, Öffnungszeiten, Adressen oder Veranstaltungen. |
| `/llms.txt` | Bietet Agenten einen kompakten Einstiegspunkt mit Quellenverweis. | Ist ein Proposal, nicht als Sichtbarkeitsgarantie zu verstehen. |
| Öffentliche Crawl-Dateien | Erleichtern einer Suchmaschine den Zugriff auf erlaubte, öffentliche Inhalte. | `robots.txt` steuert Crawling, schützt aber keine vertraulichen Inhalte. [3] |
| Spezifische Inhalte | Mannschaften, Trainingszeiten, Spieltage und Ansprechpartner bieten konkrete Antwortquellen. | Müssen nach Livegang redaktionell gepflegt und datenschutzrechtlich geprüft werden. |

## Umsetzung in der neuen Seite

Die Umsetzung priorisiert die sichtbare Referenz: dunkler Vereinsheader, warmes Elfenbein, große serifengeführte Überschriften, schwarze Handlungsbuttons, das abgedunkelte Mannschaftsfoto, ein ruhiges Beitragsraster und ein zentrierter Cookie-Dialog. Gleichzeitig sind die Inhalte nicht nur bildbasiert, sondern als Textabschnitte zugänglich. Diese Kombination stärkt Nutzbarkeit und Auffindbarkeit gleichermaßen.

Die strukturierte Information wird im initialen HTML ausgeliefert, damit sie nicht von der Ausführung des Frontends abhängt. Google empfiehlt, strukturierte Daten gegen den Rich Results Test und per URL-Prüfung zu kontrollieren; außerdem müssen die betreffenden Seiten für Google erreichbar sein und dürfen nicht durch Robots-Regeln, `noindex` oder Logins blockiert werden. [4]

Die Interaktionsdetails folgen aktuellen WCAG-2.2-Leitlinien: klare Fokusdarstellung, bedienbare Steuerelemente, ausreichend große Aktionsflächen und eine reduzierte Animationseinstellung. WCAG 2.2 empfiehlt moderne Anforderungen auch dann als Ziel, wenn eine Richtlinie noch ältere WCAG-Versionen nennt. [5]

## Vor dem Livegang

Die folgenden Punkte benötigen Angaben oder Zugänge, die im statischen Projekt nicht verlässlich erzeugt werden können. Die Liste ist priorisiert, damit die neue Seite nicht mit falschen lokalen Daten online geht.

| Priorität | Maßnahme | Verantwortliche Information |
| --- | --- | --- |
| Hoch | Finale Domain in `canonical`, `sitemap.xml`, JSON-LD-URLs und `llms.txt` prüfen bzw. ersetzen. | Endgültige Produktionsdomain. |
| Hoch | Reale Vereinsadresse, Telefonnummer, Trainingszeiten und Ansprechpersonen verifizieren, dann ergänzen. | Vom Verein freigegebene Stammdaten. |
| Hoch | Consent-Tool gegen die tatsächlich eingebundenen Dienste konfigurieren. | Verwendete Analyse-, Karten-, Video- und Drittanbieter. |
| Mittel | Google Search Console und Bing Webmaster Tools anbinden, Sitemap einreichen und Indexierung kontrollieren. | Eigentumsnachweis bzw. Zugriff auf die Domain. |
| Mittel | Pro Mannschaft und Neuigkeit eigenständige, redaktionell gepflegte Seiten mit Veröffentlichungsdatum anlegen. | Verifizierte Inhalte und Bildrechte. |
| Mittel | Tests mit Tastatur, Screenreader und mehreren Browsern durchführen. | Live-URL und ggf. Accessibility-Review. |

## Qualitätsnachweis des Prototyps

| Prüfung | Ergebnis |
| --- | --- |
| TypeScript-Prüfung | Erfolgreich (`pnpm check`). |
| Produktions-Build | Erfolgreich (`pnpm build`). |
| `robots.txt` | Vorhanden und über die Entwicklungsumgebung abrufbar. |
| `sitemap.xml` | Vorhanden und über die Entwicklungsumgebung abrufbar. |
| `llms.txt` | Vorhanden und über die Entwicklungsumgebung abrufbar. |
| JSON-LD | In der initialen HTML-Kopfdatei eingebettet. |
| Desktopansicht | Visuell geprüft; Gestaltung folgt dem verbindlichen Referenzsystem. |
| Mobilansicht | Cookie-Dialog und Hero-Bereich bei 390 × 844 px visuell geprüft. |

## Referenzen

[1] [llms.txt: The /llms.txt file, v2](https://llmstxt.org/)  
[2] [Google Search Central: Organization structured data](https://developers.google.com/search/docs/appearance/structured-data/organization)  
[3] [Google Search Central: Introduction to robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro)  
[4] [Google Search Central: Local Business structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business)  
[5] [W3C: Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/)

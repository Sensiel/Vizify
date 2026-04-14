import { FilterPanel } from "./components/FilterPanel";
import { InfoCard } from "./components/InfoCard";
import { SectionShell } from "./components/SectionShell";
import { StackItem } from "./components/StackItem";
import { VisualizationCard } from "./components/VisualizationCard";

const keyQuestions = [
  "Which title patterns appear most often in high-performing videos?",
  "Do some categories exploit metadata better than others?",
  "Does publish time matter?",
  "Are there outliers with unusual engagement patterns?",
];

const visualizations = [
  {
    title: "Sketch 1",
    description: "Placeholder for a future visualization to be defined by the team.",
  },
  {
    title: "Sketch 2",
    description: "Placeholder for a future visualization to be defined by the team.",
  },
  {
    title: "Sketch 3",
    description: "Placeholder for a future visualization to be defined by the team.",
  },
  {
    title: "Sketch 4",
    description: "Placeholder for a future visualization to be defined by the team.",
  },
];

const informationCards = [
  {
    title: "MVP",
    body: "A functional dashboard with one global performance view, one comparison view, and a first layer of simple filters.",
  },
  {
    title: "Interactions",
    body: "Hover, brushing, clicking, filtering, and details on demand will connect the overview to more specific slices of the dataset.",
  },
  {
    title: "Extensions",
    body: "Possible next layers include NLP on titles, clickbait detection, metadata scoring, and animated transitions between views.",
  },
];

const stack = ["D3.js", "React", "HTML/CSS", "JavaScript"];

const teamMembers = [
  { name: "Imane Lahrichi", sciper: "360854" },
  { name: "Imane Raihane", sciper: "362230" },
  { name: "Victor Zablocki", sciper: "361602" },
];

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="brand-block">
          <p className="eyebrow">COM-480 Milestone 2 Prototype</p>
          <h1>YouTube Trending Metadata Explorer</h1>
          <p className="site-subtitle">
            A visual study of how creators optimize metadata to improve visibility on
            YouTube&apos;s trending page.
          </p>
        </div>
        <nav className="top-nav" aria-label="Primary">
          <a href="#overview">Overview</a>
          <a href="#dashboard">Dashboard</a>
          <a href="#method">Method</a>
          <a href="#prototype">Prototype</a>
        </nav>
      </header>

      <main>
        <SectionShell id="overview" className="hero-section">
          <div className="hero-copy">
            <p className="section-kicker">Overview</p>
            <h2>How do YouTubers optimize metadata to reach the trending page?</h2>
            <p className="hero-text">
              This prototype frames the project as an exploration of creator behavior:
              titles, tags, categories, publish timing, and engagement patterns that may
              shape visibility across countries and content niches.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#dashboard">
                Explore prototype
              </a>
              <a className="button button-secondary" href="#method">
                Read methodology
              </a>
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-badge">Research framing</div>
            <p>
              The site is designed to move from overview to comparison, then into more
              detailed metadata signals and temporal patterns.
            </p>
            <div className="hero-metrics">
              <div>
                <span>11</span>
                <p>countries in scope</p>
              </div>
              <div>
                <span>4</span>
                <p>core analysis lenses</p>
              </div>
              <div>
                <span>1</span>
                <p>extensible dashboard shell</p>
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell title="Key Questions" subtitle="What the prototype is built to explore.">
          <div className="question-grid">
            {keyQuestions.map((question) => (
              <article className="question-card" key={question}>
                <span className="question-index">Question</span>
                <p>{question}</p>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="dashboard"
          title="Dashboard Skeleton"
          subtitle="UI structure for the future interactive analysis layer."
        >
          <div className="dashboard-layout">
            <aside className="dashboard-sidebar">
              <FilterPanel />
            </aside>

            <div className="dashboard-main">
              <div className="visualization-grid">
                {visualizations.map((item) => (
                  <VisualizationCard
                    key={item.title}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>

              <div className="info-grid">
                {informationCards.map((card) => (
                  <InfoCard key={card.title} title={card.title} body={card.body} />
                ))}
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell
          id="method"
          title="Method and Structure"
          subtitle="The narrative logic behind the website."
        >
          <div className="method-layout">
            <div className="method-copy card-surface">
              <p>
                The site follows a progressive analytical logic: overview first to establish
                the main patterns, zoom and filter to isolate countries, categories, and
                keyword signals, then details on demand for interpreting specific outliers
                or metadata strategies.
              </p>
              <p>
                Future data loading, filter state, D3 rendering, and linked interactions
                will plug into this structure without changing the global layout.
              </p>
            </div>

            <div className="stack-grid">
              {stack.map((item) => (
                <StackItem key={item} label={item} />
              ))}
            </div>
          </div>
        </SectionShell>

        <SectionShell
          id="prototype"
          title="Prototype Status"
          subtitle="Current state of the milestone prototype."
        >
          <div className="status-card card-surface">
            <p>
              This is the initial prototype skeleton. The layout, sections, filter panel,
              and visualization placeholders are ready.
            </p>
            <p>
              The next step is to connect the dataset and replace the placeholders with
              real D3 charts, wired to shared filter state and linked interactions.
            </p>
          </div>
        </SectionShell>

        <SectionShell
          title="About Us"
          subtitle="Project team for COM-480 Data Visualization."
        >
          <div className="info-grid">
            {teamMembers.map((member) => (
              <article key={member.sciper} className="info-card card-surface">
                <h3>{member.name}</h3>
                <p>SCIPER: {member.sciper}</p>
              </article>
            ))}
          </div>
        </SectionShell>
      </main>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { CARDS, SECTIONS } from "./data/cards.js";
import CardList from "./components/CardList.jsx";
import CardDetail from "./components/CardDetail.jsx";

export default function App() {
  const [activeId, setActiveId] = useState(null);

  const activeCard = CARDS.find((c) => c.id === activeId) || null;

  return (
    <div className="app-shell">
      <header className="app-header">
        <h1 className="wordmark">
          orat<span>ion</span>
        </h1>
        <div className="subline">Session cards — for the teacher only</div>
      </header>

      <div className="main-layout">
        <nav className={`card-rail ${activeCard ? "hide-on-mobile-when-detail" : ""}`}>
          {SECTIONS.map((section) => (
            <CardList
              key={section.id}
              section={section}
              cards={CARDS.filter((c) => c.section === section.id)}
              activeId={activeId}
              onSelect={setActiveId}
            />
          ))}
        </nav>

        <main className="detail-pane">
          {activeCard ? (
            <div style={{ width: "100%" }}>
              <button
                className="back-button show"
                onClick={() => setActiveId(null)}
              >
                ← back to all cards
              </button>
              <CardDetail card={activeCard} />
            </div>
          ) : (
            <div className="empty-state">
              Pick a card from the list to display it full-screen for class.
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

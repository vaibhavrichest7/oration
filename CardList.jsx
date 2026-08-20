import React from "react";

export default function CardList({ section, cards, activeId, onSelect }) {
  if (cards.length === 0) return null;

  return (
    <div>
      <div className="section-tab">
        <div className="label">{section.label}</div>
        <div className="note">{section.note}</div>
      </div>

      {cards.map((card) => (
        <button
          key={card.id}
          className={`card-tile ${activeId === card.id ? "active" : ""}`}
          onClick={() => onSelect(card.id)}
        >
          <div className="tile-title">{card.title}</div>
          <div className="tile-meta">
            Pod {card.podSize} · {card.roles.length} role
            {card.roles.length > 1 ? "s" : ""}
          </div>
        </button>
      ))}
    </div>
  );
}

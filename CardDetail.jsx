import React from "react";

export default function CardDetail({ card }) {
  return (
    <div className="index-card">
      <div className="eyebrow">{card.priority || "Session card"}</div>
      <h2>{card.title}</h2>

      <div className="stamp-row">
        <span className="stamp pod">Pod {card.podSize}</span>
        {card.roles.map((role) => (
          <span className="stamp" key={role}>
            {role.split(" (")[0]}
          </span>
        ))}
      </div>

      <p className="description">{card.description}</p>

      <div className="roles-block">
        <div className="heading">Roles</div>
        <ul>
          {card.roles.map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>
      </div>

      {card.facilitatorNote && (
        <div className="facilitator-note">
          <div className="heading">Facilitator note</div>
          <p>{card.facilitatorNote}</p>
        </div>
      )}
    </div>
  );
}

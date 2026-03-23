import React from "react";

function PokemonStats({ stats }) {
  return (
    <div>
      {stats?.map((statObj) => (
        <div key={statObj.stat.name}>
          <span>{statObj.stat.name}</span>
          <div>
            <div
              className="stat-bar"
              style={{ width: `${(statObj.base_stat / 255) * 100}%` }}
            />
          </div>
          <span>{statObj.base_stat}</span>
        </div>
      ))}
    </div>
  );
}

export default PokemonStats;

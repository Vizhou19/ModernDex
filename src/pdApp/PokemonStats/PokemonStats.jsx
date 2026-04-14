import { useEffect, useRef } from "react";
import { animate } from "animejs";
import "./PokemonStats.css";

function PokemonStats({ stats }) {
  const statBarsRef = useRef([]);

  useEffect(
    function baseStatBar() {
      if (!stats) return;

      statBarsRef.current.forEach((bar) => {
        if (bar) bar.style.width = "0%";
      });

      stats.forEach((statObj, index) => {
        const percentage = (statObj.base_stat / 255) * 100;

        if (!statBarsRef.current[index]) return;

        statBarsRef.current[index].setAttribute("data-index", index);

        animate(`[data-index="${index}"]`, {
          width: `${percentage}%`,
          duration: 1000,
          delay: index * 100,
          easing: "easeOut",
        });
      });
    },
    [stats],
  );

  const getStatColor = (value) => {
    if (value <= 50) return "#ff4444";
    if (value <= 100) return "#ffaa00";
    return "#44dd44";
  };

  // * Adds up each stats points together
  const total =
    stats?.reduce((sum, statObj) => sum + statObj.base_stat, 0) ?? 0;

  return (
    <div className="stats">
      <h3>Stats:</h3>
      {stats?.map((statObj, index) => (
        <div className="stat-objects" key={statObj.stat.name}>
          <span className="stats-name">{statObj.stat.name}:</span>
          <div className="stat-track">
            <div
              ref={(el) => (statBarsRef.current[index] = el)}
              className="stat-bar"
              style={{
                width: "0%",
                backgroundColor: getStatColor(statObj.base_stat),
              }}
            />
          </div>
          <span className="stats-total">{statObj.base_stat}</span>
        </div>
      ))}
      <div className="total-row">
        <span id="total">Total:</span>
        <span id="total-value">{total}</span>
      </div>
    </div>
  );
}

export default PokemonStats;

import React, { useState } from "react";
import {
  FaMountain,
  FaHome,
  FaRulerCombined,
  FaVectorSquare,
} from "react-icons/fa";

import "../styles/Conversion.css";

export default function Conversion() {
  const [active, setActive] = useState("bigha");

  const [bigha, setBigha] = useState("");
  const [kattha, setKattha] = useState("");
  const [dhur, setDhur] = useState("");

  const [ropani, setRopani] = useState("");
  const [aana, setAana] = useState("");
  const [paisa, setPaisa] = useState("");
  const [dam, setDam] = useState("");

  const [sqm, setSqm] = useState("");
  const [sqft, setSqft] = useState("");

  const [result, setResult] = useState({
    bigha: 0,
    kattha: 0,
    dhur: 0,
    ropani: 0,
    aana: 0,
    paisa: 0,
    dam: 0,
    sqm: 0,
    sqft: 0,
  });

  const convert = () => {
    let totalSqft = 0;

    // Bigha System
    if (active === "bigha") {
      totalSqft =
        (Number(bigha) || 0) * 72900 +
        (Number(kattha) || 0) * 3645 +
        (Number(dhur) || 0) * 182.25;
    }

    // Ropani System
    if (active === "ropani") {
      totalSqft =
        (Number(ropani) || 0) * 5476 +
        (Number(aana) || 0) * 342.25 +
        (Number(paisa) || 0) * 85.5625 +
        (Number(dam) || 0) * 21.390625;
    }

    // Square Meter
    if (active === "sqm") {
      totalSqft = (Number(sqm) || 0) * 10.7639;
    }

    // Square Feet
    if (active === "sqft") {
      totalSqft = Number(sqft) || 0;
    }

    // Bigha Breakdown
    const totalDhur = totalSqft / 182.25;

    const b = Math.floor(totalDhur / 400);
    const remB = totalDhur % 400;

    const k = Math.floor(remB / 20);
    const d = remB % 20;

    // Ropani Breakdown
    const totalDam = totalSqft / 21.390625;

    const r = Math.floor(totalDam / 256);
    const remR = totalDam % 256;

    const a = Math.floor(remR / 16);
    const remA = remR % 16;

    const p = Math.floor(remA / 4);
    const dm = remA % 4;

    setResult({
      bigha: b,
      kattha: k,
      dhur: d.toFixed(2),

      ropani: r,
      aana: a,
      paisa: p,
      dam: dm.toFixed(2),

      sqm: (totalSqft / 10.7639).toFixed(2),
      sqft: totalSqft.toFixed(2),
    });
  };

  return (
    <section className="sr-conversion">

      <div className="sr-conversion-container">

        {/* LEFT */}
        <div className="sr-conversion-left">

          <h2>Land Unit Calculator</h2>
          <p>
            Convert Bigha, Ropani, Square Meter and Square Feet instantly.
          </p>

          <div className="sr-tabs">
            <button
              className={active === "bigha" ? "active" : ""}
              onClick={() => setActive("bigha")}
            >
              Bigha
            </button>

            <button
              className={active === "ropani" ? "active" : ""}
              onClick={() => setActive("ropani")}
            >
              Ropani
            </button>

            <button
              className={active === "sqm" ? "active" : ""}
              onClick={() => setActive("sqm")}
            >
              Square Meter
            </button>

            <button
              className={active === "sqft" ? "active" : ""}
              onClick={() => setActive("sqft")}
            >
              Square Feet
            </button>
          </div>

          {active === "bigha" && (
            <div className="sr-inputs">
              <input
                type="number"
                placeholder="Bigha"
                value={bigha}
                onChange={(e) => setBigha(e.target.value)}
              />

              <input
                type="number"
                placeholder="Kattha"
                value={kattha}
                onChange={(e) => setKattha(e.target.value)}
              />

              <input
                type="number"
                placeholder="Dhur"
                value={dhur}
                onChange={(e) => setDhur(e.target.value)}
              />
            </div>
          )}

          {active === "ropani" && (
            <div className="sr-inputs">
              <input
                type="number"
                placeholder="Ropani"
                value={ropani}
                onChange={(e) => setRopani(e.target.value)}
              />

              <input
                type="number"
                placeholder="Aana"
                value={aana}
                onChange={(e) => setAana(e.target.value)}
              />

              <input
                type="number"
                placeholder="Paisa"
                value={paisa}
                onChange={(e) => setPaisa(e.target.value)}
              />

              <input
                type="number"
                placeholder="Dam"
                value={dam}
                onChange={(e) => setDam(e.target.value)}
              />
            </div>
          )}

          {active === "sqm" && (
            <input
              type="number"
              placeholder="Square Meter"
              value={sqm}
              onChange={(e) => setSqm(e.target.value)}
            />
          )}

          {active === "sqft" && (
            <input
              type="number"
              placeholder="Square Feet"
              value={sqft}
              onChange={(e) => setSqft(e.target.value)}
            />
          )}

          <button
            className="sr-convert-btn"
            onClick={convert}
          >
            Convert Land Units
          </button>
        </div>

        {/* RIGHT */}
        <div className="sr-conversion-right">

          <div className="sr-result-card">
            <FaMountain />
            <h3>Bigha System</h3>

            <p>{result.bigha} Bigha</p>
            <p>{result.kattha} Kattha</p>
            <p>{result.dhur} Dhur</p>
          </div>

          <div className="sr-result-card">
            <FaHome />
            <h3>Ropani System</h3>

            <p>{result.ropani} Ropani</p>
            <p>{result.aana} Aana</p>
            <p>{result.paisa} Paisa</p>
            <p>{result.dam} Dam</p>
          </div>

          <div className="sr-result-card">
            <FaRulerCombined />
            <h3>Square Meter</h3>

            <p>{result.sqm} sq.m</p>
          </div>

          <div className="sr-result-card">
            <FaVectorSquare />
            <h3>Square Feet</h3>

            <p>{result.sqft} sq.ft</p>
          </div>

        </div>

      </div>
    </section>
  );
}
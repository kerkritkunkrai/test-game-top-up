const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "..", "public", "games");

const gameLogos = {
  "rov.svg": { bg: "#1a1a2e", text: "RoV", color: "#ffd700" },
  "free-fire.svg": { bg: "#ff6b00", text: "FF", color: "#ffffff" },
  "mobile-legends.svg": { bg: "#1e3a5f", text: "ML", color: "#00bfff" },
  "pubg.svg": { bg: "#f4a100", text: "PUBG", color: "#1a1a1a" },
  "genshin.svg": { bg: "#4a90d9", text: "GI", color: "#ffffff" },
  "valorant.svg": { bg: "#ff4655", text: "VAL", color: "#ffffff" },
  "zzz.svg": { bg: "#2d2d2d", text: "ZZZ", color: "#ffee00" },
  "hsr.svg": { bg: "#3d2b6e", text: "HSR", color: "#c8a2ff" },
  "steam.svg": { bg: "#1b2838", text: "STEAM", color: "#ffffff" },
  "playstation.svg": { bg: "#003791", text: "PSN", color: "#ffffff" },
  "nintendo.svg": { bg: "#e60012", text: "NIN", color: "#ffffff" },
  "roblox.svg": { bg: "#393b3d", text: "RBX", color: "#ffffff" },
};

const currencyIcons = {
  "rov-currency.svg": { color: "#ffd700", symbol: "C" },
  "ff-currency.svg": { color: "#00bfff", symbol: "D" },
  "ml-currency.svg": { color: "#00bfff", symbol: "D" },
  "pubg-currency.svg": { color: "#f4a100", symbol: "U" },
  "genshin-currency.svg": { color: "#a78bfa", symbol: "G" },
  "valorant-currency.svg": { color: "#ff4655", symbol: "V" },
  "zzz-currency.svg": { color: "#ffee00", symbol: "M" },
  "hsr-currency.svg": { color: "#c8a2ff", symbol: "O" },
  "steam-currency.svg": { color: "#66c0f4", symbol: "$" },
  "ps-currency.svg": { color: "#003791", symbol: "P" },
  "nintendo-currency.svg": { color: "#e60012", symbol: "N" },
  "roblox-currency.svg": { color: "#00b06f", symbol: "R" },
};

function logoSvg({ bg, text, color }) {
  const fontSize = text.length > 3 ? 28 : text.length > 2 ? 36 : 44;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img">
  <rect width="200" height="200" rx="24" fill="${bg}"/>
  <text x="100" y="115" text-anchor="middle" font-family="Arial Black, sans-serif" font-size="${fontSize}" font-weight="900" fill="${color}">${text}</text>
</svg>`;
}

function currencySvg({ color, symbol }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img">
  <circle cx="32" cy="32" r="28" fill="${color}" opacity="0.15"/>
  <circle cx="32" cy="32" r="22" fill="${color}"/>
  <text x="32" y="40" text-anchor="middle" font-family="Arial Black, sans-serif" font-size="24" font-weight="900" fill="#ffffff">${symbol}</text>
</svg>`;
}

fs.mkdirSync(publicDir, { recursive: true });

for (const [filename, config] of Object.entries(gameLogos)) {
  fs.writeFileSync(path.join(publicDir, filename), logoSvg(config));
}

for (const [filename, config] of Object.entries(currencyIcons)) {
  fs.writeFileSync(path.join(publicDir, filename), currencySvg(config));
}

console.log("Generated", Object.keys(gameLogos).length + Object.keys(currencyIcons).length, "SVG assets");

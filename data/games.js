/**
 * badge: 'new' | 'th' | 'cn' | 'hot' | 'promo' | '' (ว่าง = ไม่แสดง)
 * category: 'popular' | 'newGames' | 'topUpCards'
 * logo: รูปเริ่มต้น (SVG ตัวอักษร) — ใช้เมื่อไม่มี image
 * image: รูปเกมจริง (optional) — วางไฟล์ที่ public/games/{slug}/img/
 *        เช่น image: "/games/rov/img/rov.png"
 */
export const gameCategories = {
  popular: {
    id: "popular",
    anchor: "popular",
    title: "ยอดนิยม",
    subtitle: "เกมที่ผู้เล่นเติมบ่อยที่สุด",
  },
  newGames: {
    id: "newGames",
    anchor: "new-games",
    title: "เกมใหม่",
    subtitle: "เกมที่เพิ่งเปิดให้บริการ",
  },
  topUpCards: {
    id: "topUpCards",
    anchor: "top-up-cards",
    title: "บัตรเติมเกม",
    subtitle: "บัตรเงินสดดิจิทัล ส่งโค้ดทันที",
  },
};

/** @type {Record<string, { label: string; className: string }>} */
export const badgeConfig = {
  new: { label: "NEW", className: "bg-emerald-500 text-white" },
  th: { label: "TH", className: "bg-blue-600 text-white" },
  cn: { label: "CN", className: "bg-red-700 text-white" },
  hot: { label: "HOT", className: "bg-primary text-white" },
  promo: { label: "PROMO", className: "bg-amber-500 text-black" },
};

export const games = [
  {
    id: "rov",
    slug: "rov",
    name: "RoV",
    fullName: "Arena of Valor",
    logo: "/games/img/rov.png",
    badge: "hot",
    categories: ["popular"],
  },
  {
    id: "free-fire",
    slug: "free-fire",
    name: "Free Fire",
    fullName: "Garena Free Fire",
    logo: "/games/img/ff.png",
    badge: "th",
    categories: ["popular"],
  },
  {
    id: "mobile-legends",
    slug: "mobile-legends",
    name: "MLBB",
    fullName: "Mobile Legends",
    logo: "/games/mobile-legends.svg",
    badge: "hot",
    categories: ["popular"],
  },
  {
    id: "pubg-mobile",
    slug: "pubg-mobile",
    name: "PUBG",
    fullName: "PUBG Mobile",
    logo: "/games/pubg.svg",
    badge: "",
    categories: ["popular"],
  },
  {
    id: "genshin-impact",
    slug: "genshin-impact",
    name: "Genshin",
    fullName: "Genshin Impact",
    logo: "/games/genshin.svg",
    badge: "cn",
    categories: ["popular", "newGames"],
  },
  {
    id: "valorant",
    slug: "valorant",
    name: "Valorant",
    fullName: "Valorant",
    logo: "/games/valorant.svg",
    badge: "new",
    categories: ["newGames"],
  },
  {
    id: "zenless-zone-zero",
    slug: "zenless-zone-zero",
    name: "ZZZ",
    fullName: "Zenless Zone Zero",
    logo: "/games/zzz.svg",
    badge: "new",
    categories: ["newGames"],
  },
  {
    id: "honkai-star-rail",
    slug: "honkai-star-rail",
    name: "HSR",
    fullName: "Honkai: Star Rail",
    logo: "/games/hsr.svg",
    badge: "cn",
    categories: ["newGames"],
  },
  {
    id: "steam-wallet",
    slug: "steam-wallet",
    name: "Steam",
    fullName: "Steam Wallet",
    logo: "/games/steam.svg",
    badge: "",
    categories: ["topUpCards"],
  },
  {
    id: "playstation",
    slug: "playstation",
    name: "PSN",
    fullName: "PlayStation Store",
    logo: "/games/playstation.svg",
    badge: "promo",
    categories: ["topUpCards"],
  },
  {
    id: "nintendo-eshop",
    slug: "nintendo-eshop",
    name: "Nintendo",
    fullName: "Nintendo eShop",
    logo: "/games/nintendo.svg",
    badge: "",
    categories: ["topUpCards"],
  },
  {
    id: "roblox",
    slug: "roblox",
    name: "Roblox",
    fullName: "Roblox",
    logo: "/games/roblox.svg",
    badge: "hot",
    categories: ["popular", "topUpCards"],
  },
];

/** path มาตรฐานสำหรับวางรูปเกม: public/games/{slug}/img/{filename} */
export function gameImagePath(slug, filename = slug) {
  return `/games/${slug}/img/${filename}`;
}

/** รูปที่แสดง — ใช้ image ถ้ามี ไม่งั้น fallback เป็น logo (ตัวอักษร) */
export function getGameLogo(game) {
  return game.image ?? game.logo;
}

export function getGamesByCategory(categoryId) {
  return games.filter((game) => game.categories.includes(categoryId));
}

export function getGameBySlug(slug) {
  return games.find((game) => game.slug === slug) ?? null;
}

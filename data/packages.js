/**
 * currencyName: หน่วยในเกม (คูปอง, เพชร, เหรียญ ฯลฯ)
 * packages: แก้ amount, bonus, price ได้ตามต้องการ
 */
export const gamePackages = {
  rov: {
    currencyName: "คูปอง",
    currencyIcon: "/games/img/currency/rov_c.png",
    uidLabel: "UID",
    uidPlaceholder: "กรอก UID ของคุณใน RoV",
    uidHelp: "UID อยู่ที่หน้าโปรไฟล์ในเกม",
    packages: [
      { id: "rov-60", amount: 60, bonus: 0, price: 29, popular: false },
      { id: "rov-330", amount: 330, bonus: 30, price: 129, popular: false },
      { id: "rov-660", amount: 660, bonus: 80, price: 259, popular: true },
      { id: "rov-1410", amount: 1410, bonus: 200, price: 519, popular: false },
      { id: "rov-2840", amount: 2840, bonus: 450, price: 999, popular: false },
      { id: "rov-6000", amount: 6000, bonus: 1000, price: 1990, popular: false },
    ],
  },
  "free-fire": {
    currencyName: "เพชร",
    currencyIcon: "/games/ff-currency.svg",
    uidLabel: "Player ID",
    uidPlaceholder: "กรอก Player ID",
    uidHelp: "Player ID อยู่ที่หน้าโปรไฟล์ในเกม",
    packages: [
      { id: "ff-100", amount: 100, bonus: 0, price: 35, popular: false },
      { id: "ff-310", amount: 310, bonus: 30, price: 99, popular: true },
      { id: "ff-520", amount: 520, bonus: 60, price: 159, popular: false },
      { id: "ff-1060", amount: 1060, bonus: 150, price: 319, popular: false },
    ],
  },
  "mobile-legends": {
    currencyName: "เพชร",
    currencyIcon: "/games/ml-currency.svg",
    uidLabel: "User ID & Zone ID",
    uidPlaceholder: "กรอก User ID",
    uidHelp: "User ID และ Zone ID อยู่ที่หน้าโปรไฟล์",
    packages: [
      { id: "ml-86", amount: 86, bonus: 0, price: 29, popular: false },
      { id: "ml-172", amount: 172, bonus: 17, price: 59, popular: false },
      { id: "ml-344", amount: 344, bonus: 40, price: 119, popular: true },
      { id: "ml-706", amount: 706, bonus: 90, price: 239, popular: false },
    ],
  },
  "pubg-mobile": {
    currencyName: "UC",
    currencyIcon: "/games/pubg-currency.svg",
    uidLabel: "Character ID",
    uidPlaceholder: "กรอก Character ID",
    uidHelp: "Character ID อยู่ที่หน้าโปรไฟล์ในเกม",
    packages: [
      { id: "pubg-60", amount: 60, bonus: 0, price: 35, popular: false },
      { id: "pubg-325", amount: 325, bonus: 25, price: 179, popular: true },
      { id: "pubg-660", amount: 660, bonus: 60, price: 349, popular: false },
    ],
  },
  "genshin-impact": {
    currencyName: "Genesis Crystal",
    currencyIcon: "/games/genshin-currency.svg",
    uidLabel: "UID",
    uidPlaceholder: "กรอก UID 9 หลัก",
    uidHelp: "UID อยู่ที่มุมล่างขวาหน้า Paimon Menu",
    packages: [
      { id: "gi-60", amount: 60, bonus: 0, price: 35, popular: false },
      { id: "gi-300", amount: 300, bonus: 30, price: 179, popular: true },
      { id: "gi-980", amount: 980, bonus: 110, price: 549, popular: false },
      { id: "gi-1980", amount: 1980, bonus: 260, price: 1090, popular: false },
    ],
  },
  valorant: {
    currencyName: "VP",
    currencyIcon: "/games/valorant-currency.svg",
    uidLabel: "Riot ID",
    uidPlaceholder: "กรอก Riot ID",
    uidHelp: "Riot ID ใช้สำหรับ Valorant PC",
    packages: [
      { id: "val-475", amount: 475, bonus: 0, price: 129, popular: false },
      { id: "val-1000", amount: 1000, bonus: 0, price: 259, popular: true },
      { id: "val-2050", amount: 2050, bonus: 0, price: 519, popular: false },
    ],
  },
  "zenless-zone-zero": {
    currencyName: "Monochrome",
    currencyIcon: "/games/zzz-currency.svg",
    uidLabel: "UID",
    uidPlaceholder: "กรอก UID 9 หลัก",
    uidHelp: "UID อยู่ที่มุมล่างขวาหน้าเมนู",
    packages: [
      { id: "zzz-60", amount: 60, bonus: 0, price: 35, popular: false },
      { id: "zzz-300", amount: 300, bonus: 30, price: 179, popular: true },
      { id: "zzz-980", amount: 980, bonus: 110, price: 549, popular: false },
    ],
  },
  "honkai-star-rail": {
    currencyName: "Oneiric Shard",
    currencyIcon: "/games/hsr-currency.svg",
    uidLabel: "UID",
    uidPlaceholder: "กรอก UID 9 หลัก",
    uidHelp: "UID อยู่ที่มุมล่างขวาหน้าเมนู",
    packages: [
      { id: "hsr-60", amount: 60, bonus: 0, price: 35, popular: false },
      { id: "hsr-300", amount: 300, bonus: 30, price: 179, popular: true },
      { id: "hsr-980", amount: 980, bonus: 110, price: 549, popular: false },
    ],
  },
  "steam-wallet": {
    currencyName: "Wallet Credit",
    currencyIcon: "/games/steam-currency.svg",
    uidLabel: "Steam Account",
    uidPlaceholder: "กรอก Steam Username หรือ Email",
    uidHelp: "ใช้สำหรับเติม Steam Wallet",
    packages: [
      { id: "steam-100", amount: 100, bonus: 0, price: 100, popular: false },
      { id: "steam-300", amount: 300, bonus: 0, price: 300, popular: true },
      { id: "steam-500", amount: 500, bonus: 0, price: 500, popular: false },
    ],
  },
  playstation: {
    currencyName: "Store Credit",
    currencyIcon: "/games/ps-currency.svg",
    uidLabel: "PSN ID",
    uidPlaceholder: "กรอก PSN ID",
    uidHelp: "ใช้สำหรับเติม PlayStation Store",
    packages: [
      { id: "ps-300", amount: 300, bonus: 0, price: 300, popular: false },
      { id: "ps-500", amount: 500, bonus: 0, price: 500, popular: true },
      { id: "ps-1000", amount: 1000, bonus: 0, price: 1000, popular: false },
    ],
  },
  "nintendo-eshop": {
    currencyName: "eShop Credit",
    currencyIcon: "/games/nintendo-currency.svg",
    uidLabel: "Nintendo Account",
    uidPlaceholder: "กรอก Nintendo Account Email",
    uidHelp: "ใช้สำหรับเติม Nintendo eShop",
    packages: [
      { id: "nin-300", amount: 300, bonus: 0, price: 300, popular: false },
      { id: "nin-500", amount: 500, bonus: 0, price: 500, popular: true },
    ],
  },
  roblox: {
    currencyName: "Robux",
    currencyIcon: "/games/roblox-currency.svg",
    uidLabel: "Username",
    uidPlaceholder: "กรอก Roblox Username",
    uidHelp: "Username ที่ใช้ใน Roblox",
    packages: [
      { id: "rbx-80", amount: 80, bonus: 0, price: 35, popular: false },
      { id: "rbx-400", amount: 400, bonus: 40, price: 159, popular: true },
      { id: "rbx-800", amount: 800, bonus: 100, price: 299, popular: false },
    ],
  },
};

export function getPackagesBySlug(slug) {
  return gamePackages[slug] ?? null;
}

/**
 * แก้ไข banners array นี้เพื่อเปลี่ยนแบนเนอร์โปรโมชั่น
 * background: CSS gradient หรือ URL รูปภาพ
 * image: รูปประกอบ (optional) — ใช้ next/image + lazy load
 */
export const banners = [
  {
    id: "promo-summer",
    title: "Summer Sale",
    subtitle: "เติมเกมลดสูงสุด 20% ทุกเกมยอดนิยม",
    background: "linear-gradient(135deg, #cc0000 0%, #7a0000 50%, #cc0000 100%)",
    image: "/games/img/banner/summer.jpg",
    link: "/games/rov",
    cta: "เติมเลย",
  },
  {
    id: "promo-new-game",
    title: "เกมใหม่มาแล้ว!",
    subtitle: "Zenless Zone Zero — รับโบนัสพิเศษครั้งแรก",
    background: "linear-gradient(135deg, #1a1a1a 0%, #cc0000 100%)",
    image: "/games/img/banner/zzz.webp",
    link: "/games/zenless-zone-zero",
    cta: "ดูรายละเอียด",
  },
  {
    id: "promo-card",
    title: "บัตรเติมเกม",
    subtitle: "Steam, PlayStation, Nintendo — ส่งโค้ดทันที",
    background: "linear-gradient(135deg, #cc0000 0%, #ffffff33 100%)",
    image: "/games/img/banner/giftcard.webp",
    link: "/#top-up-cards",
    cta: "เลือกบัตร",
  },
];

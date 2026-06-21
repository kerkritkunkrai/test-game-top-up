import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
      <p className="text-6xl font-black text-primary">404</p>
      <h1 className="mt-4 text-2xl font-bold text-foreground">ไม่พบหน้าที่ต้องการ</h1>
      <p className="mt-2 text-muted">เกมหรือหน้าที่คุณค้นหาอาจถูกลบหรือไม่มีอยู่</p>
      <Link
        href="/"
        className="mt-6 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
      >
        กลับหน้าหลัก
      </Link>
    </div>
  );
}

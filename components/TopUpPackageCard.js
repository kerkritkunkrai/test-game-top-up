"use client";

import Image from "next/image";
import { useState } from "react";

function formatPrice(price) {
  return new Intl.NumberFormat("th-TH", {
    style: "currency",
    currency: "THB",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export default function TopUpPackageCard({ pkg, currencyName, currencyIcon, selected, onSelect }) {
  return (
    <button
      type="button"
      className={`relative flex w-full flex-col rounded-xl border-2 bg-surface-elevated p-4 text-left transition-all hover:shadow-md ${
        selected
          ? "border-primary shadow-md shadow-primary/10"
          : "border-border hover:border-primary/50"
      }`}
      onClick={() => onSelect(pkg.id)}
      aria-pressed={selected}
    >
      {pkg.popular && (
        <span className="absolute -top-2.5 right-3 rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-bold uppercase text-white">
          แนะนำ
        </span>
      )}

      <div className="flex items-center gap-2">
        <div className="relative h-8 w-8 shrink-0">
          <Image
            src={currencyIcon}
            alt={currencyName}
            fill
            sizes="32px"
            className="object-contain"
            loading="lazy"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-lg font-bold text-foreground">
            {pkg.amount.toLocaleString("th-TH")}
            {pkg.bonus > 0 && (
              <span className="ml-1 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                +{pkg.bonus.toLocaleString("th-TH")}
              </span>
            )}
          </p>
          <p className="text-xs text-muted">{currencyName}</p>
        </div>
      </div>

      <div className="mt-3 border-t border-border pt-3">
        <p className="text-xl font-bold text-primary">{formatPrice(pkg.price)}</p>
      </div>
    </button>
  );
}

export function TopUpPackageGrid({ packages, currencyName, currencyIcon }) {
  const [selectedId, setSelectedId] = useState(
    packages.find((pkg) => pkg.popular)?.id ?? packages[0]?.id ?? null,
  );

  const selectedPackage = packages.find((pkg) => pkg.id === selectedId);

  return (
    <div>
      <h2 className="text-lg font-bold text-foreground">เลือกแพ็กเกจ</h2>
      <p className="mt-1 text-sm text-muted">เลือกจำนวน{currencyName}ที่ต้องการเติม</p>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3">
        {packages.map((pkg) => (
          <TopUpPackageCard
            key={pkg.id}
            pkg={pkg}
            currencyName={currencyName}
            currencyIcon={currencyIcon}
            selected={selectedId === pkg.id}
            onSelect={setSelectedId}
          />
        ))}
      </div>

      <button
        type="button"
        disabled={!selectedPackage}
        className="mt-6 w-full rounded-xl bg-primary py-3.5 text-base font-bold text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:min-w-[240px] sm:px-8"
      >
        {selectedPackage
          ? `ชำระเงิน ${formatPrice(selectedPackage.price)}`
          : "เลือกแพ็กเกจ"}
      </button>
    </div>
  );
}

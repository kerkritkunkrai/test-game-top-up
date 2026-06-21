"use client";

import { useEffect, useId, useState } from "react";

function getStorageKey(slug) {
  return `inblackm-uid-${slug}`;
}

export default function UidForm({ slug, uidLabel, uidPlaceholder, uidHelp }) {
  const checkboxId = useId();
  const [uid, setUid] = useState("");
  const [saveUid, setSaveUid] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(getStorageKey(slug));
    if (saved) {
      setUid(saved);
      setSaveUid(true);
    }
    setLoaded(true);
  }, [slug]);

  useEffect(() => {
    if (!loaded) return;

    const key = getStorageKey(slug);
    if (saveUid && uid.trim()) {
      localStorage.setItem(key, uid.trim());
    } else if (!saveUid) {
      localStorage.removeItem(key);
    }
  }, [uid, saveUid, slug, loaded]);

  return (
    <div className="rounded-xl border border-border bg-surface-elevated p-4 sm:p-6">
      <h2 className="text-lg font-bold text-foreground">ข้อมูลผู้เล่น</h2>
      <p className="mt-1 text-sm text-muted">กรอกข้อมูลเพื่อเติมเงินเข้าเกม</p>

      <div className="mt-4">
        <label htmlFor={`uid-${slug}`} className="mb-1.5 block text-sm font-medium text-foreground">
          {uidLabel}
        </label>
        <input
          id={`uid-${slug}`}
          type="text"
          value={uid}
          placeholder={uidPlaceholder}
          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20"
          onChange={(event) => setUid(event.target.value)}
          autoComplete="off"
        />
        {uidHelp && <p className="mt-1.5 text-xs text-muted">{uidHelp}</p>}
      </div>

      <label
        htmlFor={checkboxId}
        className="mt-4 flex cursor-pointer items-center gap-2.5 text-sm text-foreground"
      >
        <input
          id={checkboxId}
          type="checkbox"
          checked={saveUid}
          className="h-4 w-4 rounded border-border accent-primary"
          onChange={(event) => setSaveUid(event.target.checked)}
        />
        บันทึก UID
      </label>
    </div>
  );
}

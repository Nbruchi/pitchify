"use client";

import { X } from "lucide-react";
import Link from "next/link";

export default function SearchFormReset() {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) form.reset();
  };
  return (
    <button onClick={reset}>
      <Link href="/" className="text-white search-btn">
        <X className="size-5" />
      </Link>
    </button>
  );
}

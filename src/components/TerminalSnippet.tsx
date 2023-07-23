"use client";

import { useState } from "react";
import { MdCopyAll } from "react-icons/md";

type OS = "Linux" | "Windows";

type Props = Record<OS, string>;

export default function TerminalSnippet(snippets: Props) {
  const [selectedOS, setSelectedOS] = useState<OS>("Linux");

  const selectedSnippet = snippets[selectedOS];

  const copy = () => {
    navigator.clipboard.writeText(selectedSnippet);
  };

  return (
    <div>
      <div className="flex gap-4">
        {Object.keys(snippets).map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setSelectedOS(key as OS)}
            className={`rounded-md border px-2 py-1 ${
              selectedSnippet === key ? "border-gray-900" : "border-transparent"
            }`}
          >
            {key}
          </button>
        ))}
      </div>

      <pre className="relative bg-gray-100 text-left">
        <button
          type="button"
          onClick={copy}
          className="absolute right-0 top-0 p-2"
        >
          <MdCopyAll />
        </button>

        <code>{selectedSnippet}</code>
      </pre>
    </div>
  );
}

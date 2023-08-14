'use client';

import { useClickOutside } from '@/hooks/click';
import classNames from 'classnames';
import { useRef, useState } from 'react';
import { MdCopyAll } from 'react-icons/md';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import bashSyntax from 'react-syntax-highlighter/dist/esm/languages/hljs/bash';
import powershellSyntax from 'react-syntax-highlighter/dist/esm/languages/hljs/powershell';
import { obsidian } from 'react-syntax-highlighter/dist/esm/styles/hljs';

SyntaxHighlighter.registerLanguage('bash', bashSyntax);
SyntaxHighlighter.registerLanguage('powershell', powershellSyntax);

const systemLanguages = {
  linux: 'bash',
  mac: 'bash',
  windows: 'powershell',
} as const;

type System = keyof typeof systemLanguages;

type Props = Record<System, string>;

export default function TerminalSnippet(snippets: Props) {
  const [selectedSystem, setSelectedSystem] = useState<System>('linux');

  const selectedSnippet = snippets[selectedSystem];
  const selectedLanguage = systemLanguages[selectedSystem];

  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(selectedSnippet);
    setCopied(true);
  };

  const copyButtonRef = useRef<HTMLButtonElement>(null);

  useClickOutside(copyButtonRef, () => setCopied(false));

  return (
    <div className="space-y-1">
      <div className="flex gap-4 font-mono">
        {Object.keys(systemLanguages).map((system) => (
          <button
            key={system}
            type="button"
            onClick={() => setSelectedSystem(system as System)}
            className={`px-2 py-1 transition-colors duration-500 capitalize ${
              selectedSystem === system ? ' text-black' : 'text-gray-300 hover:text-gray-500'
            }`}
          >
            {system}
          </button>
        ))}
      </div>

      <div className="relative">
        <button
          type="button"
          ref={copyButtonRef}
          onClick={copy}
          title="Copy to clipboard"
          className={classNames(
            'absolute right-0 top-0 p-3 transition-colors',
            copied ? 'text-mia-green' : 'text-white hover:text-gray-300'
          )}
        >
          <MdCopyAll size={24} />
        </button>

        <SyntaxHighlighter language={selectedLanguage} style={obsidian}>
          {selectedSnippet}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

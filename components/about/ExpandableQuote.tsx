"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ExpandableQuoteProps {
  text: string;
  author: string;
}

const ExpandableQuote = ({ text, author }: ExpandableQuoteProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div
        className={`transition-all duration-500 ${
          expanded ? "" : "line-clamp-4 lg:line-clamp-none"
        }`}
      >
        <p className="text-base lg:text-xl font-light text-foreground leading-relaxed italic">
          {text}
        </p>
        <p className="mt-4 lg:mt-6 text-base font-medium text-accent">
          — {author}
        </p>
      </div>

      {/* "Ver más" button — only visible on mobile */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="lg:hidden flex items-center gap-1 mt-3 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
        aria-expanded={expanded}
      >
        {expanded ? (
          <>
            Ver menos <ChevronUp size={14} />
          </>
        ) : (
          <>
            Ver más <ChevronDown size={14} />
          </>
        )}
      </button>
    </div>
  );
};

export default ExpandableQuote;

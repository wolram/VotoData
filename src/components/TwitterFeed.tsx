"use client";

import { useEffect, useRef, useState } from "react";

interface TwitterFeedProps {
  username?: string;
  hashtag?: string;
  height?: number;
}

const TWITTER_SCRIPT_SRC = "https://platform.twitter.com/widgets.js";

export function TwitterFeed({
  username = "TSEjusbr",
  hashtag,
  height = 600,
}: TwitterFeedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scriptFailed, setScriptFailed] = useState(false);

  useEffect(() => {
    const existingScript = document.querySelector(
      `script[src="${TWITTER_SCRIPT_SRC}"]`
    );

    if (existingScript) {
      // Script already present; tell Twitter to re-scan
      const twttr = (window as unknown as Record<string, unknown>).twttr as
        | { widgets?: { load?: (el?: HTMLElement) => void } }
        | undefined;
      if (twttr?.widgets?.load && containerRef.current) {
        twttr.widgets.load(containerRef.current);
      }
      return;
    }

    const script = document.createElement("script");
    script.src = TWITTER_SCRIPT_SRC;
    script.async = true;
    script.charset = "utf-8";

    script.onerror = () => {
      setScriptFailed(true);
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup not strictly needed since Twitter script is idempotent
    };
  }, [username, hashtag]);

  const timelineHref = hashtag
    ? `https://twitter.com/hashtag/${encodeURIComponent(hashtag)}`
    : `https://twitter.com/${username}`;

  const timelineLabel = hashtag ? `#${hashtag}` : `@${username}`;

  if (scriptFailed) {
    return (
      <div className="border border-[var(--border-color-light)] rounded-[2px] p-6">
        <p className="font-mono text-xs opacity-60 mb-3">
          Não foi possível carregar o feed do X/Twitter.
        </p>
        <div className="flex flex-col gap-2">
          <a
            href={`https://twitter.com/TSEjusbr`}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-link"
          >
            @TSEjusbr no X
          </a>
          <a
            href={`https://twitter.com/VotoData`}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-link"
          >
            @VotoData no X
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="border border-[var(--border-color-light)] rounded-[2px] overflow-hidden"
      style={{ maxHeight: height }}
    >
      <a
        className="twitter-timeline"
        data-height={height}
        data-theme="light"
        href={timelineHref}
      >
        Tweets de {timelineLabel}
      </a>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

export default function useGetVisibleSections(sectionIDs: string[]): {
  activeIDs: string[];
} {
  const observer = useRef<IntersectionObserver | null>(null);
  const [activeIDs, setActiveIDs] = useState<string[]>([]);

  useEffect(() => {
    function handleObserver(entries: IntersectionObserverEntry[]) {
      entries.forEach((entry) => {
        setActiveIDs((currentIDs) => {
          if (entry?.isIntersecting) {
            if (!currentIDs.includes(entry.target.id)) {
              return [...currentIDs, entry.target.id];
            }
            return currentIDs;
          } else {
            return currentIDs.filter(
              (activeID) => activeID !== entry.target.id,
            );
          }
        });
      });
    }

    observer.current = new IntersectionObserver(handleObserver, {
      rootMargin: "-20% 0% -35% 0%",
    });

    const elements = sectionIDs
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    elements.forEach((element) => observer.current?.observe(element));
    return () => observer.current?.disconnect();
  }, [sectionIDs]);

  return { activeIDs };
}

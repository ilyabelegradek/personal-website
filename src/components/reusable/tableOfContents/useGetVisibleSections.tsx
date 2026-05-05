"use client";

import { useEffect, useRef, useState } from "react";

export default function useGetVisibleSections(sectionIDs: string[]): {
  activeIDs: string[];
} {
  const observer = useRef<IntersectionObserver | null>(null);
  const [activeIDs, setActiveIDs] = useState<string[]>([]);

  useEffect(() => {
    function handleObserver(entries: IntersectionObserverEntry[]) {
      setActiveIDs((currentIDs) => {
        const activeSet = new Set(currentIDs);

        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            activeSet.add(id);
          } else {
            activeSet.delete(id);
          }
        });

        return Array.from(activeSet);
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

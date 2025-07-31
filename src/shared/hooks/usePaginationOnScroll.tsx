import { useEffect, useRef } from "react";

const usePaginationOnScroll = ({ loadMore }: { loadMore: () => void }) => {
  const observerRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 1 }
    );

    const el = observerRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, [observerRef.current]);
  
  return { observerRef };
};

export default usePaginationOnScroll;

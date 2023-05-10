import { useEffect, useState } from "react";

function useScroll() {
  const [scrollOffset, setScrollOffset] = useState(0);
  const handleScroll = () => {
    setScrollOffset(window.scrollY / window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return scrollOffset;
}
export default useScroll;

import { useEffect, useState } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState([0, 0]);
  const handleMouseMove = (e) => {
    setMousePosition([
      e.clientX / window.innerWidth,
      e.clientY / window.innerWidth,
    ]);
  };

  useEffect(() => {
    document.addEventListener("pointermove", handleMouseMove);

    return () => {
      document.removeEventListener("pointermove", handleMouseMove);
    };
  }, []);

  return mousePosition;
};

export default useMousePosition;

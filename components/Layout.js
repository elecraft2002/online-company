import { Header } from "./Header";
import { Footer } from "./Footer";
import styled, { keyframes } from "styled-components";
import { useSpring } from "react-spring";
import { animated, config } from "@react-spring/web";
import useMousePosition from "../functions/useMousePosition";
import { useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

const rotation = keyframes`
from{
  transform:translate(-50%, -50%) rotate(0deg);
}
to{
  transform:translate(-50%, -50%) rotate(360deg);
}
`;

const StyledCircle = styled(animated.div)`
  width: 40vw;
  aspect-ratio: 0.75;
  background: white;
  position: relative;
  transform: translate(-50%, -50%);
  animation: ${rotation};
  animation-duration: 50s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.5;
  background: linear-gradient(0deg, red 0%, blue 100%);
`;

const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
const Background = () => {
  const [x, y] = useMousePosition();
  const [{ X, Y }, set] = useSpring(() => ({
    X: x,
    Y: y,
    config: config.molasses,
  }));
  useEffect(() => {
    set({ X: x, Y: y });
  }, [x, y]);
  return (
    <StyledBackground>
      <StyledCircle style={{ left: X, top: Y }} />
    </StyledBackground>
  );
};

export const Layout = ({
  alternateLanguages,
  navigation,
  settings,
  children,
}) => {
  return (
    <ParallaxProvider>
      <div className="text-slate-800">
        <Header
          alternateLanguages={alternateLanguages}
          navigation={navigation}
          settings={settings}
        />
        <main>{children}</main>
        <Background />
        <Footer settings={settings} />
      </div>
    </ParallaxProvider>
  );
};

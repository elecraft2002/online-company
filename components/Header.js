import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import { Bounded } from "./Bounded";
import { Heading } from "./Heading";
// import { HorizontalDivider } from "./HorizontalDivider";
import { Squash as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Logo from "../assets/svgs/Logo";
import Animation from "./Animation";

export const COLOR = {
  light: "#E6E6E6",
  dark: "#1E1E1E",
  primary: "#5386E4",
  secondary: "#FFBC42",
  secondary: "#FFBC42",
  tertiary: "#16DB65",
};

const StyledLinkContainer = styled.h3`
  font-size: 2rem;
  @media (min-width: 700px) {
    font-size: 5vw;
  }
  font-family: Kimberley;
  color: ${COLOR.dark};
  text-align: end;
`;
const StyledLinkLetter = styled.span`
  position: relative;
  display: inline-block;
  transition: 0.5s;
  transform-origin: center;
  ${({ hovered }) => {
    if (hovered === false)
      return css`
        opacity: 0.5;
      `;
    if (hovered)
      return css`
        filter: drop-shadow(0.025em 0.025em 0px ${COLOR.light});
      `;
  }}
`;
const NavItem = ({ text, hovered, visible }) => {
  return (
    <li>
      <StyledLinkContainer>
        {prismicH
          .asText(text)
          .split("")
          .map((letter, i) => {
            const multiply = i & 1 ? 1 : -1;
            return (
              <StyledLinkLetter
                delay={i * 500}
                visible={visible}
                hovered={hovered}
                key={i}
                style={{
                  transform:
                    hovered &&
                    `scale(1.5)  translate(${Math.random() * 20 * multiply}%, ${
                      Math.random() * 30 * multiply
                    }%) rotate(${Math.random() * 15 * multiply}deg)`,
                }}
              >
                <Animation visible={visible} delay={i * 50 + 200}>
                  {letter}
                </Animation>
              </StyledLinkLetter>
            );
          })}
      </StyledLinkContainer>
    </li>
  );
};
const StyledNavContainer = styled.header`
  position: fixed;
  margin: 0;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${COLOR.dark};
  z-index: 99999;
`;
const StyledHamburgerContainer = styled.div`
  background: ${COLOR.primary};
  border-radius: 50%;
  padding: 0.5rem;
  margin: 1rem;
  @media (max-width: 500px) {
    padding: 0.15rem;
  }
`;
const StyledLogo = styled(Logo)`
  margin: 1rem;
  height: 48px;
`;
const StyledNavContent = styled.div`
  overflow-y: visible;
  overflow-x: hidden;
  width: 100vw;
  border-bottom-left-radius: ${(props) => {
    return props.isOpenned ? "0px" : "50% 10vh";
  }};
  border-bottom-right-radius: ${(props) => {
    return props.isOpenned ? "0px" : "50% 10vh";
  }};
  height: ${(props) => {
    return props.isOpenned ? "100vh" : "0px";
  }};
  border-bottom: ${(props) => {
    return props.isOpenned
      ? "5rem solid " + COLOR.secondary
      : "0px solid " + COLOR.primary;
  }};
  top: 0;
  background: ${COLOR.light}a1;
  backdrop-filter: blur(50px);
  transition: 1s;
  padding-top: ${(props) => {
    return props.isOpenned ? "7rem" : "0px";
  }};
  position: relative;
  z-index: -1;
  /* &::after {
    content: "";
    width: 100%;
    height: 1rem;
    position: absolute;
    bottom: 0;
    left: 0;
    background: ${COLOR.primary};
    border-radius: 0 0 50% 50% ;
  } */
`;
const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  @media (min-width: 1000px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
  }
`;
const StyledNavRow = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: absolute;
`;
export const Header = ({ navigation, settings }) => {
  console.log(navigation);
  const [hovered, setHoverState] = useState(null);
  const [isOpenned, setNavState] = useState(false);
  useEffect(() => {
    console.log(isOpenned ? "hidded" : null);
    const body = document.querySelector("body");
    body.style.overflowY = isOpenned ? "hidded" : null;
  }, [isOpenned]);
  return (
    <StyledNavContainer>
      <StyledNavRow>
        <PrismicLink href={"/"}>
          <StyledLogo color={COLOR.primary} />
        </PrismicLink>
        <StyledHamburgerContainer>
          <Hamburger
            color={COLOR.light}
            onToggle={(state) => {
              setNavState(state);
            }}
          />
        </StyledHamburgerContainer>
      </StyledNavRow>
      <StyledNavContent isOpenned={isOpenned}>
        <StyledContentContainer>
          <ul>
            {navigation.data.links.map((link, index) => {
              return (
                <PrismicLink
                  field={link.link}
                  key={index}
                  onMouseEnter={() => setHoverState(index)}
                  onMouseLeave={() => setHoverState(null)}
                >
                  <NavItem
                    key={index}
                    visible={isOpenned}
                    text={link.label}
                    hovered={hovered === null ? null : hovered === index}
                  />
                </PrismicLink>
              );
            })}
          </ul>
        </StyledContentContainer>
      </StyledNavContent>
    </StyledNavContainer>
  );
};

// import * as prismicH from "@prismicio/helpers";
// import { PrismicLink, PrismicText } from "@prismicio/react";
// import { PrismicNextImage } from "@prismicio/next";

// import { linkResolver } from "../prismicio";
// import { Bounded } from "./Bounded";

// const FlagIcon = ({ lang }) => {
//   const code = lang.substring(3).toLowerCase();

//   return <span className={`fi fi-${code}`} />;
// };

// export const Header = ({ alternateLanguages = [], navigation, settings }) => {
//   return (
//     <Bounded as="header" yPadding="sm">
//       <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 leading-none">
//         <PrismicLink href="/">
//           {prismicH.isFilled.image(settings.data.logo) && (
//             <PrismicNextImage field={settings.data.logo} />
//           )}
//         </PrismicLink>
//         <nav>
//           <ul className="flex flex-wrap gap-6 md:gap-10">
//             {navigation.data?.links.map((item) => (
//               <li
//                 key={prismicH.asText(item.label)}
//                 className="font-semibold tracking-tight text-slate-800"
//               >
//                 <PrismicLink field={item.link}>
//                   <PrismicText field={item.label} />
//                 </PrismicLink>
//               </li>
//             ))}
//             {alternateLanguages.map((lang) => (
//               <li key={lang.lang}>
//                 <PrismicLink href={linkResolver(lang)} locale={lang.lang}>
//                   <span className="sr-only">{lang.lang}</span>
//                   <FlagIcon lang={lang.lang} />
//                 </PrismicLink>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>
//     </Bounded>
//   );
// };

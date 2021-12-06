import styled from "styled-components";
import { theme } from './theme';
import { fontWeight, typeScale } from './typography';
//
// Headings
//
export const Title = styled.h2`
  margin: 1.2rem auto;
  padding: 0 auto;
  color: ${theme.lightTextColor}; 
  font-family: ${theme.primaryFont};
  font-size: ${typeScale.header2} ;
  font-weight: ${fontWeight.bold};
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Subtitle = styled.h3`
  margin: 1.2rem auto;
  padding: 0 auto;
  color: ${theme.mediumTextColor}; 
  font-family: ${theme.primaryFont};
  font-size: ${typeScale.header3} ;
  font-weight: ${fontWeight.bold};
  text-transform: none;
  text-align: center;
`;

export const Heading = styled.h4`
  margin: 0.2rem auto 0.5rem;
  padding: 0;
  color: ${theme.mediumTextColor}; 
  font-family: ${theme.primaryFont};
  font-size: ${typeScale.small} ;
  font-weight: ${fontWeight.bold};
  text-transform: uppercase;
  text-align: center;
`;

export const Message = styled.h1`
  margin: .2rem auto;
  text-align: center;
  padding: 0 auto;
  color: ${theme.stopColor}; 
  font-family: ${theme.primaryFont};
  font-size: 7rem ;
  font-weight: ${fontWeight.extrabold};
  text-transform: uppercase;
  background: ${theme.hotGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const Caption = styled.p`
  margin: .2rem auto;
  text-align: center;
  padding: 0 auto;
  color: ${theme.resetColor}; 
  font-family: ${theme.primaryFont};
  font-size: 2rem ;
  font-weight: ${fontWeight.bold};
  text-transform: none;
`;

export const Emoji = styled.div`
  margin: 1.0rem auto;
  padding: 0 auto;
  text-align: center;
  font-size: 3rem ;
  animation: ${(props) => props.celebrating 
    ? 
    "letscelebrate 1s ease-in-out 3 alternate" 
    : 
    "none"
  };

  @keyframes letscelebrate {
    0% {
      
    }
    25% {
      transform: translateX(-16px) translateY(-16px);

    }
    50% {
      transform: translateX(0) translateY(0);

    }
    75% {
      transform: translateX(16px) translateY(-16px);

    }
    100% {
      transform: translateX(0) translateY(0);
    }
  }

`;
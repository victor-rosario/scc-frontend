import styled from "@emotion/styled";

export const PurpleWrapper = styled('span')({
    '&:after': {
      content: '""',
      position: 'absolute',
      top: '32%',
      left: '40%',
      width: 313,
      backgroundSize: 380,
      height: 280,
      backgroundImage: `url(/assets/images/auth/auth-purple-card.svg)`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      animation: '15s wings ease-in-out infinite'
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      top: '23%',
      left: '37%',
      width: 243,
      height: 210,
      backgroundSize: 380,
      backgroundImage: `url(/assets/images/auth/auth-blue-card.svg)`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      animation: '15s wings ease-in-out infinite',
      animationDelay: '1s'
    }
  });
  
  
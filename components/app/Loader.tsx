import { styled } from '@mui/material/styles';

const LoaderWrapper = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1301,
  width: '100%',
  height: '100%'
});

const Loader = () => (
  <LoaderWrapper
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    <svg
      className="loader-container"
      x="0px"
      y="0px"
      viewBox="0 0 50 31.25"
      height="31.25"
      width="50"
      preserveAspectRatio='xMidYMid meet'
    >
      <path
        className="loader-track"
        strokeWidth="4"
        fill="none"
        pathLength="100"
        d="M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25"
      />
      <path
        className="loader-car"
        strokeWidth="4"
        fill="none"
        pathLength="100"
        d="M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25"
      />
    </svg>
  </LoaderWrapper>
);

export default Loader;

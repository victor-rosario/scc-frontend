interface ILogo {
  src: string
  alt?: string
}

const Logo = ({ src, alt = "Logo" }: ILogo) => {

  return (
    <img style={{ height: '60px', width: '150px' }} src={src} alt={alt} />
  );
};

export default Logo;

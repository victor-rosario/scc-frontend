import * as React from 'react';

// next imports
import { useRouter } from 'next/router';

// M-UI
import MuiLink from '@mui/material/Link';
import { styled } from '@mui/material/styles';


// other
import clsx from 'clsx';
import NextLinkComposed from './NextLinkComposed';
import { LinkProps } from '@interfaces/UI/link/link.interface';

// =============================|| Custom Link Component ||============================= //

const Anchor = styled('a')({});

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { activeClassName = 'active', as: linkAs, className: classNameProps, href, noLinkStyle, ...other },
  ref
) {
  const router = useRouter();
  const pathname = typeof href === 'string' ? href : href.pathname;
  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === pathname && activeClassName
  });

  const isExternal = typeof href === 'string' && (href.indexOf('http') === 0 || href.indexOf('mailto:') === 0);

  if (isExternal) {
    if (noLinkStyle) {
      return <Anchor className={className} href={href} ref={ref} {...other} />;
    }

    return <MuiLink className={className} href={href} ref={ref} {...other} />;
  }

  if (noLinkStyle) {
    return <NextLinkComposed className={className} ref={ref} to={href} {...other} />;
  }

  return <MuiLink component={NextLinkComposed} linkAs={linkAs} className={className} ref={ref} to={href} {...other} />;
});

export default Link;

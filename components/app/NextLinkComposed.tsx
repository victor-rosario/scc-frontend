import * as React from 'react';

// next imports
import NextLink from 'next/link';

// M-UI
import { styled } from '@mui/material/styles';
import { NextLinkComposedProps } from '@interfaces/UI/link/link.interface';

// types


// =============================|| Next Link Component ||============================= //

const Anchor = styled('a')({});

export const NextLinkComposed = React.forwardRef<HTMLAnchorElement, NextLinkComposedProps>(function NextLinkComposed(
  { to, linkAs, href: _, replace, scroll, shallow, prefetch, locale, ...other },
  ref
) {
  return (
    <NextLink
      href={to}
      prefetch={prefetch}
      as={linkAs}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref
      locale={locale}
      legacyBehavior
    >
      <Anchor ref={ref} {...other} />
    </NextLink>
  );
});

export default NextLinkComposed;

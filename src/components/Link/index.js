import React from 'react';
import NextLink from 'next/link';

export default function Link({
  children,
  href,
  disabled,
  ...props
}) {
  return (
    <NextLink href={href} disabled={disabled} passHref>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a {...props}>
        {children}
      </a>
    </NextLink>
  );
}

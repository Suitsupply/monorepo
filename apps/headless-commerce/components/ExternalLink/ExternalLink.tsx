import type { AnchorHTMLAttributes, ReactNode } from 'react';

export type ExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children?: ReactNode;
};

export default function ExternalLink({ children, ...props }: ExternalLinkProps) {
  return <a {...props}>{children}</a>;
}

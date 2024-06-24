'use client';

import type { ButtonProps } from '@ariakit/react';
import { Button } from '@ariakit/react';
import classnames from 'classnames';
import type { AnchorHTMLAttributes, ReactNode, RefAttributes } from 'react';

import Icon from '../Icon/Icon';
import styles from './Link.module.scss';

export type ClientLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  RefAttributes<HTMLAnchorElement> &
  ButtonProps & {
    weight?: 'light' | 'regular' | 'medium';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    theme?: 'light' | 'dark';
    label?: string | JSX.Element;
    title?: string;
    underline?: boolean;
    hoverEffect?: boolean;
    fullWidth?: boolean;
    leadingIcon?: ReactNode;
    trailingIcon?: string;
    className?: string;
    children?: ReactNode;
  };

export default function ClientLink({
  children,
  weight = 'regular',
  size = 'sm',
  theme = 'light',
  underline = false,
  hoverEffect = false,
  className,
  fullWidth = false,
  label,
  leadingIcon,
  trailingIcon,
  ...props
}: ClientLinkProps) {
  const containerClasses = classnames(styles['container'], {
    [styles[`container__fullwidth`]]: fullWidth,
  });

  const linkClasses = classnames(
    styles['link'],
    {
      'caption-light': size === 'sm' && weight === 'light',
      'caption-regular': size === 'sm' && weight === 'regular',
      'caption-medium': size === 'sm' && weight === 'medium',
      'body-small-light': size === 'md' && weight === 'light',
      'body-small-regular': size === 'md' && weight === 'regular',
      'body-small-medium': size === 'md' && weight === 'medium',
      'body-light': size === 'md' && weight === 'light',
      'body-regular': size === 'md' && weight === 'regular',
      'body-medium': size === 'md' && weight === 'medium',
      'title-03-light': size === 'lg' && weight === 'light',
      'title-03-regular': size === 'lg' && weight === 'regular',
      'title-03-medium': size === 'lg' && weight === 'medium',
      [styles[`link__full-width`]]: fullWidth,
      [styles[`link__size-${size}`]]: true,
      [styles[`link__theme-${theme}`]]: true,
      [styles[`link__underline-with`]]: underline,
      [styles[`link__hovereffect`]]: hoverEffect,
    },
    className,
  );

  const content = (
    <>
      {(label ?? leadingIcon ?? trailingIcon) && (
        <div className={containerClasses}>
          {leadingIcon}
          <span>{label}</span>
          {trailingIcon && <Icon icon={trailingIcon as string} />}
        </div>
      )}
      {children && <div className={containerClasses}>{children}</div>}
    </>
  );

  if (props?.href) {
    return (
      <a {...props} className={linkClasses}>
        {content}
      </a>
    );
  }

  return (
    <Button {...props} className={linkClasses}>
      {content}
    </Button>
  );
}

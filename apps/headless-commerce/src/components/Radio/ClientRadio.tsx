'use strict';

import type { RadioOptions } from '@ariakit/react';
import { Radio as AriaRadio } from '@ariakit/react';
import classNames from 'classnames';
import type { HTMLAttributes, RefAttributes } from 'react';
import { memo, useCallback } from 'react';

import styles from './Radio.module.scss';

export type RadioRenderProps = HTMLAttributes<HTMLInputElement> &
  RefAttributes<HTMLInputElement> & {
    'id'?: string;
    'checked'?: boolean;
    'disabled'?: boolean;
    'data-focus-visible'?: '';
    'value'?: string;
  };

export type RadioProps = RadioOptions<'input'> & {
  className?: string;
};

export const Radio = memo(function Radio({ className, ...props }: RadioProps) {
  const renderControl = useCallback(
    (props: RadioRenderProps) => {
      return (
        <div className={classNames(styles['radio'], className)}>
          <input {...props} id={props.id} type="radio" className={styles['radio__input']} />
          <label
            htmlFor={props.id}
            className={classNames(styles['radio__label'], {
              [styles['checked']]: props.checked === true,
              [styles['disabled']]: props.disabled === true,
              [styles['focused']]: props['data-focus-visible'] === '',
            })}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              {props.checked === true ? (
                <>
                  <circle cx="10" cy="10" r="8" className={styles['svg__outer-circle']} />
                  <circle cx="10" cy="10" r="3" className={styles['svg__inner-circle']} />
                </>
              ) : (
                <>
                  <circle cx="10" cy="10" r="7.5" className={styles['svg__outer-circle']} />
                </>
              )}
            </svg>
            <div className={classNames(styles['label__value'], 'body-small-light')}>{props.value}</div>
          </label>
        </div>
      );
    },
    [className],
  );

  return <AriaRadio {...props} render={renderControl} />;
});

'use client';

import Icon from '@headless-commerce/components/Icon/Icon';
import Loader from '@headless-commerce/components/Loader/Loader';
import { useLocale } from '@headless-commerce/contexts/locale/client';
import { useUpdateSubscribeMutation } from '@headless-commerce/gql/generated/updateSubscribe.urql';
import { convertLocaleToCommerceGraphQLFormat } from '@headless-commerce/utils/localeUtils';
import { trackEvent } from '@headless-commerce/utils/tracking/tracking';
import { isValidEmailAddress } from '@headless-commerce/utils/validation';
import { useTranslations } from 'next-intl';
import { useCallback, useEffect, useMemo, useState } from 'react';

import styles from './FooterNewsletter.module.scss';

export default function ClientFooterNewsletter() {
  const locale = useLocale();
  const [email, setEmail] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [invalid, setInvalid] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const t = useTranslations('footer');

  const [{ fetching: subscribeFetching, data: subscribeData, error }, mutateFunction] = useUpdateSubscribeMutation();

  const loaderStyle = useMemo(() => ({ width: '100%' }), []);

  useEffect(() => {
    if (subscribeFetching && !submitted) {
      setSubmitted(true);
    } else if (!subscribeFetching && (subscribeData || error)) {
      setSubmitted(false);

      if (subscribeData?.updateSubscribe?.success) {
        setSuccess(true);
      } else if (subscribeData?.updateSubscribe?.success === false) {
        setSuccess(false);
        setInvalid(true);
      }
    }
  }, [subscribeData?.updateSubscribe?.success, locale, error, submitted, subscribeData, subscribeFetching]);

  if (error) {
    if (success === true) {
      setSuccess(false);
    }
    if (invalid === true) {
      setInvalid(false);
    }
  }

  const handleSubmit = useCallback(
    async (event: React.SyntheticEvent<HTMLFormElement>) => {
      event.preventDefault();

      setSubmitted(true);

      if (!isValidEmailAddress(email)) {
        setInvalid(true);
        return;
      }

      await mutateFunction(
        {
          updateSubscribeInput: {
            subscribe: true,
            email: email.trim(),
            fromCheckout: false,
            locale: convertLocaleToCommerceGraphQLFormat(locale),
          },
        },
        {
          clientName: 'commerce',
        },
      );

      setEmail('');

      trackEvent({
        ga: {
          eventCategory: 'Footer_Interactions',
          eventAction: 'Newsletter_Subscribe',
          eventLabel: 'Email_Verified',
        },
      });
    },
    [email, locale, mutateFunction],
  );

  const handleOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (success === true) {
        setSuccess(false);
      }
      if (invalid === true) {
        setInvalid(false);
      }
      if (email !== event.target.value) {
        setEmail(event.target.value);
      }
    },
    [email, invalid, success],
  );

  const handleOnBlur = useCallback(() => {
    if (success === true) {
      setSuccess(false);
    }
    if (!isValidEmailAddress(email)) {
      setInvalid(true);
    }
  }, [email, success]);

  let errorMessage;

  if (submitted && email === '') {
    errorMessage = t('please_enter_email');
  } else if (invalid) {
    errorMessage = t('invalid_email_address');
  }

  return (
    <>
      <form
        className={`${styles['footer-newsletter-form']} ${
          invalid ? styles['footer-newsletter-form-error'] : styles['footer-newsletter-form-valid']
        } `}
        onSubmit={handleSubmit}
      >
        <input
          className={`${styles['footer-newsletter-input']} body-small-regular-sm body-regular-lg`}
          value={email}
          type="text"
          name="email"
          placeholder={t('enter_your_email')}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
        />
        <button className={`${styles['footer-newsletter-button']} body-small-regular-sm body-regular-lg`} type="submit">
          <span
            className={`${styles['footer-newsletter-icon']} ${
              invalid || !success ? styles['hidden'] : styles['visible']
            }`}
          >
            <Icon icon="check" aria-hidden="true" />
          </span>
          {subscribeFetching ? <Loader shade="dark" style={loaderStyle} /> : t('subscribe')}
        </button>
      </form>
      {invalid && (
        <div className={`${styles['footer-newsletter-message']} ${styles['footer-newsletter-error']} caption-light`}>
          {errorMessage}
        </div>
      )}
      {success && !invalid && (
        <div className={`${styles['footer-newsletter-message']} ${styles['footer-newsletter-success']} caption-light`}>
          {t('sign_up')}
        </div>
      )}
    </>
  );
}

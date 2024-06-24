'use client';

import { generateIdentifier } from '@susu/headless-commerce/utils/identifier';
import classNames from 'classnames';
import { memo, useCallback, useRef } from 'react';

import styles from './ConfiguratorSizeButton.module.scss';

const ClientConfiguratorSizeButton = memo(function ClientConfiguratorSizeButton({
  sizeItemObject,
  handleSizeClick,
  selectedSize,
  isSingleSize,
}: any) {
  const sizeButtonRef = useRef<HTMLDivElement>(null);

  const handleSizeClickInternal = useCallback(() => {
    handleSizeClick(sizeItemObject[1], sizeButtonRef);
  }, [handleSizeClick, sizeItemObject]);

  const wrapperClasses = classNames(styles['size-selector__size-wrapper'], {
    [styles['size-selector__size-wrapper--empty']]: !sizeItemObject[1]?.id?.length,
    [styles['size-selector__size-wrapper--disabled']]: !sizeItemObject[1]?.availabilityStatus?.isAvailable,
    [styles['size-selector__size-wrapper--selected']]: selectedSize === sizeItemObject[1]?.displayValue,
    [styles['size-selector__singlesize-wrapper']]: isSingleSize,
  });

  return (
    <div ref={sizeButtonRef} key={generateIdentifier()} className={wrapperClasses}>
      <button className={styles['size-selector__size-button']} onClick={handleSizeClickInternal}>
        {sizeItemObject[1]?.displayValue}
      </button>
    </div>
  );
});

export default ClientConfiguratorSizeButton;

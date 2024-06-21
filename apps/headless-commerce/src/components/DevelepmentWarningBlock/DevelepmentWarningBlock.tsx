import { useMemo } from 'react';

export type DevelepmentWarningBlockProps = {
  warning: string;
};

export default function DevelopmentWarningBlock({ warning }: DevelepmentWarningBlockProps) {
  const styles = useMemo(
    () => ({
      alignItems: 'center',
      backgroundColor: 'white',
      color: 'red',
      display: 'flex',
      justifyContent: 'center',
      outline: 'dashed 2px red',
      outlineOffset: '-3px',
      padding: '2rem',
      width: '100%',
    }),
    [],
  );
  if (process.env.VERCEL_ENV === 'production') {
    return null;
  }

  // eslint-disable-next-line no-console
  // console.warn(warning);

  return (
    <div className="title-02-medium" style={styles}>
      {warning}
    </div>
  );
}

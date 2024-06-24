import { ReactNode } from 'react';

export type ServerComponentProps = {
  children?: ReactNode;
};

export const ServerComponent = async ({ children }: ServerComponentProps) => {
  console.log('ServerComponent:before-timeout', new Date());
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('ServerComponent:after-timeout', new Date());
  return (
    <>
      <div>Providing Application Server Component</div>
      {children}
    </>
  );
}

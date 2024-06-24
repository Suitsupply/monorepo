import type { AvoInspectorEnvValueType } from 'avo-inspector/dist/AvoInspectorEnv';

export const isDevelopment = () => process.env.NODE_ENV === 'development';

export const isLive = () => process.env.NEXT_PUBLIC_ENVIRONMENT_TYPE === 'PRD';

export const isAcceptance = () => process.env.NEXT_PUBLIC_ENVIRONMENT_TYPE === 'ACC';

export const isTesting = () => process.env.NEXT_PUBLIC_ENVIRONMENT_TYPE === 'TST';

export const isBrowser = () => typeof window !== 'undefined';

export const isServer = () => !isBrowser();

export type EnvironmentType = 'TST' | 'ACC' | 'PRD';

export type EnvironmentName = 'dev' | 'tst' | 'acc' | 'prd';

export const getAvoInspectorEnv = (): AvoInspectorEnvValueType => {
  return (isLive() ? 'prod' : 'dev') as unknown as AvoInspectorEnvValueType;
};

export const environments: Record<string, EnvironmentName> = {
  TST: 'tst',
  ACC: 'acc',
  PRD: 'prd',
};

export const environmentName: EnvironmentName = isDevelopment()
  ? 'dev'
  : environments[process.env.NEXT_PUBLIC_ENVIRONMENT_TYPE as EnvironmentType];

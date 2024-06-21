import * as Types from './graphql';

import { DocumentNode } from 'graphql';

export const PopularSearchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PopularSearch"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"siteInfo"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteInfo"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPopularSearchPhrases"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"siteInfo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"siteInfo"}}}]}]}}]} as unknown as DocumentNode;
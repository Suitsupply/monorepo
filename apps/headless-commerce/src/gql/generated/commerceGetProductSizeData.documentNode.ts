import * as Types from './graphql';

import { DocumentNode } from 'graphql';
export const SizeDetails = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SizeDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Size"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sizeColumnKey"}},{"kind":"Field","name":{"kind":"Name","value":"displayValue"}},{"kind":"Field","name":{"kind":"Name","value":"variantID"}},{"kind":"Field","name":{"kind":"Name","value":"availabilityStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ATS"}},{"kind":"Field","name":{"kind":"Name","value":"isAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"preOrder"}},{"kind":"Field","name":{"kind":"Name","value":"inStockDate"}}]}}]}}]} as unknown as DocumentNode;
export const CommerceGetProductSizeDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"commerceGetProductSizeData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"siteInfo"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteInfo"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProductSizeData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pid"}}},{"kind":"Argument","name":{"kind":"Name","value":"siteInfo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"siteInfo"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rows"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rowsData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"regular"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SizeDetails"}}]}},{"kind":"Field","name":{"kind":"Name","value":"long"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SizeDetails"}}]}},{"kind":"Field","name":{"kind":"Name","value":"short"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SizeDetails"}}]}},{"kind":"Field","name":{"kind":"Name","value":"size"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SizeDetails"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sortedSizeColumn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SizeDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Size"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sizeColumnKey"}},{"kind":"Field","name":{"kind":"Name","value":"displayValue"}},{"kind":"Field","name":{"kind":"Name","value":"variantID"}},{"kind":"Field","name":{"kind":"Name","value":"availabilityStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ATS"}},{"kind":"Field","name":{"kind":"Name","value":"isAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"preOrder"}},{"kind":"Field","name":{"kind":"Name","value":"inStockDate"}}]}}]}}]} as unknown as DocumentNode;
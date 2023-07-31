import { Settings } from 'joi-to-typescript';
const schemaDirectory = 'libs/shared/types/src/schemas/';

const typeOutputDirectory = 'libs/shared/types/src/generated/';

export const settings: Settings = {
  schemaDirectory,
  typeOutputDirectory,
  debug: true,
  useLabelAsInterfaceName: true,
  defaultToRequired: false,
  schemaFileSuffix: 'Schema',
  fileHeader: '',
  sortPropertiesByName: true,
  flattenTree: false,
  rootDirectoryOnly: false,
  indexAllToRoot: true,
  commentEverything: false,
  ignoreFiles: [],
  indentationChacters: '  ',
  treatDefaultedOptionalAsRequired: false,
  supplyDefaultsInType: false,
  inputFileFilter: new RegExp('.*\\.ts$'),
};

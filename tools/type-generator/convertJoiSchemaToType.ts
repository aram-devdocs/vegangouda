import Joi from 'joi';

// Helper function to convert a JOI type to TypeScript type
const convertJoiTypeToTypeScriptType = (joiType: string): string => {
  switch (joiType) {
    case 'string':
      return 'string';
    case 'uuid':
      return 'string';
    case 'email':
      return 'string';
    case 'boolean':
      return 'boolean';
    case 'date':
      return 'Date';
    default:
      return 'any';
  }
};

// Helper function to convert a JOI schema property to TypeScript type
const convertJoiPropertyToTypeScriptProperty = (
  property: Joi.Schema,
  key: string
): string => {
  if (!property.type || !property._flags || !key) {
    throw new Error('Invalid property or key');
  }
  const typeScriptType = convertJoiTypeToTypeScriptType(property.type);
  const required =
    property._flags && property._flags.presence === 'required' ? '' : '?';
  return `${key}${required}: ${typeScriptType};`;
};

// Function to convert a JOI schema to TypeScript type
export const convertJoiSchemaToType = (schemaDescription: Joi.Description): string => {
  const properties = schemaDescription.keys.map((key) => {
    return convertJoiPropertyToTypeScriptProperty(
      schemaDescription.children[key],
      key
    );
  });

  return `export type ${schemaDescription.label} = {\n${properties.join(
    '\n'
  )}\n};\n`;
};


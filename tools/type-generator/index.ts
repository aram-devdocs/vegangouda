// Tode: take in the schema from apps/api/src/app/schemas/*, and generate the types to libs/shared/types/src/lib. Use the files that currently exist at apps/api/src/app/schemas/userSchema.ts as a guide.

import fs from 'fs';
import path from 'path';
import { convertJoiSchemaToType } from './convertJoiSchemaToType';

const schemasPath = path.join(__dirname, '../../apps/api/src/app/schemas');

const schemaFiles = fs.readdirSync(schemasPath);

const schemaNames = schemaFiles.map((file) => {
  return file.split('.')[0];
});

const typesPath = path.join(__dirname, '../../libs/shared/types/src/lib');

const typesFiles = fs.readdirSync(typesPath);

const typesNames = typesFiles.map((file) => {
  return file.split('.')[0];
});

const typesToGenerate = schemaNames.filter((schemaName) => {
  return !typesNames.includes(schemaName);
});

typesToGenerate.forEach((schemaName) => {
  const schema = require(`../../apps/api/src/app/schemas/${schemaName}.ts`);
  const type = convertJoiSchemaToType(schema[schemaName]);
  fs.writeFileSync(
    path.join(__dirname, `../../libs/shared/types/src/lib/${schemaName}.ts`),
    type
  );
});

console.log(typesToGenerate);

// Reexport the native module. On web, it will be resolved to TestmoduleModule.web.ts
// and on native platforms to TestmoduleModule.ts
export { default } from './src/TestmoduleModule';
export { default as TestmoduleView } from './src/TestmoduleView';
export * from  './src/Testmodule.types';

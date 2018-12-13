# c - Velocidad y SEO con el SSR de Angular Universal

## 1. instalación
ng add @nguniversal/express-engine --clientProject=angular-blocks
npm i @types/express --save-dev

### 1.1 scripts
"universal": "npm run build:ssr && npm run serve:ssr"

## 2. Servidor y navegador
UniversalService
<!-- Inyección de dependencias específicas -->

## 3. Otros
server.ts NgModuleFactoryLoader
app.server.module.ts ModuleMapLoaderModule ServerTransferStateModule
{
  provide: NgModuleFactoryLoader,
  useClass: ModuleMapNgFactoryLoader,
  deps: [Compiler, MODULE_MAP]
}
absolute url

## 4 SEO
title
meta



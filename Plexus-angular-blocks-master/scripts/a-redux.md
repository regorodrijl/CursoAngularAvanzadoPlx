# a - El estado de la aplicación con Redux y Angular

## a.1 El patrón Redux

## a.2 NgRx

ng add @ngrx/store

### a.2.1 El Store

- root
 - router
 - global *a partir de global-store.services.ts*
 - cars *Effects*
 - car *Feature module*


### a.2.2 Las Actions

### a.2.3 Los Reducers


## a.3 Herramientas
ng add @ngrx/store

/reducers => /store
 / global
  / actions
  / reducer
  / state 

/global
global.state.ts
global.reducer.ts

/ root 
 / index.ts
 / root.state.ts

global.actions.ts
global.reducer.ts

app.module.ts

items-api.service.ts

app.component.html
app.component.ts


ng add @ngrx/effects

items.actions
items.reducer

index.ts
root.state.ts

items-container.ts
items-container.html

app.effects => items/items.effects

items.effects.ts

npm i @ngrx/store-devtools --save
app.module.ts
# https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en

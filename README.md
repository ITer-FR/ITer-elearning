# ITer-elearning

Création de la plateforme de mise à disposition de formation vidéo dans l'esprit d'un Udemy à la française. Projet réalisé bénévolement par la communauté ITer

# Installation

`./install.sh`

# Guide de développement

## Quand on démarre un ticket

- git checkout main
- git pull
- git checkout -b (feat/fix)/(numéro issue)-(petit texte descriptif de l'issue) : exemple feat/20-basic-formation-add-form
- git push --set-upstream origin [nom de la branche]

## Guide pas à pas pour implémenter un use case

- commencer par écrire le test du use case dans `app/[context]/__tests__/nom-du-use-case.test.js`, divisé comme suit :

  - arrange : on set l'état initial du store et potentiellement des repository avec des données initiales (se basant sur l'exemple indiqué dans le ticket sur github)
  - act : on dispatch un thunk (présent dans le dossier `app/[context]/use-cases/nom-du-use-case.js`)
  - assert : dans un setImmediate, on expect que le state equals le résultat d'un selector (présent dans le dossier `app/[context]/selectors/nom-du-selector.js`)

- potentiellement créer les repositories inMemory manquants dans `app/[context]/repositories/nom-du-in-memory.js`

- injecter les nouveaux repositories dans le `createStore()`

- implémenter le use case `app/[context]/use-cases/nom-du-use-case.js`

- implémenter les reducers `app/[context]/index.js`

- implémenter les selectors `app/[context]/selectors/nom-du-selector.js` => selectors = données visible dans l'appli = données concernées par la partie du ticket où il est écrit "je veux VOIR ...."

- si nouveau slice => penser à l'importer dans `./src/store.js`

- quand le test unitaire passe => implémentation des composants react (page, liens, etc.)

- (test cypress)

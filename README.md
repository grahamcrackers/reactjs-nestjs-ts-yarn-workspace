# ReactJS + NestJS + Yarn Workspaces + TypeScript

A simpler monorepo that doesn't include lerna

## Motivation

I make applications that don't get published to npm, so I don't need the cruft that lerna seems to complicate when creating a monorepo with yarn, typescript, react, and nestjs. And while I love `create-react-app` and like it to get up and going on simple projects, most of the time I don't need every bit of integration that it seems to bring and like having more control over my webpack builds, not to mention, it's not easy to share typescript classes/interfaces between nestjs and a `cra` app do to module vs node import conflicts. This repo will be subject to change as I update each piece to better understand a monorepo setup. If you would like to include learna along with `create-react-app` and nestjs, this starter project this (nestjs-monorepo-starter)[https://github.com/scopsy/nestjs-monorepo-starter] is a good project to get started with.

# Repro

Demonstrating [this issue](https://github.com/tamagui/tamagui/issues/2230) in our stack

Our ci runs `pn expo build:web` and fails due to a race condition in building css files on metro.

Running `npx @tamagui/cli build` throws the error

> Cannot read properties of undefined (reading 'length')

# Tamagui + Storybook + Expo Router PNPM Monorepo

## 🔦 About

This monorepo sets up Expo + Storybook + Tamagui.

## 📦 Included packages

- [Tamagui](https://tamagui.dev)
- [Storybook](https://storybook.js.org/)
- Expo SDK
- Expo Router

## 🏁 Start the app

- Install dependencies: `pnpm i`

- web local dev: `pnpm expo web`
- mobile local dev: `pnpm expo ios|android`
- storybook: `pnpm sb`

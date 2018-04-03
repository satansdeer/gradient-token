# Gradient Token Tutorial

This repo is an example for series of article on [my blog](http://maksimivanov.com) about non-fungible token, where we were doing CryptoKitties clone.

The example is greatly simplified and we don't have genetic algorythms or any algorythms for breeding.

## Contents:
* [Part 1 - Creatng the token](http://maksimivanov.com/posts/gradient-coin-tutorial)
* [Part 2 - Adding auction](#)
* [Part 3 - Adding basic frontend](#)

## How To Run

Make sure you have local node running, I recomeend using `ganache-cli`, run:

```sh
npm install -g ganache-cli
ganache-cli -p 7545
```

First install contracts dependencies, run `yarn install`.

Now you can compile and deploy contracts:

```sh
truffle compile && truffle migrate
```

Now you can run `truffle test` to run the tests for contracts.

Now prepare the frontend:

```sh
cd front
yarn install
yarn test
```

Tests should pass.

Run `yarn start` to run frontend.

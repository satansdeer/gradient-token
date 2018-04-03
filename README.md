# Gradient Token Tutorial

This repo is an example for series of article on [my blog](http://maksimivanov.com) about non-fungible token, where we were doing CryptoKitties clone.

The example is greatly simplified and we don't have genetic algorythms or any algorythms for breeding.

## Contents:
* [Part 1 - Creatng the token](http://maksimivanov.com/posts/gradient-coin-tutorial)
* [Part 2 - Adding auction](#)
* [Part 3 - Adding basic frontend](#)

## How To Install Dependencies

First install required dependencies:

You'll need local ethereum node, I recommend `ganache-cli`. You can install it from `npm`.

```sh
npm install -g ganache-cli
```

Then install contract dependencies:

```
yarn install
```

To install frontend dependencies go to `front` folder and run `yarn install` from there:

```sh
cd front
yarn install
```

## How To Test

First make sure that local ethereum node is running. Execute:

```sh
ganache-cli -p 7545
```

Now you can compile and deploy contracts:

```sh
truffle compile && truffle migrate
```

Run contract tests:

```sh
truffle test
```

Switch to `front` directory and run frontend tests as well:

```sh
cd front
yarn test
```

Tests should pass.


## How To Test

Make sure that you have local ethereum node running:

```sh
ganache-cli -p 7545
```

And contracts deployed:

```sh
truffle compile && truffle migrate
```

If everything is fine – run the frontend:

```sh
cd front
yarn start
```

You can remove all minted tokens by migrating your contract again:

```sh
truffle migrate --reset
```

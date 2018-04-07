# Gradient Token Tutorial

This repo is an example for [my blog](http://maksimivanov.com) series about non-fungible token, where we were doing CryptoKitties clone.

The example is greatly simplified and we don't have genetic algorythms or any algorythms for breeding.

The final application will look somewhat like this:

<img width="1130" alt="screen shot 2018-04-03 at 08 07 30" src="https://user-images.githubusercontent.com/450319/38230362-257b3cd2-3716-11e8-8d99-285b30f69924.png">

## Contents:
* [Part 1 - Creating the token](http://maksimivanov.com/posts/gradient-coin-tutorial)
* [Part 2 - Adding auction](http://maksimivanov.com/posts/gradient-coin-tutorial-part-2)
* [Part 3 - Adding basic frontend](http://maksimivanov.com/posts/gradient-coin-tutorial-part-3)

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


## How To Run

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

You should see the following:

<img width="930" alt="screenshot" src="https://user-images.githubusercontent.com/450319/38230295-c8c03718-3715-11e8-982b-9561378ba1a8.png">

You can remove all minted tokens by migrating your contract again:

```sh
truffle migrate --reset
```

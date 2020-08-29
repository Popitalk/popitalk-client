# playnows-client

## Docs
* [Info](#info)
    * [Status](#status)
* [Codebase](#codebase)
    * [First time setup](#first-time-setup)
        * [Installation](#installation)
    * [Folder Structure](#folder-structure)

## Info
`@popitalk/playnows-client` is the primary web client for interacting with `@popitalk/playnows-server` and `@popitalk/popitalk-server-ws`.

`@popitalk/playnows-client` is used by clients to create rooms and channels, watch together and chat with other room members.

You can watch a demo of `@popitalk/playnows-client` [here](https://placeholder.youtube.com).

### Status
`@popitalk/playnows-client` has been actively developed internally since May 2020, and is in beta as of November 2020.

## Codebase
The codebase for `@popitalk/playnows-client` is written in HTML, CSS and JS, utilising React with [Tailwindcss](https://tailwindcss.com/) and Redux.js.

### First time setup
First, clone the `@popitalk/playnows-client` repository locally:

```
git clone https://github.com/Popitalk/playnows-client
npm install
npm start
```

#### Installation
*Important* The following services need to be set up for `@popitalk/playnows-client` to function:

* [`@popitalk/playnows-server`](https://github.com/Popitalk/playnows-server)
* [`@popitalk/popitalk-server-ws`](https://github.com/Popitalk/popitalk-server-ws)

You also need to install the required dependencies by running `npm`.

Ensure that `.env.example` is either copied and renamed to `.env`, or is simply renamed to `.env`.

In this file, you'll need some values. Documentation is available in the `.env.example` file.

### Folder Structure
```
popitalk/playnows-client/
├── comp # The core components
├── containers # placeholder explanation
├── helpers # placeholder explanation
├── hooks # placeholder explanation
├── redux # placeholder explanation
└── util # placeholder explanation
```


# playnows-client
<!-- ## Docs
* [Info](#info)
    * [Status](#status)
* [Codebase](#codebase)
    * [First time setup](#first-time-setup)
        * [Installation](#installation)
    * [Folder Structure](#folder-structure) -->

## Info
`@popitalk/playnows-client` is the primary web client for interacting with: 

* `@popitalk/playnows-server` 
* `@popitalk/popitalk-server-ws`

You can watch a demo [here](https://placeholder.youtube.com).

## Codebase
The codebase for `playnows-client` is written in HTML, CSS and JS, utilising React with [Tailwindcss](https://tailwindcss.com/) and Redux.js.

### First time setup
To run the repository locally:

```
git clone https://github.com/Popitalk/playnows-client
npm install
npm start
```

#### Installation
*Important* The following services need to be set up for `@popitalk/playnows-client` to function:

* [`@popitalk/playnows-server`](https://github.com/Popitalk/playnows-server)
* [`@popitalk/popitalk-server-ws`](https://github.com/Popitalk/popitalk-server-ws)

#### Checklist

 - You also need to install the required dependencies by running `npm`.
 - Make sure you have the most recent `.env` file.
 - Ensure that `.env.example` is either copied and renamed to `.env`, or is simply renamed to `.env`.

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


# winpos
A small nodejs utility to get the position of all windows matching a particular name on the screen.

## Usage

`npm i winpos`

```js
import winpos from winpos;

// synchronous usage - this gets the bounds of all windows named "Discord"
const windows = winpos('Discord', true);

// async usage - this gets the bounds of all windows named "Discord"
winpos('Discord', (err, windows) => {

});
```

The return value will be in the format `[ { Left: number, Top: number, Right: number, Bottom: number } ]`. Each entry represents a different instance of a window.

## Restrictions

This uses [edge-js](https://github.com/agracio/edge-js), so it only runs on windows, and from a node environment - it will not work in the browser.
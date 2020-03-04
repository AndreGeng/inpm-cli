#!/usr/bin/env node
const spawn = require("child_process").spawn;

const NPM_REGISTRY = "http://r.npm.innotechx.com";
const NODE_DIST = "https://npm.taobao.org/mirrors/node";
const home = process.env.HOME;

const restArgv = process.argv.slice(2);
spawn('npm', [
  `--registry=${NPM_REGISTRY}`,
  `--disturl=${NODE_DIST}`,
  `--userconfig=${home}/.inpmrc`,
  `--cache=${home}/.cache/inpm`,
].concat(restArgv), {
  stdio: "inherit",
})

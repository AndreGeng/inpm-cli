#! /bin/bash

# npm registry in innotech
NPM_REGISTRY=http://r.npm.innotechx.com

# node.js dist
NODE_DIST=https://npm.taobao.org/dist

npm --registry=$NPM_REGISTRY --disturl=$NODE_DIST \
    --userconfig=$HOME/.inpmrc  --cache=$HOME/.cache/inpm \
    $@

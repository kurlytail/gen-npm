#!/usr/bin/env bash
MODULE_PATH=`npm prefix`
`npm bin`/sgen -m $MODULE_PATH/templates/map.json $*

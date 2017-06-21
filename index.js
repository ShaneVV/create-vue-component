#! /usr/bin/env node

/**
 * @return src, dest
 */
// checkArgs();
// copy(src, dest);

const copy = require('fs-extra').copy;

const checkArgs = () => {
    console.log(process.argv[0])
}

checkArgs();
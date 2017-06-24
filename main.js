#! /usr/bin/env node

/**
 * args:
 * dest: {
 *   type: relative
 *   required: true
 * }
 * category: {
 *   default: vue
 * }
 *
 */

const copy = require('fs-extra').copy

const path = require('path')
const cwd = process.cwd()

const resolve = (relativePath) => {
    return path.posix.join(cwd, relativePath)
}

/**
 * Check args.
 *
 * @return category, dest
 */
const checkArgs = () => {
    const dest = resolve(process.argv[2])

    let category
    process.argv.forEach((argv, idx, argvs) => {
        if (argv === '--type' || argv === '-t') {
            category = argvs[idx + 1]
        }
    })

    return {
        dest,
        category
    }
}

let { dest, category } = checkArgs()

category = category || 'vue' // default vue
const src = path.posix.join('./templates/', category)

try {
    copy(src, dest)
} catch (err) {
    throw err
}

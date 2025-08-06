const fs = require('fs')
const { fetchCommits, writeToFile } = require('./commit')
const localRepoPath = process.argv[2]
const outputPath = process.argv[3]
const author = process.argv[4]

fetchCommits(localRepoPath, author).then((commits) => writeToFile(outputPath, commits))


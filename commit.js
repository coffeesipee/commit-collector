const { exec } = require('child_process');
const fs = require('fs')

module.exports = {
  async fetchCommits(repoPath, author) {
    const logFormat = '%H\x1f%an\x1f%aI\x1f%s';
    const command = `git log --author ${author} --pretty=format:"${logFormat}"`;

    console.log('Fetching local git history...');
    console.log(command, repoPath)

    return new Promise((resolve, reject) => {
      exec(command, { cwd: repoPath }, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error executing git command: ${error.message}`);
          console.error('Is this directory a valid git repository?');
          return reject(error);
        }

        if (stderr) {
          console.error(`Git command stderr: ${stderr}`);
          return reject(stderr);
        }

        const commits = stdout
          .trim()
          .split('\n')
          .map(line => {
            const [sha, author, date, message] = line.split('\x1f');
            return { sha, author, date, message };
          });

        console.log(`✅ Successfully fetched ${commits.length}`);
        return resolve(commits)
      })
    })

  },
  writeToFile(outputPath, commits) {
    try {
      // Write the JSON data to the output file with pretty printing.
      fs.writeFileSync(outputPath, JSON.stringify(commits, null, 2));
      console.log(`✅ Successfully exported ${commits.length} commits to '${outputPath}'`);
    } catch (writeError) {
      console.error(`Error writing to file: ${writeError.message}`);
    }
  }
}

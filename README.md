# Commit Collector

This script used for fetching commit from your local path repository, and export it to .json files. My purpose is to use the json file and get the summarize result based on that json file from chatgpt or gemini or stuff.

First question, why using local path? why not fetch commit from remote repository? 
Well, my main goal is to get my activities in my formal work projects. The company using private github organization, so there's no way to fetch the commit without company authorization. 

Second question, why json?
Just because it's JSON, i like json, we like json.

## How To Use
To run this script, simply run the index.js script with some arguments of the path of repository, the json file output path, and commit author.
```bash
 node index.js /home/your-username/directory-to-repository /home/your-username/expected-output-path taufik-rahadii
```

And then, when finished, you'll get the json file filled with your full of angry commit message.

Thank you.

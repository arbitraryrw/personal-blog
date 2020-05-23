# Personal-blog
Nikola Cucakovic, August 2019

[![Netlify Status](https://api.netlify.com/api/v1/badges/a7c17832-cf4f-4761-bcf3-59a652ff9bf9/deploy-status)](https://app.netlify.com/sites/reverent-davinci-a4289d/deploys)

# Overview
A simple react blog used to track personal work.

# Usage
In the project directory run:
```
npm start
```

If dependencies are outdated simply remove the local `node_modules` and fetch them again:
```
rm -r node_modules
npm install
```

To update any vulnerable dependencies simply run:
```
npm audit fix
```

To build locally / deploy to prod run:
```
npm run-script build
npm run deploy:prod
```

# Useful Links
- [Hyvor Comments](https://talk.hyvor.com/console)

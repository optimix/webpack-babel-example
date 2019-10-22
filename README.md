
#### Contents

```
.
├── package.json         # npm configuration file 
├── README.md            # this documentation
├── src
│   ├── Application.js   # es6 simple class example
│   ├── css
│   │   └── example.css  # simple .css file to be included
│   ├── example.js       # main .js entry point of the application
│   └── index.html       # basic template .html entry point
└── webpack.config.js    # webpack configuration
```

#### Setup
Download nodejs: https://nodejs.org/
(for example version 12.13.0 LTS)

```
tar xf node-v12.13.0-linux-x64.tar.xz
export PATH=`pwd`/node-v12.13.0-linux-x64/bin:$PATH
cd webpack-babel-example
npm install
npm run server
```

Open a web browser and visit http://localhost:8087/

#### Generate distribution files

To generate distribution files in the `dist` directory, type `npm run dist`.
This command will run `npx webpack` as defined in `package.json`.
//?: Lines 4-8 are referencing different libraries that help us run the test.
//? A LIBRARY is code that someone (or multiple people) else wrote for our use.

global.expect = require("expect");

const babel = require("babel-core");
const jsdom = require("jsdom");
const path = require("path");

before(function (done) {
  const babelResult = babel.transformFileSync(
    path.resolve(__dirname, "..", "index.js"),
    {
      presets: ["es2015"],
    }
  );

  const html = path.resolve(__dirname, "..", "index.html");

  jsdom.env(
    html,
    [],
    {
      src: babelResult.code,
      virtualConsole: jsdom.createVirtualConsole().sendTo(console),
    },
    (err, window) => {
      if (err) {
        return done(err);
      }

      Object.keys(window).forEach((key) => {
        global[key] = window[key];
      });

      return done();
    }
  );
});

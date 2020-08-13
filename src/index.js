import './sass/main.sass';

function importFiles(resolve) {
  resolve.keys().forEach(resolve);
}

// importFiles(require.context('./pug/utils', true, /\.(jpg|svg|png)$/));
// importFiles(require.context('./pug', true, /\.(sass|jpg|png|svg)$/));
// importFiles(require.context('./pug', true, /\.(js)$/));
// importFiles(require.context('./sass', true, /\.sass$/));
// importFiles(require.context('./static', true, /\.(svg|png|ico|xml|json)$/));
// // importFiles(require.context('./pages', true, /\.(css|scss)$/));

importFiles(require.context('./pug/utils', true, /\.(js)$/));
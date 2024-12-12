
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://VMGiriprasath.github.io/Portfolio3/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 7687, hash: '54654e4f2b6ef8d18631e6ec1f082c6ece3c8942cffcce4bcfa8ef71355a4c19', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 8014, hash: 'e605a3c22611cee251891c5ac7f1782d870744ba3fe5b45a17478c69580f3938', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5XVWDKWT.css': {size: 105, hash: 'RdUNBt6AY6U', text: () => import('./assets-chunks/styles-5XVWDKWT_css.mjs').then(m => m.default)}
  },
};

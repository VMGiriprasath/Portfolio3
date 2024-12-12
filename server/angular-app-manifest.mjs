
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://VMGiriprasath.github.io/Portfolio3/index.html',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 7697, hash: '6aac0565565c68871847a5d656f90ea7bd95055a8c2770782d692012889a0a70', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 8024, hash: 'b6b30bfc8cadf1e8b32b605a395750a52998f1d38287e64a10b808500826e87e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5XVWDKWT.css': {size: 105, hash: 'RdUNBt6AY6U', text: () => import('./assets-chunks/styles-5XVWDKWT_css.mjs').then(m => m.default)}
  },
};

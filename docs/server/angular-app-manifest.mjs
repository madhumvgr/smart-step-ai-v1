
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/smart-step-ai-v1/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/smart-step-ai-v1"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4106, hash: '7156d48f261d7d0e2bb18ec23985d00290ec01430782705b0a3ab55a8a7d6593', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2995, hash: 'c9cdf2bc1e188bc7e591e9f10e2c15a731d00db23103deb05464f026940d96e2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4232, hash: 'a3e1ab7aab903806fe7f4755aea554ef16bcf15ee2a6fc6933d09891eb41f271', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-C3PILA3Z.css': {size: 1499, hash: 'sELyad6N8L4', text: () => import('./assets-chunks/styles-C3PILA3Z_css.mjs').then(m => m.default)}
  },
};

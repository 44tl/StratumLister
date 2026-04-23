import './vendor.js';
import './style.css';
import 'highlight.js/styles/github-dark.css';
import './navigation.js';

import { marked, DOMPurify, hljs } from './vendor.js';

window.marked = marked;
window.DOMPurify = DOMPurify;
window.hljs = hljs;

marked.use({
  gfm: true,
  breaks: false,
  renderer: {
    code({ text, lang }) {
      const validLang = lang && hljs.getLanguage(lang);
      const highlighted = validLang
        ? hljs.highlight(text, { language: lang }).value
        : hljs.highlightAuto(text).value;
      return `<pre><code class="hljs ${lang || ''}">${highlighted}</code></pre>`;
    }
  }
});

export { marked, DOMPurify, hljs };
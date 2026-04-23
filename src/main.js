import { marked, hljs } from './vendor.js';
import './navigation.js';

// Configure marked with custom renderer and highlight.js
if (marked && hljs) {
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
}

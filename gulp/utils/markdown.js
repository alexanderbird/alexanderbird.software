const marked = require('marked');
// Thanks to https://stackoverflow.com/a/6234804/3012550
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

module.exports = function(raw) {
  const renderer = new marked.Renderer();
  renderer.code = function(code) {
    return `<pre>\n${escapeHtml(code)}</pre>`;
  };
  return marked(raw, { renderer });
}

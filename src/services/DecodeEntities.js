export default function decodeEntities(encodedString) {
  const translateRe = /&(nbsp|amp|quot|lt|gt);/g;
  const translate = {
    nbsp: ' ',
    amp: '&',
    quot: '"',
    lt: '<',
    gt: '>',
  };
  return encodedString
    .replace(translateRe, function (entity) {
      return translate[entity];
    })
    .replace(/&#(\d+);/gi, function (numStr) {
      var num = parseInt(numStr, 10);
      return String.fromCharCode(num);
    });
}

// https://stackoverflow.com/questions/44195322/a-plain-javascript-way-to-decode-html-entities-works-on-both-browsers-and-node

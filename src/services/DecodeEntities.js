export function decodeEntities(encodedString) {
  let translate_re = /&(nbsp|amp|quot|lt|gt);/g;
  let translate = {
    nbsp: ' ',
    amp: '&',
    quot: '"',
    lt: '<',
    gt: '>',
  };
  return encodedString
    .replace(translate_re, function (entity) {
      return translate[entity];
    })
    .replace(/&#(\d+);/gi, function (numStr) {
      var num = parseInt(numStr, 10);
      return String.fromCharCode(num);
    });
}

// https://stackoverflow.com/questions/44195322/a-plain-javascript-way-to-decode-html-entities-works-on-both-browsers-and-node

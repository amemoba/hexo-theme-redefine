'use strict';

function postBtn(args) {
  if(/::/g.test(args)){
    args = args.join(' ').split('::');
  }
  else{
    args = args.join(' ').split(',');
  }
  let cls = '';
  let text = '';
  let url = '';
  let icon = '';
  if (args.length > 3) {
    cls = args[0];
    text = args[1];
    url = args[2];
    icon = args[3];
  } else if (args.length > 2) {
    if (args[2].indexOf(' fa-') > -1) {
      // text, url, icon
      text = args[0];
      url = args[1];
      icon = args[2];
    } else {
      cls = args[0];
      text = args[1];
      url = args[2];
    }
  } else if (args.length > 1) {
    text = args[0];
    url = args[1];
  } else if (args.length > 0) {
    text = args[0];
  }

  cls = cls.trim();
  icon = icon.trim();
  text = text.trim();
  url = url.trim();
  if (url.length > 0) {
    url = 'href=\'' + url + '\'';
  }
  if (cls.length > 0) {
    cls = ' ' + cls;
  }
  if (icon.length > 0) {
    return `<a class="button ${cls}" ${url} title='${text}'><i class='${icon}'></i>　${text}</a>`;
  }
  return `<a class="button ${cls}" ${url} title='${text}'>${text}</a>`;

}

function postButton(args, content) {
  const colorKeywords = ['info', 'primary', 'success', 'warning', 'danger']
  const sizeKeywords = ['small', 'default', 'large']

  let colorClass = 'info'
  if (args[0] && colorKeywords.includes(args[0])) {
    colorClass = args[0]
  }

  let sizeClass = 'regular';
  if (args[1] === 'small' || args[1] === 'default') {
    sizeClass = 'regular';
  }
  if (args[1] === 'large') {
    sizeClass = 'large';
  }

  let attribute = ''
  if (args[2]) {
    attribute = `href="${args[2]}"`;
  }

  return `<a class="button center ${sizeClass}" ${attribute} title="${colorClass} button">${content}</a>`;
}

hexo.extend.tag.register('btn', postBtn);
hexo.extend.tag.register('button', postButton, true);

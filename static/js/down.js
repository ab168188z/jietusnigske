var baseDomains = ['xc.zhongguohao123.com'];
var i = Math.floor(Math.random() * baseDomains.length);
var randomDomain = baseDomains[i];
var baizhuPreUrl = 'https://' + parseInt((Date.parse(new Date()) / 1000 - 1451577600) / 3600) + '.' + randomDomain + '/xiaz/';
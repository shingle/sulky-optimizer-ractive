/**
 * SunEee
 * @date Created on 2015/4/21
 * @author YuHui(语晖)<yuhui@suneee.com>
 *
 */

'use strict';

var Ractive = require('ractive');

module.exports = function(content, file, conf) {
	var rst = Ractive.parse(content);
	return JSON.stringify(rst, null, 2)

};

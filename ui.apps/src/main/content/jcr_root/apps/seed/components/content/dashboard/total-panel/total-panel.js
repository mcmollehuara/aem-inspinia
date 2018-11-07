"use strict";

use(function() {

	var CONST = {
        PROP_TEXT: "title"
    };
	// var titleAlt = properties.get('title','');
	// return titleAlt+'-alternative';
	var textColor = '';
	// var textColor = properties.get('title', '');
	var text = granite.resource.properties[CONST.PROP_TEXT]
	return {
		title : text
	}
});

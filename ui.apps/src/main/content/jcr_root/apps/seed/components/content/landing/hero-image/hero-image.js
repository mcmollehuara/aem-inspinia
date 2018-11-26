'use strict';
var global = this;

	use(function () {
		return {
        image: {
        srcPrimary: properties.get('primaryFileReference',''),
        srcSecondary: properties.get('secondaryFileReference','')
        }
    };
});
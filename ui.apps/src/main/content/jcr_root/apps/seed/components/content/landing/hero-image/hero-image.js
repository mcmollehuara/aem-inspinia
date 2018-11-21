'use strict';
var global = this;

use(function () {
    var CONST = {
        FULL_WIDTH: 'useFullWidth',
        KEEP_RATIO: 'keepRatio'
    };

    var classList = 'we-HeroImage';

    if (global.granite.resource.properties[CONST.FULL_WIDTH] == 'true') {
        classList += ' width-full';
    }
    if (global.granite.resource.properties[CONST.KEEP_RATIO] == 'true') {
        classList += ' ratio-16by9';
    }

    var renditionPath = resource.path + ".img.jpeg";
    return {
        classList: classList,
        image: {
            src: renditionPath
        }
    };
});
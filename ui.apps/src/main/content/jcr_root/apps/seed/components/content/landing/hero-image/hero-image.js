'use strict';
var global = this;

use(function () {
   
    var renditionPrimaryPath = resource.path + "/primary.img.jpeg";
    var renditionSecondaryPath = resource.path + "/secondary.img.png";
    return {
        image: {
            src: renditionPrimaryPath,
            srcSecondary: renditionSecondaryPath
        }
    };
});
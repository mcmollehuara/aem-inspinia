'use strict';
var global = this;

use(function () {
   
//    var renditionPrimaryPath = resource.path + "/primary.img.jpeg";
//    var renditionSecondaryPath = resource.path + "/secondary.img.png";
    return {
        image: {
        srcPrimary: properties.get('primaryFileReference',''),
        srcSecondary: properties.get('secondaryFileReference','')
        }
    };
});
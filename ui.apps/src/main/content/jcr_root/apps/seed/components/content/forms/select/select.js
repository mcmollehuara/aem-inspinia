// Created my micom

'use strict';
var global = this;

use(function () {
    // var data = ["Sheryl", "Valeria","Luana","Mikela"];    
    var elements = properties.get("data", "");
    var _data = [];
    
    if (elements != "") {
        try {
            var data = [];
            data = JSON.parse(elements);
            _data = data;
        }
        catch (error) {
            if (error instanceof SyntaxError) {
                console.log(error.message);
            }
            else {
                throw error;
            }
        }
    }
    else {
        _data = ["Default"];
    }

    return {
        list: _data
    };
});
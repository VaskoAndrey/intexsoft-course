'use strict';                                     // Массив к которому применяем callback это this

Array.prototype.every = function (callback, thisArg) {
    if (!Array.isArray(this)) {
        throw new TypeError(`Cannot read properties of ${this} (reading 'every')`);
    }
    if (typeof callback !== 'function') {
        throw new TypeError(`${callback} is not a function`);
    }
    if (this.length === 0) {
        return true;
    }
    var context = thisArg || this;
    for (var i = 0; i < this.length; i++) {
        if (!callback.call(context, this[i], i, this)) {
            return false;
        }
    }
    return true;
}

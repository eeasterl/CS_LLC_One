"use strict";

class Singleton {

    constructor() {
        if (Singleton.prototype.instance) {
            return Singleton.prototype.instance;
        }

        Singleton.prototype.instance = this;
    }

    static getInstance() {
        return new Singleton();
    }
}

Singleton.prototype.instance = null;

module.exports = Singleton;
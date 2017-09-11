"use strict";
var Prototype;
(function (Prototype) {
    class Monster {
        getType() {
            return this.type;
        }
        getId() {
            return this.id;
        }
        setId(id) {
            this.id = id;
        }
        clone() {
            var _obj = {};
            for (var key in this) {
                if (this.hasOwnProperty(key)) {
                    var element = this[key];
                    if (typeof element == 'string') {
                        Reflect.defineProperty(_obj, key, { value: element });
                    }
                }
            }
            Reflect.setPrototypeOf(_obj, Reflect.getPrototypeOf(this));
            return _obj;
        }
    }
    class Sheep extends Monster {
        constructor() {
            super();
            this.type = 'Sheep';
        }
        draw() {
            console.log(`im a ${this.type}`);
        }
    }
    class Cow extends Monster {
        constructor() {
            super();
            this.type = 'Cow';
        }
        draw() {
            console.log(`im a ${this.type}`);
        }
    }
    class MonsterCache {
        static getMonster(id) {
            let monster = this.hashTable.get(id);
            if (monster != undefined)
                return monster.clone();
            ;
        }
        static loadCache() {
            var cow = new Cow();
            cow.setId('1');
            this.hashTable.set(cow.getId(), cow);
            var sheep = new Sheep();
            sheep.setId('2');
            this.hashTable.set(sheep.getId(), sheep);
        }
    }
    MonsterCache.hashTable = new Map();
    MonsterCache.loadCache();
    var monster1 = MonsterCache.getMonster('1');
    var monster2 = MonsterCache.getMonster('2');
    monster1.draw();
    monster2.draw();
})(Prototype || (Prototype = {}));

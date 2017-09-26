"use strict";
var AbstractFactoryModel;
(function (AbstractFactoryModel) {
    class SQLFactory {
        getUser() {
            return new SQLUser();
        }
    }
    class AccessFactory {
        getUser() {
            return new AccessUser();
        }
    }
    class SQLUser {
        getName() {
            return `my name is SQL`;
        }
        getData() {
            let strArray = new Array();
            strArray.push('a');
            strArray.push('b');
            return strArray;
        }
        getCount() {
            return 1;
        }
    }
    class AccessUser {
        getName() {
            return `my name is Access`;
        }
        getCount() {
            return 2;
        }
        getData() {
            let numArray = new Array();
            numArray.push(1);
            numArray.push(2);
            return numArray;
        }
    }
    class Factory {
        constructor() {
            this.Database = 'access';
        }
        createIFactory() {
            switch (this.Database) {
                case 'sql':
                    return new SQLFactory();
                case 'access':
                    return new AccessFactory();
                default:
                    return new SQLFactory();
            }
        }
    }
    var user = new Factory().createIFactory().getUser();
    console.log(user.getName());
})(AbstractFactoryModel || (AbstractFactoryModel = {}));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const $ = require("../../node_modules/jquery/dist/jquery.min.js");
var MVC;
(function (MVC) {
    class Empolyee {
        constructor() {
            this.id = 0;
            this.name = 'Unknown';
            this.status = 'Initialized';
        }
    }
    class EmpolyeeView {
        constructor(m) {
            this.model = m;
            this.createView();
            this.update();
        }
        createView() {
            this.box = $('<div/>').attr('id', 'emploeeView').appendTo($('body'));
            this.idTextBox = $('<input/>').attr('type', 'text').attr('id', 'idTextBox').appendTo($(this.box));
            this.nameTextBox = $('<input/>').attr('type', 'text').attr('id', 'nameTextBox').appendTo($(this.box));
            this.statusTextBox = $('<input/>').attr('type', 'text').attr('id', 'statusTextBox').appendTo($(this.box));
            this.saveButton = $('<input/>').attr('type', 'button').attr('id', 'saveButton').attr('value', 'Save').appendTo($(this.box));
        }
        update() {
            this.idTextBox.val(this.model.id.toString());
            this.nameTextBox.val(this.model.name);
            this.statusTextBox.val(this.model.status);
        }
    }
    let empolyee = new Empolyee();
    let empolyeeView = new EmpolyeeView(empolyee);
})(MVC || (MVC = {}));

"use strict";
var MVC;
(function (MVC) {
    class Empolyee {
        constructor() {
            this.id = 0;
            this.name = 'Unknown';
            this.status = 'Initialized';
        }
    }
    MVC.Empolyee = Empolyee;
    class EmpolyeeViewModel {
        constructor() {
            this.employee = new Empolyee();
            this.isMouseDown = false;
        }
    }
    MVC.EmpolyeeViewModel = EmpolyeeViewModel;
    class EmpolyeeView {
        constructor(m) {
            this.model = m;
            this.createView();
            this.update();
        }
        createView() {
            this.box = $('<div/>').attr('id', 'employeeView').appendTo($('body'));
            this.idTextBox = $('<input/>').attr('type', 'text').attr('id', 'idTextBox').appendTo($(this.box));
            this.nameTextBox = $('<input/>').attr('type', 'text').attr('id', 'nameTextBox').appendTo($(this.box));
            this.statusTextBox = $('<input/>').attr('type', 'text').attr('id', 'statusTextBox').appendTo($(this.box));
            this.saveButton = $('<input/>').attr('type', 'button').attr('id', 'saveButton').attr('value', 'Save').appendTo($(this.box));
        }
        update() {
            this.idTextBox.val(this.model.employee.id.toString());
            this.nameTextBox.val(this.model.employee.name);
            this.statusTextBox.val(this.model.employee.status);
            this.box.offset({ top: this.model.top, left: this.model.left });
            if (this.model.isMouseDown) {
                this.box.addClass('employee-view-dragging');
            }
            else {
                this.box.removeClass('employee-view-dragging');
            }
        }
    }
    MVC.EmpolyeeView = EmpolyeeView;
    class EmpolyeeController {
        constructor(model, view) {
            this.model = model;
            this.view = view;
            this.subscribeEvents();
        }
        dragging(event) {
            if (this.model.isMouseDown === false) {
                return;
            }
            this.model.top = this.model.originalTop + event.clientY - this.model.mouseHitY;
            this.model.left = this.model.originalLeft + event.clientX - this.model.mouseHitX;
            this.view.update();
        }
        mouseRelease() {
            this.model.isMouseDown = false;
            this.view.update();
        }
        remeberOriginalPosition(event) {
            if ($(event.target).attr('id') !== 'employeeView') {
                return;
            }
            this.model.isMouseDown = true;
            this.model.mouseHitX = event.clientX;
            this.model.mouseHitY = event.clientY;
            this.model.originalLeft = this.view.box.offset().left;
            this.model.originalTop = this.view.box.offset().top;
        }
        saveEmployee() {
            alert(`ID ${this.model.employee.id} Name ${this.model.employee.name}`);
            this.model.employee.status = 'Saved';
            this.view.update();
        }
        updateEmployee() {
            this.model.employee.id = this.view.idTextBox.val();
            this.model.employee.name = this.view.nameTextBox.val();
            this.model.employee.status = 'Updated';
            this.view.update();
        }
        subscribeEvents() {
            this.view.idTextBox.change(() => { this.updateEmployee(); });
            this.view.nameTextBox.change(() => { this.updateEmployee(); });
            this.view.saveButton.click(() => { this.saveEmployee(); });
            this.view.box.mousedown((e) => { this.remeberOriginalPosition(e); });
            this.view.box.mouseup(() => { this.mouseRelease(); });
            this.view.box.mousemove((e) => { this.dragging(e); });
        }
    }
    MVC.EmpolyeeController = EmpolyeeController;
})(MVC || (MVC = {}));
$(document).ready(init);
function init() {
    let vm = new MVC.EmpolyeeViewModel();
    let v = new MVC.EmpolyeeView(vm);
    let c = new MVC.EmpolyeeController(vm, v);
}

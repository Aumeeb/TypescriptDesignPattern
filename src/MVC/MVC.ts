import * as $ from 'jquery';

namespace MVC {
    class Empolyee {
        id: number = 0;
        name: string = 'Unknown';
        status: string = 'Initialized';
    }
    class EmpolyeeView {
        box: JQuery;
        idTextBox: JQuery;
        nameTextBox: JQuery;
        statusTextBox: JQuery;
        saveButton: JQuery;
        model: Empolyee;
        constructor(m:Empolyee){
            this.model =m;
            this.createView();
            this.update();
        }

        createView() {
            this.box = $('<div/>').attr('id', 'emploeeView').appendTo($('body'));
            this.idTextBox = $('<input/>').attr('type', 'text').attr('id','idTextBox').appendTo($(this.box));
            this.nameTextBox = $('<input/>').attr('type', 'text').attr('id','nameTextBox').appendTo($(this.box));
            this.statusTextBox = $('<input/>').attr('type', 'text').attr('id','statusTextBox').appendTo($(this.box));
            this.saveButton = $('<input/>').attr('type', 'button').attr('id','saveButton').attr('value','Save').appendTo($(this.box));
        }
        update(){
            this.idTextBox.val(this.model.id.toString());
            this.nameTextBox.val(this.model.name);
            this.statusTextBox.val(this.model.status);
        }
    }

    let empolyee = new Empolyee();
    let empolyeeView  = new EmpolyeeView(empolyee);
}

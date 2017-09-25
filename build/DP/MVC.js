"use strict";
var MVC;
(function (MVC) {
    class Student {
        getRollNo() {
            return this.rollNo;
        }
        setRollNo(rollNo) {
            this.rollNo = rollNo;
        }
        getName() {
            return this.name;
        }
        setName(name) {
            this.name = name;
        }
    }
    class StudentView {
        printStudentDetails(studentName, studentRollNo) {
            console.log("Student:");
            console.log("Name: " + studentName);
            console.log("Roll No: " + studentRollNo);
        }
    }
    class StudentController {
        constructor(model, view) {
            this.model = model;
            this.view = view;
        }
        setStudentName(name) {
            this.model.setName(name);
        }
        getStudentName() {
            return this.model.getName();
        }
        setStudentRollNo(rollNo) {
            this.model.setRollNo(rollNo);
        }
        getStudentRollNo() {
            return this.model.getRollNo();
        }
        updateView() {
            this.view.printStudentDetails(this.model.getName(), this.model.getRollNo());
        }
    }
    class MVCPatternDemo {
        static main() {
            let model = new Student();
            model.setName('关然');
            model.setRollNo('88');
            let view = new StudentView();
            let controller = new StudentController(model, view);
            controller.updateView();
            controller.setStudentName("光源");
            controller.setStudentRollNo('100');
            controller.updateView();
        }
    }
    MVCPatternDemo.main();
})(MVC || (MVC = {}));

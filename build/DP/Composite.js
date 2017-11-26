"use strict";
var Composite;
(function (Composite) {
    class Employee {
        constructor(name, dept, salary) {
            this.add = (employee) => {
                this.subordinates.push(employee);
            };
            this.name = name;
            this.dept = dept;
            this.salary = salary;
            this.subordinates = new Array();
        }
    }
    var CEO = new Employee("John", "CEO", 30000);
    var headSales = new Employee("Robert", "Head Sales", 20000);
    var headMarketing = new Employee("Michel", "Head Marketing", 20000);
    var clerk1 = new Employee("Laura", "Marketing", 10000);
    var clerk2 = new Employee("Bob", "Marketing", 10000);
    var salesExecutive1 = new Employee("Richard", "Sales", 10000);
    var salesExecutive2 = new Employee("Rob", "Sales", 10000);
    CEO.add(headSales);
    CEO.add(headMarketing);
    headSales.add(salesExecutive1);
    headSales.add(salesExecutive2);
    headMarketing.add(clerk1);
    headMarketing.add(clerk2);
    console.log(CEO);
    CEO.subordinates.forEach((headEmployee) => {
        console.log(headEmployee);
        headEmployee.subordinates.forEach((deptEmployee) => {
            console.log(deptEmployee);
        });
    });
})(Composite || (Composite = {}));
//# sourceMappingURL=Composite.js.map
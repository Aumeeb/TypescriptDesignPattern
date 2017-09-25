namespace Composite {
    class Employee {
        name: string;
        dept: string;
        salary: number;

        subordinates: Array<Employee>;
        constructor(name: string, dept: string, salary: number) {
            this.name = name;
            this.dept = dept;
            this.salary = salary;
            this.subordinates = new Array<Employee>();
        }
        add = (employee: Employee) => {
            this.subordinates.push(employee)
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

    //打印该组织的所有员工
    // System.out.println(CEO);
    // for (Employee headEmployee : CEO.getSubordinates()) {
    //     System.out.println(headEmployee);
    //     for (Employee employee : headEmployee.getSubordinates()) {
    //         System.out.println(employee);
    //     }
    // }
    console.log(CEO);
    CEO.subordinates.forEach((headEmployee) => {
        console.log(headEmployee)
        headEmployee.subordinates.forEach((deptEmployee) => {
            console.log(deptEmployee)
        })
    })

}






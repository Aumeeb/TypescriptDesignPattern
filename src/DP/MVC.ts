namespace MVC {
    class Student {
        private rollNo: string;
        private name: string;
        getRollNo(): string {
            return this.rollNo;
        }
        setRollNo(rollNo: string): void {
            this.rollNo = rollNo;
        }
        getName(): string {
            return this.name;
        }
        setName(name: string): void {
            this.name = name;
        }
    }

    class StudentView {
        printStudentDetails(studentName: string, studentRollNo: string): void {
            console.log("Student:");
            console.log("Name: " + studentName);
            console.log("Roll No: " + studentRollNo);
        }
    }

    class StudentController {
        private model: Student;
        private view: StudentView;

        constructor(model: Student, view: StudentView) {
            this.model = model;
            this.view = view;
        }

        setStudentName(name: string): void {
            this.model.setName(name);
        }

        getStudentName(): string {
            return this.model.getName();
        }

        setStudentRollNo(rollNo: string): void {
            this.model.setRollNo(rollNo);
        }

        getStudentRollNo(): string {
            return this.model.getRollNo();
        }

        updateView(): void {
            this.view.printStudentDetails(this.model.getName(), this.model.getRollNo());
        }
    }

    class MVCPatternDemo {
        public static main(): void {

            //从数据可获取学生记录
            let model: Student = new Student();
            model.setName('关然');
            model.setRollNo('88');

            //创建一个视图：把学生详细信息输出到控制台
            let view = new StudentView();

            let controller = new StudentController(model, view);

            controller.updateView();

            //更新模型数据
            controller.setStudentName("光源");
            controller.setStudentRollNo('100')

            controller.updateView();
        }
    }

      MVCPatternDemo.main();
    
}
class Employee{
    double salary;
    String name;
    Employee(String name, double salary){
        this.name = name;
        this.salary = salary;
    }
    void displayEmployeeInfo(){
        System.out.println("Employee Name: " + name);
        System.out.println("Employee Salary: " + salary);
    }
}
class Manager extends Employee{
    String department;
    Manager(String name, double salary, String department){
        super(name, salary);
        this.department = department;
    }
    void displayManagerInfo(){
        displayEmployeeInfo();
        System.out.println("Department: " + department);
    }
}
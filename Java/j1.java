public class j1{
    static class Student{
        public String name;
        public int grades[];
        private double average;
        public static int count = 0;
    public Student(String name, int grades[], double average){
        this.name = name;
        this.grades = grades;
        this.average = average;
        count++;
    }
    public double getClassAverage(){
        int total = 0;
        for(int i = 0; i < Student.count; i++){
           
        }
        return (double) ;
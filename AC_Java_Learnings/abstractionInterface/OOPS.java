package abstractionInterface;

interface Animal {
    int eyes = 2; // All animals have 2 eyes by default (static and final by default)
    void walk(); // Abstract method that must be implemented by any class that implements Animal
    // void eat(); // Uncomment if needed
}

class Horse implements Animal, Herbivore {
    public void walk() { // Must specify public because the interface method is public
        System.out.println("Walks on 4 legs");
    }
}

class Student {
    String name; // Instance variable for the student's name
    static String school; // Static variable for the school name, shared by all instances of Student
}

public class OOPS {
    public static void main(String args[]){
        Horse horse = new Horse(); // Create an instance of Horse
        horse.walk();//Call the walk method on the Horse instance

        Student.school = "JMV";// Set the static variable school for the Student class
        //Note that setting value to variable of the class.... Not for individual instances
        Student student1 = new Student();// Create an instance of Student
        student1. name =" Tony";// Set the name for student1
        System.out.println(student1.name);
        String schoolName = Student.school; // Access the static variable school
        System.out.println(schoolName);
        //Student student2 = new Student();
        //student2.school = Student.school;//Redundant assignment(ie no longer needed)
        // System.out.println(student2.school);//The code correctly accesses the static field school using the class name Student.school. However, accessing it through an instance like student2.school is not recommended as it can be misleading. It’s better to always use the class name for clarity.
        System.out.println(Student.school);// Print the school name from the Student class
    }
}

//A package declaration in Java is a way to organize your classes and interfaces into namespaces, making your code more modular and easier to manage. 
//It is typically the first line in your Java source file and specifies the package to which the class belongs.

// public: This is an access modifier, which means the main method is accessible from anywhere. This is necessary because the Java Virtual Machine (JVM) needs to call this method to start the program.
// static: This keyword means that the method belongs to the class, not instances of the class. This allows the JVM to call the main method without creating an instance of the class.
// void: This indicates that the method does not return any value.
// main: This is the name of the method. It’s the entry point of any Java application. When you run a Java program, the JVM looks for the main method to start execution.
// String[] args: This is the parameter to the main method. It is an array of String objects. This array can store command-line arguments that are passed when the program is run. For example, if you run java MyProgram arg1 arg2, args will contain ["arg1", "arg2"].

//constructors do not have return type
//constructors are called only for object creation
//java doesnot need destructors, it has garbage collector
package OOPS_pak_Apna_College;
// import bank.*;////look about this

class Pen {
    String color;
    String type;

    public void write() {
        System.out.println("Writing something");
    }

    public void printColor() {
        System.out.println(this.color); // here this is calling object
    }
}

class Student {
    String name;
    int age;

    public void printInfo() {
        System.out.println(this.name);
        System.out.println(this.age);
    }

    // Default constructor
    Student() {
    }//empty definition, just differentiate between parameterized and non parameterized constructors

    // Parameterized constructor
    Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Copy constructor
    Student(Student studentCopy) {
        this.name = studentCopy.name;
        this.age = studentCopy.age;
    }
}

class Shape {
    String color;
}

class Triangle extends Shape {
// class Triangle extends Shape, Student {////This is multiple inheitance , which java doesn't support
    // You can add properties and methods specific to Triangle here
}


public class OOPS {
    public static void main(String[] args) {
        // Pen pen = new Pen();
        // pen.color = "red";
        // pen.type = "Ballpoint";
        // pen.write();
        // pen.printColor();

        // Pen pen2 = new Pen();
        // pen2.color = "black";
        // pen2.type = "Gel";
        // pen.printColor();
        // pen2.printColor();

        // Student s1 = new Student(); // as soon as new keyword is encountered memory is allocated
        // s1.name = "aman";
        // s1.age = 23;
        // s1.printInfo();

        // Student s2 = new Student("abcd", 45); // Correct constructor call
        // s2.printInfo();
        
        // Student s3 = new Student(s2);//calling copy constructor
        // s3.printInfo();

        /////////////////////////////

    }
}
 
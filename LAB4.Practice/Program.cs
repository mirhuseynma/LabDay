namespace LAB4.Practice
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Techer teacher = new Techer(1545, "Mirhuseynma", new DateTime(2002, 6, 7), "IT", 800, 12);
            Student student1 = new Student(1234,"Mirhuseynma",new DateTime(2002,7,6),"234A",91);
            Console.WriteLine(student1.GetInfo());
            
            Console.WriteLine(teacher.GetInfo());
            Console.WriteLine(teacher.GetRole());
            teacher.CalculateRetirementYears();


            //student1.IsGraduated();
        }
    }
}

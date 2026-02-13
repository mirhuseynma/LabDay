using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LAB4.Practice
{
    internal class Student:Person
    {
        private string _studentnumber;
        public string StudentNumber
        {
            get { return _studentnumber; }
            set 
            {
                if (string.IsNullOrWhiteSpace(value)) Console.WriteLine("bosh ola bilmez");
                else _studentnumber = value;
            }
        }
        private int _gpa;
        public int GPA 
        {
            get { return _gpa; }
            set 
            {
                if (0 < value && value < 100) _gpa = value;
                else Console.WriteLine("Gpa 0 ve 100 arasinda olmalidir");
            } 
        }
        private bool _ishonor;
        public bool IsHonor
        {
            get
            {
                if (GPA > 90) return true ;
                else return _ishonor;
                
            }
            
        }

        public Student(int id, string fullName, DateTime birthDate, string studentNumber, int gpa):base(id, fullName, birthDate)
        {
            StudentNumber = studentNumber;
            GPA = gpa;
        }

        public override string GetRole()
        {
            return $"Student number: {StudentNumber}, Gpa: {GPA}, Honor: {IsHonor}";
        }

        public override string GetInfo()
        {
            return base.GetInfo() + $" Student number: {StudentNumber}, Gpa: {GPA}, Honor: {IsHonor}";
        }

        public void IsGraduated()
        {
            
            int b = 22 - Age;
            int c = Age - 22;
            if (Age < 18)
            {
                Console.WriteLine("Shexsin ali tehsil uchun yashi azdir");
            }
            else if (Age == 18)
            {
                Console.WriteLine($"{FullNmae} adli telebe  bakalavr tehsil pillesine bu il baslayib ve {b} il muddetinde tehsiilni basa vuracaq");
            }
            else if (Age > 18 && Age < 22)
            {
                Console.WriteLine($"{FullNmae} adli telebe {b} il muddetinde tehsiilni basa vuracaq");
            }
            else if (Age > 22) Console.WriteLine($"{FullNmae} artiq {c} ildir ki, tehsilini basa vurub");

        }
    }
}

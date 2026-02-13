using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LAB4.Practice
{
    internal class Techer : Person
    {
        private string _departament;
        public string Departament
        {
            get { return _departament; }
            set
            {
                if (!string.IsNullOrEmpty(value)) _departament = value;
                else Console.WriteLine("bosh ola bilmez");
            }
        }
        private int _salary;
        public int Salary
        {
            get { return _salary; }
            set
            {
                if (value > 0) _salary = value;
                else Console.WriteLine("menfi ola bilmez");
            }
        }
        private int _yearsofexperience;
        public int YearsofExperince
        {
            get { return _yearsofexperience; }
            set
            {
                if (value > 0) _yearsofexperience = value;
                else Console.WriteLine("menfi ola bilmez");
            }
        }

        public bool IsSeniorTeacher
        {
            get { return YearsofExperince > 10 ? true : false; }
        }

        public Techer(int id, string fullName, DateTime birthDate, string departament, int salary, int yearsOfExperience) : base(id, fullName, birthDate)
        {
            Departament = departament;
            Salary = salary;
            YearsofExperince = yearsOfExperience;
        }

        public override string GetRole()
        {
            return $"Teacher Departament: {Departament}, Salary: {Salary}, Years of experience: {YearsofExperince}, is seniar teacher: {IsSeniorTeacher}";

        }

        public override string GetInfo()
        {
            return base.GetInfo() + $" Teacher Departament: {Departament}, Salary: {Salary}, Years of experience: {YearsofExperince}, is senior teacher: {IsSeniorTeacher}";
        }


        public void CalculateRetirementYears()
        {
            if (Age > 65) Console.WriteLine($"Artiq {Age - 65} ildir ki teqaude cixhib");
            else Console.WriteLine($"Teqaude cixmagina  {65 - Age} il qalib");

        }
    }
}

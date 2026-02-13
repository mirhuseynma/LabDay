using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LAB4.Practice
{
    internal class Person
    {
        
        public int ID { get; }
        private string _fullname;
        public string FullNmae 
        {
            get { return _fullname; }
            set 
            { 
                if(string.IsNullOrWhiteSpace(value))
                    Console.WriteLine("Bosh ola bilmez");
                else _fullname = value;
            } 
        }
        private DateTime _birthday;
        public DateTime BirthDay 
        {
            get {return _birthday;}
            set 
            {
                if (value > DateTime.Now) Console.WriteLine("Gelecek tarix ola bilmez");
                else _birthday = value;
            }
        }
        
        public int Age
        {
            get 
            {
                TimeSpan diff = DateTime.Now - BirthDay;
                return diff.Days / 365; 
            }
            
        }
        public DateTime RegistrationDate{ get;}
    
        public Person(int id, string fullName, DateTime birthDate)
        {
            ID = id;
            FullNmae = fullName;
            BirthDay = birthDate;
            
        }

       
        public virtual string GetInfo()
        {
            return $"Id: {ID}, Fullname: {FullNmae}, Birthday: {BirthDay}, Age: {Age}";
        }

        public virtual string GetRole()
        {
            return "";
        }
    }

}

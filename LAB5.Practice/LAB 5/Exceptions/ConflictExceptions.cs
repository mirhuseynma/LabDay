using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LAB_5.Exceptions
{
    internal class ConflictExceptions : Exception
    {
        // null reference exception
        public ConflictExceptions() : base("Task with this ID already exists!!")
        {
        }

        public ConflictExceptions(string message) : base(message)
        {
        }
    
            
    }
}

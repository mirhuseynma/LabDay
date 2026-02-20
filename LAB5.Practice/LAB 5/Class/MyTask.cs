using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LAB_5.Class
{
    public class MyTask
    {
        private static int _ID;
        public int Id { get;}
        public string? Tittle { get; set; }
        public string? Commentary { get; set; }
        public DateTime Created { get; }
        public TimeSpan Deadline { get; init; }
        public Enums.TaskStatus Status { get; set; }

        public MyTask(string? tittle, string? commentary, int deadlineDay)
        {
            _ID++;
            Id = _ID;
            Tittle = tittle;
            Commentary = commentary;
            Created = DateTime.Now;
            Deadline = TimeSpan.FromDays(deadlineDay);
            Status = Enums.TaskStatus.ToDo;
        }

        override public string ToString()
        {
            return $"ID: {Id}\nTittle: {Tittle}\nCommentary: {Commentary}\nCreated: {Created}\nDeadline: {Created + Deadline}\nStatus: {Status}\n";
        }


    }
}

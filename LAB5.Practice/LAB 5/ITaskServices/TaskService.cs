using LAB_5.Class;
using LAB_5.Exceptions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LAB_5.ITaskServices
{
    internal class TaskService : ITaskService
    {
        private static MyTask[]? _tasks = [];

        public void AddTask(MyTask task)
        {
            for (int i = 0; i < _tasks.Length; i++)
            {
                if(task == null)
                {
                    throw new ArgumentNullException("Task cant be null!!");
                }
                else if (_tasks[i].Id == task.Id)
                {
                    throw new ArgumentException("Task with this ID already exists!!");
                }
            }
            Array.Resize(ref _tasks, _tasks.Length + 1);
            _tasks[^1] = task;
        }

        public MyTask[] RemoveTaskById(int id)
        {
            MyTask[] tasks = [];
            for (int i = 0; i < _tasks.Length; i++)
            {
                if (_tasks[i].Id == id)
                {
                    continue;  
                }
                Array.Resize(ref tasks, tasks.Length + 1);
                tasks[^1] = _tasks[i];
            }
            
            return tasks;
        }

        public MyTask[] SeachTaskByTasksStatus(Enums.TaskStatus status)
        {
            MyTask[] tasks = [];

            for (int i = 0; i < _tasks.Length; i++)
            {
                if (_tasks[i].Status == status)
                {
                    Array.Resize(ref tasks, tasks.Length + 1);
                    tasks[^1] = _tasks[i];
                }
            }
            return tasks;

        }

        public MyTask[] SearchTaskByTaskTittle(string title)
        {
            MyTask[] tasks = [];
            for (int i = 0; i < _tasks.Length; i++)
            {
                if (_tasks[i].Tittle != title) throw new ConflictExceptions("Task with this title does not exist!!");
                if  (_tasks[i].Tittle == title)
                {
                    Array.Resize(ref tasks, tasks.Length + 1);
                    tasks[^1] = _tasks[i];
                }
            }
            return tasks;
            
        }
    }
}

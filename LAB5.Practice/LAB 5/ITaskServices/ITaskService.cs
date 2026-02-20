using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LAB_5.Class;

namespace LAB_5.ITaskServices
{
    public interface ITaskService
    {
        void AddTask(MyTask task);
        MyTask[] SearchTaskByTaskTittle(string title);
        MyTask[] SeachTaskByTasksStatus(Enums.TaskStatus status);
        MyTask[] RemoveTaskById(int id);
    }
}

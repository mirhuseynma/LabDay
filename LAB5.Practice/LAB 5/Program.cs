using LAB_5.Class;
using LAB_5.ITaskServices;

namespace LAB_5
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // create some tasks
            MyTask task1 = new MyTask("Task 1", "This is the first task", 3);
            MyTask task2 = new MyTask("Task 2", "This is the second task", 2);
            MyTask task3 = new MyTask("Task 3", "This is the third task", 1);
            MyTask task4 = new MyTask("Task 4", "This is the fourth task", 4);

            // create a task service and add tasks to it
            TaskService service = new TaskService();
            service.AddTask(task1);
            service.AddTask(task2);
            service.AddTask(task3);
            service.AddTask(task4);

            // tasks with id 2 will be removed
            MyTask[] removetasks = service.RemoveTaskById(2);
            foreach (MyTask task in removetasks)
            {
                Console.WriteLine(task.ToString());
            }
            // search for tasks with status ToDo
            MyTask[] searchByStatus = service.SeachTaskByTasksStatus(Enums.TaskStatus.ToDo);
            foreach (MyTask task in searchByStatus)
            {
                Console.WriteLine(task.ToString());
            }

            // search for tasks with title "Task 3"
            try 
            {
                MyTask[] searchByTitle = service.SearchTaskByTaskTittle("Task 4");
                foreach (MyTask task in searchByTitle) 
                    Console.WriteLine(task.ToString());   
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            
        }
    }
}

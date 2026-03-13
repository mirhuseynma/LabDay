using Microsoft.Data.SqlClient;

namespace Lab7.Practice
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string connect = "Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=Product;Integrated Security=SSPI;";
            SqlConnection connection = new SqlConnection(connect);
            connection.Open();

            GetAll(connect);
        }

        static void GetAll(string connect)
        {
            using SqlConnection connection = new SqlConnection(connect);
            connection.Open();
            string query = "SELECT * FROM Products";
            using SqlCommand command = new SqlCommand(query, connection);
            using SqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                Console.WriteLine(reader.GetString(0));
            }
           
            
        }

        
        

    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Todos.WebApi.Model;

namespace Todos.WebApi
{
    public class TodoService : ITodoService
    {

        public string SaveTodo(List<Todo> todos)
        {
            List<Todo> todoList = new List<Todo>();
            todoList.AddRange(todos);
            
            return "success";
        }

    }
}

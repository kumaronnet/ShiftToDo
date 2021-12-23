using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Todos.WebApi.Model;

namespace Todos.WebApi
{
    public interface ITodoService
    {
        string SaveTodo(List<Todo> todos);
    }
}

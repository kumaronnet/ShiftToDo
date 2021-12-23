using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using Todos.WebApi.Model;

namespace Todos.WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TodosController : ControllerBase
    {
        private readonly ILogger<TodosController> _logger;
        private ITodoService _todoService;
        public TodosController(ILogger<TodosController> logger, ITodoService todoService)
        {
            _logger = logger;
            _todoService = todoService;
        }

        [HttpPost]
        public IActionResult SaveToDo(List<Todo> todos)
        {
            var todoList = _todoService.SaveTodo(todos);
            return CreatedAtRoute("", todoList);
            
        }
    }
}

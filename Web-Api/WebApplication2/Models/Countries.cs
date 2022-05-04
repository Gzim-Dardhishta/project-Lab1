using Microsoft.AspNetCore.Mvc;

namespace WebApplication2.Models
{
    public class Countries : Controller
    {
        public int ID { get; set; }
        public string NAME { get; set; }
        public int ISO { get; set; }
    }
}

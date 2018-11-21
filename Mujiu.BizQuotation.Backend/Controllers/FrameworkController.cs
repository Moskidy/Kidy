using Microsoft.AspNetCore.Mvc;

namespace Mujiu.BizQuotation.Backend.Controllers
{
    /// <summary>
    /// 框架控制器
    /// </summary>
    public class FrameworkController : BaseController
    {
        /// <summary>
        /// 首页
        /// </summary>
        /// <returns></returns>
        public IActionResult Index()
        {
            return View();
        }
    }
}
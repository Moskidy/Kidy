using Microsoft.AspNetCore.Mvc;

namespace Mujiu.BizQuotation.Backend.Controllers
{
    /// <summary>
    /// 登录控制器
    /// </summary>
    public class LoginController : BaseController
    {
        /// <summary>
        /// 首页
        /// </summary>
        /// <returns></returns>
        public IActionResult Index()
        {
            return View();
        }

        /// <summary>
        /// 登录接口
        /// </summary>
        /// <returns></returns>
        public string Login()
        {
            return string.Empty;
        }
    }
}
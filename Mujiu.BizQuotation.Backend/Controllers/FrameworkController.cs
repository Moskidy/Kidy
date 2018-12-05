using Microsoft.AspNetCore.Mvc;
using Mujiu.BizQuotation.Domain.Entity;
using Mujiu.BizQuotation.Domain.Entity.Framework;
using Mujiu.BizQuotation.Repository.Framework;

namespace Mujiu.BizQuotation.Backend.Controllers
{
    /// <summary>
    /// 框架控制器
    /// </summary>
    public class FrameworkController : BaseController
    {
        #region 仓库类

        private MainMenuRepsitory _mainMenuRepsitory = new MainMenuRepsitory();

        #endregion

        /// <summary>
        /// 首页
        /// </summary>
        /// <returns></returns>
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult GetMainMenu()
        {
            ResultEntity<MainMenuEntity> ret = new ResultEntity<MainMenuEntity>
            {
                IsSuccess = true,
                DataList = _mainMenuRepsitory.GetMainMenuList()
            };
            return Json(ret);
        }

        #region 测试视图

        public IActionResult Move()
        {
            return View();
        }

        #endregion 测试视图
    }
}
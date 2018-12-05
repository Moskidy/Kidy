using Microsoft.AspNetCore.Mvc;
using Mujiu.BizQuotation.Domain.Entity;

namespace Mujiu.BizQuotation.Backend.Controllers
{
    public class BaseController : Controller
    {
        /// <summary>
        /// 返回结果实体类
        /// </summary>
        protected ResultEntity resultEntity { get; set; }
    }
}
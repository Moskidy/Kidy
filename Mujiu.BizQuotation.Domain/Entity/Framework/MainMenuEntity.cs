using System.Collections.Generic;

namespace Mujiu.BizQuotation.Domain.Entity.Framework
{
    /// <summary>
    /// 主菜单实体类
    /// </summary>
    public class MainMenuEntity
    {

        public MainMenuEntity()
        {
            NodeList = new List<MainMenuEntity>();
        }
        /// <summary>
        /// 菜单编号
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// 菜单标题
        /// </summary>
        public string Title { get; set; }

        /// <summary>
        /// 菜单图标
        /// </summary>
        public string Icon { get; set; }

        /// <summary>
        /// 菜单路径
        /// </summary>
        public string Url { get; set; }

        /// <summary>
        /// 是否使用iframe打开路径
        /// </summary>
        public bool IsIfrmame { get; set; }

        /// <summary>
        /// 是否为叶节点
        /// </summary>
        public bool IsLeaf { get; set; }

        /// <summary>
        /// 下级节点列表
        /// </summary>
        public List<MainMenuEntity> NodeList { get; set; }
    }
}

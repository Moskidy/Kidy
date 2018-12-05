using Mujiu.BizQuotation.Domain.Entity.Framework;
using System.Collections.Generic;

namespace Mujiu.BizQuotation.Repository.Framework
{
    /// <summary>
    /// 主菜单仓库类
    /// </summary>
    public class MainMenuRepsitory
    {
        /// <summary>
        /// 获取主菜单列表
        /// </summary>
        /// <returns></returns>
        public List<MainMenuEntity> GetMainMenuList()
        {
            List<MainMenuEntity> retList = new List<MainMenuEntity>();
            var node1 = new MainMenuEntity {
                Title="系统设置",
                Id = "001",
                Icon ="folder",
                IsLeaf = false
            };
            node1.NodeList.Add(new MainMenuEntity {
                Title = "模块管理",
                Id = "0011",
                Icon = "list",
                IsLeaf = true
            });
            node1.NodeList.Add(new MainMenuEntity
            {
                Title = "权限管理",
                Id = "0012",
                Icon = "list",
                IsLeaf = true
            });
            var node2 = new MainMenuEntity
            {
                Title = "商务报价",
                Id = "002",
                Icon = "folder",
                IsLeaf = false
            };
            node2.NodeList.Add(new MainMenuEntity
            {
                Title = "报价分配",
                Id = "0021",
                Icon = "list",
                IsLeaf = true
            });
            node2.NodeList.Add(new MainMenuEntity
            {
                Title = "报价项目",
                Id = "0022",
                Icon = "list",
                IsLeaf = true
            });
            var node3 = new MainMenuEntity
            {
                Title = "报价管理",
                Id = "003",
                Icon = "folder",
                IsLeaf = false
            };
            node3.NodeList.Add(new MainMenuEntity
            {
                Title = "报价总览",
                Id = "0031",
                Icon = "list",
                IsLeaf = true
            });
            node3.NodeList.Add(new MainMenuEntity
            {
                Title = "项目统计",
                Id = "0032",
                Icon = "list",
                IsLeaf = true
            });
            retList.Add(node1);
            retList.Add(node2);
            retList.Add(node3);
            return retList;
        }
    }
}

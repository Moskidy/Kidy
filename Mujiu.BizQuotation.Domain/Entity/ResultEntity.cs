using System;
using System.Collections.Generic;
using System.Text;

namespace Mujiu.BizQuotation.Domain.Entity
{
    /// <summary>
    /// 返回结果实体类
    /// </summary>
    public class ResultEntity
    {
        /// <summary>
        /// 操作是否成功
        /// </summary>
        public bool IsSucess { get; set; }

        /// <summary>
        /// 返回代码
        /// </summary>
        public int Code { get; set; }

        /// <summary>
        /// 返回信息
        /// </summary>
        public string Message { get; set; }
    }

    /// <summary>
    /// 返回结果泛型类
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class ResultEntity<T> : ResultEntity {
        public T Data { get; set; }
    }
}

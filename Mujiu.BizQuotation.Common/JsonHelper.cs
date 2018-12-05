namespace Mujiu.BizQuotation.Common
{
    public class JsonHelper
    {
        private static JsonHelper _jsonHelper = new JsonHelper();
        public static JsonHelper Instance => _jsonHelper;

        public string Serialize(object obj)
        {
            return string.Empty;
            //return JsonConvert.SerializeObject(obj, new IsoDateTimeConverter { DateTimeFormat = "yyyy-MM-dd HH:mm:ss" });
        }
    }
}

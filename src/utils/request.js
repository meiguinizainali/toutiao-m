// axios请求工具模块
// 1.import引入 2.使用接收  3.export输出
import axios from 'axios'
const requser = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn'// 接口的基础路径
})

// 请求拦截器

// 响应拦截器

export default requser

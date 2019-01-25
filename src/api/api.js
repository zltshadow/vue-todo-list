import axios from 'axios' // 导入axios模块
export const getTodoList = params => {
  // 封装一个函数，名为getTodoList
  return axios.get('/todo/list', {
    // 请求路径 ‘/todo/list’
    params: params
  })
}
// 添加待办单项
export const addTodo = params => {
  return axios.post('/todo/addTodo', params).then(res => res.data)
}
// 新增一个请求查询待办单项列表的数据的接口函数
export const getTodo = params => {
  return axios.get('/todo/listId', {
    params: params
  })
}
// 新增一个请求新增待办单的接口函数
export const addRecord = params => {
  return axios.post('/todo/addRecord', params).then(res => res.data)
}

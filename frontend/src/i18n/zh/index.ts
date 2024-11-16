import login from './login'
import project from './project'

const global = {
  // doc_addr: '文档地址',
  // code_addr: '仓库地址',
  // form_account: '请输入账号',
  // form_password: '请输入密码',
  // // 头部
  // doc: '说明文档',
  // help: '帮助中心',
  // contact: '关于软件',
  // logout: '退出登录',
  // // 系统设置
  // sys_set: '系统设置',
  // lang_set: '语言设置',
  // // 功能键
  // r_edit: '编辑',
  // r_preview: '预览',
  // r_copy: '克隆',
  // r_rename: '重命名',
  // r_publish: '发布',
  // r_unpublish: '取消发布',
  // r_download: '下载',
  // r_delete: '删除',
  // r_more: '更多',
  // ==========

  // 登录
  form_account: '请输入账号',
  form_account_req: '账号不能为空',
  form_account_min: '账号长度不能小于{num}',
  form_account_max: '账号长度不能大于{num}',
  form_password: '请输入密码',
  form_psd_req: '密码不能为空',
  form_psd_min: '密码长度不能小于{num}',
  form_psd_max: '密码长度不能大于{num}',
  form_login_btn: '登录',
  form_remember_me: '记住我',
  form_forgot_password: '忘记密码？',

  // 头部
  logout: '退出登录',
  search: '搜索'
}

export default {
  global,
  login,
  project
}

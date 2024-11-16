import login from './login'
import project from './project'

const global = {
  // doc_addr: 'Document',
  // code_addr: 'Code',
  // form_account: 'Please enter your account or email',
  // form_password: 'Please enter your password',
  // // header
  // doc: 'Document',
  // help: 'Help',
  // contact: 'About Software',
  // logout: 'Logout',
  // // system setting
  // sys_set: 'System Setting',
  // lang_set: 'Language Setting',
  // // right key
  // r_edit: 'Edit',
  // r_preview: 'Preview',
  // r_copy: 'Clone',
  // r_rename: 'Rename',
  // r_publish: 'Publish',
  // r_unpublish: 'Unpublish',
  // r_download: 'Download',
  // r_delete: 'Delete',
  // r_more: 'More',
  // ==========

  // 登录
  form_account: 'Please enter your account',
  form_account_req: 'Account is required',
  form_account_min: 'Account length can not be less than {num}',
  form_account_max: 'The account can contain a maximum of {num} characters',
  form_password: 'Please enter your password',
  form_psd_req: 'Password is required',
  form_psd_min: 'Password length can not be less than {num}',
  form_psd_max: 'The password can contain a maximum of {num} characters',
  form_login_btn: 'Sign In',
  form_remember_me: 'Remember me',
  form_forgot_password: 'Forgot Password?',

  // 头部
  logout: 'Logout',
  search: 'Search'
}

export default {
  global,
  login,
  project
}

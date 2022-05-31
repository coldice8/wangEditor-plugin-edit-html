/**
 * @description edit HTML module entry
 * @author coldice945
 */

import './local' // 多语言

import { IModuleConf } from '@wangeditor/editor'
import { editHtmlMenuConf } from './menu/index'

const module: Partial<IModuleConf> = {
  menus: [editHtmlMenuConf],
}

export default module

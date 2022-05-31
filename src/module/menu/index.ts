/**
 * @description edit HTML menu entry
 * @author coldice945
 */

import EditHtmlMenu from './EditHtml'

export const editHtmlMenuConf = {
  key: 'editHtml', // menu key ，唯一。注册之后，可配置到工具栏
  factory() {
    return new EditHtmlMenu()
  },
}

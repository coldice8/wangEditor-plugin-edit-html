/**
 * @description edit HTML menu
 * @author coldice945
 */

import {
  IModalMenu,
  DomEditor,
  IDomEditor,
  SlateNode,
  SlateRange,
  t,
  genModalTextareaElems,
  genModalButtonElems,
} from '@wangeditor/editor'
import { HTML_SVG } from '../../constants/icon-svg'
import $, { Dom7Array, DOMElement } from '../../utils/dom'
import { genRandomStr } from '../../utils/util'

/**
 * 生成唯一的 DOM ID
 */
function genDomID(): string {
  return genRandomStr('w-e-edit-html')
}

class EditHtmlMenu implements IModalMenu {
  readonly title = t('html.edit')
  readonly iconSvg = HTML_SVG
  readonly tag = 'button'
  readonly showModal = true // 点击 button 时显示 modal
  readonly modalWidth = 500
  private $content: Dom7Array | null = null
  private readonly textareaId = genDomID()
  private readonly buttonId = genDomID()

  getValue(editor: IDomEditor): string | boolean {
    // 插入菜单，不需要 value
    return ''
  }

  isActive(editor: IDomEditor): boolean {
    // 任何时候，都不用激活 menu
    return false
  }

  exec(editor: IDomEditor, value: string | boolean) {
    // 点击菜单时，弹出 modal 之前，不需要执行其他代码
    // 此处空着即可
  }

  isDisabled(editor: IDomEditor): boolean {
    const { selection } = editor
    if (selection == null) return true

    return false
  }

  getModalPositionNode(editor: IDomEditor): SlateNode | null {
    return null // modal 依据选区定位
  }

  getModalContentElem(editor: IDomEditor): DOMElement {
    const { textareaId, buttonId } = this

    const [textareaContainerElem, textareaElem] = genModalTextareaElems(
      t('html.html'),
      textareaId,
      t('html.placeholder')
    )
    const $textarea = $(textareaElem)
    const [buttonContainerElem] = genModalButtonElems(buttonId, t('html.ok'))

    if (this.$content == null) {
      // 第一次渲染
      const $content = $('<div></div>')

      // 绑定事件（第一次渲染时绑定，不要重复绑定）
      $content.on('click', `#${buttonId}`, e => {
        e.preventDefault()
        const value = $content.find(`#${textareaId}`).val().trim()
        this.editHtml(editor, value)
        editor.hidePanelOrModal() // 隐藏 modal
      })

      // 记录属性，重要
      this.$content = $content
    }

    const $content = this.$content
    $content.html('') // 先清空内容

    // append textarea and button
    $content.append(textareaContainerElem)
    $content.append(buttonContainerElem)

    // 设置 input val
    const value = editor.getHtml()
    $textarea.val(value)

    // focus 一个 input（异步，此时 DOM 尚未渲染）
    setTimeout(() => {
      $textarea.focus()
    })

    return $content[0]
  }

  private editHtml(editor: IDomEditor, value: string) {
    if (!value) return

    // 还原选区
    editor.restoreSelection()

    if (this.isDisabled(editor)) return

    editor.clear()
    editor.dangerouslyInsertHtml(value)
  }
}

export default EditHtmlMenu

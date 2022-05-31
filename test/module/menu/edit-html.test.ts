/**
 * @description insert formula menu test
 * @author wangfupeng
 */

import { SlateEditor } from '@wangeditor/editor'
import createEditor from '../../utils/create-editor'
import EditHtmlMenu from '../../../src/module/menu/EditHtml'

describe('edit html menu', () => {
  const editor = createEditor()
  const startLocation = SlateEditor.start(editor, [])
  const menu = new EditHtmlMenu()

  it('getValue', () => {
    expect(menu.getValue(editor)).toBe('')
  })

  it('isActive', () => {
    expect(menu.isActive(editor)).toBe(false)
  })

  it('isDisabled', () => {
    // 有选区
    editor.select(startLocation)
    expect(menu.isDisabled(editor)).toBeFalsy()

    // 无选区
    editor.deselect()
    expect(menu.isDisabled(editor)).toBeTruthy()
  })

  it('getModalPositionNode', () => {
    expect(menu.getModalPositionNode(editor)).toBeNull()
  })

  it('getModalContentElem', () => {
    const elem = menu.getModalContentElem(editor)
    expect(elem.tagName).toBe('DIV')
  })
})

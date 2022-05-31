/**
 * @description formula local test
 * @author wangfupeng
 */

import '../../src/module/local'
import { i18nChangeLanguage, t } from '@wangeditor/editor'

describe('local', () => {
  it('zh-CN', () => {
    expect(t('html.html')).toBe('HTML 代码')
  })
  it('en', () => {
    i18nChangeLanguage('en')
    expect(t('html.html')).toBe('HTML Code')
  })
})

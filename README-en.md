# wangEditor edit HTML module

[中文文档](./README.md)

## Introduction

[wangEditor](https://www.wangeditor.com/en/) Edit HTML plugin.

![](./_img/demo.png)

## Installation

```shell
yarn add @wangeditor/plugin-edit-html
```

## Usage

### Register to editor


```js
import { Boot, IEditorConfig, IToolbarConfig } from '@wangeditor/editor'
import editHtmlModule from '@wangeditor/plugin-edit-html'

// Register
// You should register this before create editor, and register only once (not repeatedly).
Boot.registerModule(editHtmlModule)
```

### Menu config

```js
const toolbarConfig: Partial<IToolbarConfig> = {
  insertKeys: {
    index: 0,
    keys: [
      'editHtml', // Edit HTML menu
    ],
  },

  // others...
}
```

Then create editor and toolbar, you will use `editorConfig` and `toolbarConfig`

## Others

Support i18n.

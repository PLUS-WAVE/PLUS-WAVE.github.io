import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

/* =================== locale: zh-CN ======================= */

export const zhNotes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [
    {
      // 声明笔记的目录，相对于 `notes.dir`，这里表示 `notes/typescript` 目录
      dir: 'C++',
      // 声明笔记的链接前缀，与 `notes.link` 拼接，这里表示 `/typescript/`
      // 笔记内的所有文章会以 `/typescript/` 作为访问链接前缀。
      link: '/cpp/',
      // 配置 笔记侧边导航栏，用于导航向笔记内的所有文档
      // 声明为 `auto` 的，将根据目录结构自动生成侧边栏导航
      sidebar: 'auto'
    },
    {
      dir: 'OpenGL',
      link: '/opengl/',
      sidebar: 'auto'
    },
  ],
})

/* =================== locale: en-US ======================= */

const enDemoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar'],
})

export const enNotes = defineNotesConfig({
  dir: 'en/notes',
  link: '/en/',
  notes: [enDemoNote],
})


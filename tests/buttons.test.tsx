import { expect, test } from 'claude-code/testing'

const BAND = {
  plugin: 'prompt-master',
  component: 'AbovePrompt',
  props: {
    hasSurvey: false,
    isCollapsed: false,
    isWorking: false,
    maxRows: 10,
    bodyColumns: 80,
    scroll: { offset: 0, bodyRows: 9 },
    view: {},
  },
} as const

for (const [key, reply] of [
  ['prompt-master', 'Please write a Python script that renames every file in a folder to lowercase.'],
  ['grammar-master', 'Can you fix the spelling in my essay?'],
] as const) {
  test(`${key} replaces the draft with the model's text`, async ($, on) => {
    let draft = 'cn u make scirpt rename files lowercse'
    let sentModel = ''
    on('prompt.read', () => ({ value: { text: draft, cursor: draft.length } }))
    on('model.complete', (_, e) => {
      sentModel = e.model
      return { value: { isAnswered: true, text: reply, usage: { input_tokens: 1, output_tokens: 1, cache_creation_input_tokens: 0, cache_read_input_tokens: 0 } } }
    })
    on('prompt.fill', (_, e) => {
      draft = e.text
      return { isFilled: true, text: draft, cursor: draft.length }
    })

    const ui = await $.ui.mount({ ...BAND, surface: 'desktop' })
    await ui.press({ key })
    expect(draft).toBe(reply)
    expect(sentModel).toBe(key === 'prompt-master' ? 'sonnet' : 'haiku')
    await ui.unmount()
  })
}

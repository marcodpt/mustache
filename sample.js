import template from './index.js'
import card from './samples/card.js'
import alert from './samples/alert.js'

export default {
  title: 'Template component',
  gh: 'https://github.com/marcodpt/template',
  samples: {
    card,
    alert
  },
  comp: template,
  updates: {
    hello: {
      text: "Hello world!"
    }
  }
}

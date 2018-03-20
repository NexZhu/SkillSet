import convert from './convert'
import nex from './nex.json'

window.onload = () => {

  const editor = ace.edit("editor")
  const JsonMode = ace.require("ace/mode/json").Mode
  editor.session.setMode(new JsonMode())
  editor.setValue(JSON.stringify(nex, null, '  '))

  const km = window.km = new kityminder.Minder()
  km.renderTo('#minder-view')
  generate()
  km.disable()
  km.execCommand('hand')
  document.querySelector('#generate-btn').onclick = generate
  document.querySelector('#save-btn').onclick = save

  function generate() {
    km.importData('json', convert(editor.getValue()))
  }

  function save() {
    km.exportData('png').then((url) => {
      const download = document.createElement('a')
      download.href = url
      download.download = 'skill-set.png'
      download.click()
      document.querySelector('canvas').remove()
    })
  }
}

import convert from './convert'

window.onload = () => {
  const km = window.km = new kityminder.Minder()
  km.renderTo('#minder-view')
  generate()
  km.disable()
  km.execCommand('hand')
  document.querySelector('#generate-btn').onclick = generate
  document.querySelector('#save-btn').onclick = save
}

function generate() {
  km.importData('json', convert(document.querySelector('#skillset-input').value))
}

function save() {
  km.exportData('png').then((url) => {
    let download = document.createElement('a')
    download.href = url
    download.download = 'skill-set.png'
    download.click()
    document.querySelector('canvas').remove()
  })
}

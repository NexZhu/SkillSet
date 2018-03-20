export default function convert(skillset) {
  skillset = JSON.parse(skillset)
  try {
    let data = {root: {data: {text: skillset.name + "'s Skill Set"}, children: []}}
    convertRecur(skillset.skillset, data.root.children)
    return JSON.stringify(data)
  } catch (err) {
    return null
  }
}

function convertRecur(src, dst) {
  for (let skill in src) {
    if (!src.hasOwnProperty(skill) || skill.startsWith('.')) continue
    let child = {data: {text: skill}, children: []}
    let data = src[skill]
    if (typeof data == 'object' || typeof data == 'string') {
      if (data['.level']) child.data.priority = data['.level']
      convertRecur(data, child.children)

    } else child.data.priority = data
    dst.push(child)
  }
}

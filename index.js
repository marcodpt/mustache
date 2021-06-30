import mustache from 'https://cdn.jsdelivr.net/npm/mustache@4.2.0/mustache.mjs'

export default (e, params) => {
  const render = data => {
    e.innerHTML = mustache.render(params.view, data)
  }
  render(params.data)
  return render
}

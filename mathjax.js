(function() {
  var script1 = document.createElement('script')
  var script2 = document.createElement('script')
  script1.src = 'https://polyfill.io/v3/polyfill.min.js?features=es6'
  script2.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js'
  document.body.appendChild(script1)
  document.body.appendChild(script2)
}())
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  //var holder = document.getElementById('nested')
  //return holder.getElementsByClassName('target')[0]
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var rList = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0, l = rList.length; i<l; i++) {
    rList[i].innerHTML = (parseInt(rList[i].innerHTML,10) + n).toString()
  }
}

function deepestChild() {
  const list = document.querySelector('div#grand-node')

  var current = list
  var previous = {};
  
  while (current) {
    previous = current
    current = previous.children[0]
  }
    return previous
}

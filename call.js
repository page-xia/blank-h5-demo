/* eslint-disable */
(function () {
  var addCart = function (e) {
    e && e.preventDefault && e.preventDefault()
    // var ccBtn = document.querySelectorAll("input[name='checkout'].bold_clone")
    // if (ccBtn && ccBtn.length) {

    // }
    window.location.href = 'https://www.google.com'
  }
  $('form[action^=\'/cart\'], form[action^=\'/checkout\']').not('form[action=\'/cart/add\']').find('button[name=\'checkout\'][type=\'submit\'], input[name=\'checkout\'][type=\'submit\'], input[type=\'submit\'][value=\'Checkout\']').map((i, v) => {
    console.log($(v).attr('data-opc-checkout'))
    console.log($(v).attr('data-saso'))
    var c = v.cloneNode(true)
    c.addEventListener('click', addCart)
    c.addEventListener('touchstart', addCart)
    v.parentNode.replaceChild(c, v)
  })
})()

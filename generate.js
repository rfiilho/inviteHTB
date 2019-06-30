xhr = new XMLHttpRequest()
xhr.open("POST", "/api/invite/generate")
xhr.send()

setTimeout(function(){
	r = JSON.parse(xhr.response);
	r = atob(r.data.code)
	alert("Invite Code is: "+ r)
	
}, 500);

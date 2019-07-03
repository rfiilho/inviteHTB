xhr = new XMLHttpRequest()
xhr.open("POST", "/api/invite/generate")
xhr.onreadystatechange = function(){
	if(xhr.readyState == 4 && xhr.status == 200){
		r = JSON.parse(xhr.response);
		r = atob(r.data.code)
		alert("Invite Code is: "+ r)
	}
}
xhr.send()

## Instruction

To generate the invite, paste the following code in the console:

```sh
xhr = new XMLHttpRequest()
xhr.open("POST", "/api/invite/generate")
xhr.send()

setTimeout(function(){
	r = JSON.parse(xhr.response);
	r = atob(r.data.code)
	alert("Invite Code is: "+ r)
	
}, 500);
```

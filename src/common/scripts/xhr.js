export default ({
	method="get",
	url="/",
	data=null
})=>new Promise((res,rej)=>{
	const xhr=new XMLHttpRequest();
	xhr.open(method,url);
	xhr.onload=()=>res(JSON.parse(xhr.responseText));
	xhr.onerror=rej;
	xhr.send(data);
})
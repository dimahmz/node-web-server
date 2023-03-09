const http= require('http');
const fs =require('fs');
const port = 7838;

const server =http.createServer((req, res) => {
// console.log(req.url);
if(req.url==='/'){

	fs.readFile('./index.html', (error, html)=>{

	if(error) { res.write(error); res.end();}
	else {res.write(html);res.end();}});
	return;
}

if(!req.url.startsWith("/files/")) {
	res.write("this file doesn't exist");res.end();
	return
};

fs.readFile('./'+req.url, (error, book)=>{
if(error) {res.write("this file doesn't exist");res.end();console.log(error);}
else {res.write(book);res.end();}});

// console.log("new connection");
});

server.listen(port);

console.log(`server is running on ${port} port`);

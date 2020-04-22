//ETAPA 01: 
//USANDO  "REQUIRE" PARA CARREGAR O MÓDULO HTTP E ARMAZENAR A INSTÂNCIA HTTP RETORNADA EM
// UMA VARIÁVEL HTTP DA SEGUINTE MANEIRA

var http =  require("http");

//ETAPA 02: Criar um Servidor
//Comando - http.createServer() -> PARA CRIAR UMA INSTÂNCIA DO SERVIDOR
//Comando - listen ->  PORTA DO SERVIDOR


http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type': 'text/plain'})
	response.end('Olá Mundo!')

}).listen(8081)

console.log('Server running at http://127.0.0.1:8081/')

	

const express = require("express"); 
const app = express(); 


app.get("/", function(req,res){
    res.send("<h1>Bem vindo a sua conta Bancaria</h1>");
})


app.get("/conta", function(req,res){
    res.send("<h1>Voce pode realizar um saque ou um deposito!</h1>");
})


app.get("/conta/saque", function(req,res){

    res.send("saque realizado");
})



// app.get("/cadastroconta/{:nome}", function(req,res){

//     var nome = req.params.nome;
//     if (nome){
//         res.send("<h1>animal " + nome + " criado!</h1>");
//     }else{
//         res.send("animal criado!");
//     }
    
// })
app.listen(2007, function(erro){
    if (erro){
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
})
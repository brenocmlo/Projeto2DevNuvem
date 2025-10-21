const express = require("express"); 
const app = express(); 


app.get("/", function(req,res){
    res.send("<h1>Bem vindo ao zoológico!</h1>");
})


app.get("/animais", function(req,res){
    res.send("<h1>Voce pode cadastrar um animal!</h1>");
})


app.get("/consulta/:parametro", function(req,res){

    res.send("retorno consulta:" + req.params.parametro);
})



app.get("/cadastroanimal/{:nome}", function(req,res){

    var nome = req.params.nome;
    if (nome){
        res.send("<h1>animal " + nome + " criado!</h1>");
    }else{
        res.send("animal criado!");
    }
    
})
app.listen(2007, function(erro){
    if (erro){
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
})
<?php 

if (isset($_POST["action"])) { 

   $nome=$_POST["nome"]; 
   $idade=$_POST["idade"];
   $profissão=$_POST["profissão"];
   $email=$_POST["email"]; 
   $telefone=$_POST["telefone"]; 
   $datadepreenchimento=$_POST["data de preenchimento"];  

   echo "<p>Olá, ".$nome."</p>"; 
   echo "<p>Sua idade é: ".$idade."</p>";
   echo "<p>Sua profissão é: ".$profissão."</p>";
   echo "<p>Seu email é: ".$email."</p>"; 
   echo "<p>Seu telefone é: ".$telefone."</p>"; 
   echo "<p>Este formulário foi preenchido em: ".$datadepreenchimento."</p>"; 

} 

?>
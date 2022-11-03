const pessoas = [
    {name: "Fabiana Araujo", age: 33},
    {name: "Gabriel Gomes", age: 25},
    {name: "Fernando Henrique", age: 17},
    {name: "Ana Luiza", age: 2},
    {name: "Geralda do Nascimento", age: 93},
    {name: "Miguel Souza", age: 70},
    {name: "Antonio Miguel", age: 69},
]
const teste = pessoas;
//Atividade 3
function atividade3(){
  const nome2 = pessoas.find((user, index, array) => user.name == nome);
  console.log("Atividade 3");
  console.log(nome2);
  }
  
//Atividade 4
const pessoas2 = pessoas.map((user, index, array)=> {
	return user.name.split(' ').slice(0,1);
})

  
//Atividade 5  
function atividade5(){
    teste.forEach((item, i) => {
      item.id = i + 1;
    })
    console.log("Atividade 5");
    console.log(pessoas);
    } 


//Atividade 6
function atividade6(){
    const newpessoas = pessoas.filter((user, index, array) => user.age >= 18);
    console.log("Atividade 6");
    console.log(newpessoas);
    }   

//Atividade 7
function atividade7(){
	const pessoas7 = pessoas.map((user, index, array)=> {
		return user.age;
})
	var soma = 0;
	for(var i = 0; i < pessoas7.length; i++) {
    soma += pessoas7[i];
}
	console.log("Atividade 7");
  console.log(soma/7);
} 

////////////////////////////////////////////////////
const nome = prompt("Insira o nome");
atividade3(pessoas);
console.log("Atividade 4");
console.log(pessoas2);
atividade5(pessoas);
atividade6(pessoas);
atividade7(pessoas);
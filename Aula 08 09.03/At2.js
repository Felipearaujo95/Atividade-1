const quantidadedealunos = 14;
for (let index = 0; index <= quantidadedealunos; index++)
{
    if(index == 0){
        console.log('número é zero');
} else if(index %2 == 0){
    console.log('o número é par:'+""+index);
} else {
    console.log('o número é impar:'+""+index);
}
}
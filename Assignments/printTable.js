function printTable(num) {
    for (i = 1; i <= 10; i++) {

        console.log(num*i);
    }
}
printTable(2);
function printTable2(num){
    let j=0;
    for(i=1;i<=10;i++){
        j=j+num;

        console.log(num+" x "+i+"\t= "+j);
    }
}
printTable2(7);
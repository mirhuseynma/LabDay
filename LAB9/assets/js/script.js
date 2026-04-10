// task 1
function Sum(n,m){
    
    return n+m;
}

console.log(Sum(10,5));

// task 2

function SinglePair(n){
    if(n%2==0) console.log("Eded cutdur");
    else console.log("eded tekdir");
}

SinglePair(5);
// task 3

function EbE(a,b,c){
    if(a>b && a>c) console.log("en boyuk: " + a);
    else if(b>a && b>c) console.log("en boyuk: " + b);
    else if(c>a && c>b) console.log("en boyuk: " + c);
}

EbE(5,4,7);


// task 4

function CelciToFaranheyt(celci){
    var faranheyt = (celci * 1.8)+32;
    return faranheyt;
}

console.log(CelciToFaranheyt(2));

// task 5

function EnUzunIl(il){
    if((il%100==0 && il%400==0) && il%4==0) console.log("Uzun il");
    else console.log("qisa il");
}

EnUzunIl(1600);

// task 6

function EdediOrta(m,n){
    var edediOrta = (m+n)/2;
    return edediOrta;
}

console.log(EdediOrta(5,6));

// task 7

function PositiveNegtive(m){
    if(m>0) console.log("Musbetdir");
    else if(m<0) console.log("Menfidir");
    else if(m==0) console.log("Sifirdir");
}

PositiveNegtive(-8);

// task 8
function FizzBuzz(m){
    for(i=3;i<=m;i++){
        if(i%3==0 && i<15) console.log( i+"Fizz");
        else if(i%15==0) console.log(i+"FizzBuzz");
        else if(i%5==0) console.log(i+"Buzz");
    }
}

FizzBuzz(100);

// task 9

function Point(m){
    if(m<=51) console.log("F");
    else if(m>=51 && m<=61) console.log("D");
    else if(m>=61 && m<=71) console.log("C");
    else if(m>=71 && m<=81) console.log("B");
    else if(m>=81 && m<=91) console.log("C");
    else if(m>=91 && m<=100) console.log("A");
}

Point(50);

//task 10

function AreaPerimetr(m,n){
    var area = m*n;
    var perimetr = 2*(m+n);
    console.log("area: "+ area);
    console.log("perimetr: "+ perimetr);
}

AreaPerimetr(6,4);

// task 11
var sum = 0;
function SUmN(n){
    for(i=0;i<n;i++){
        sum+=i;
    }
    console.log(sum);
}
SUmN(5); 

// task 12

var multiple = 1;
function Factorial(n){
    for(i=1;i<=n;i++){
        multiple*=i;
    }
    console.log(multiple);
}
Factorial(5);  // 1 2 3 4 5


// task 13

function Pair(n){
    for(i=1;i<n;i++){
        if(i%2==0) console.log(i);
    }
}

Pair(50);

// task 14
var bolenler = 0;
function Basicn(n){
    for(i=0;i<=n;i++){
        if(n%i==0) bolenler++;
    }
    if (bolenler>2) console.log("Murekkeb ededdir");
    else console.log("sade ededdir");
}

Basicn(2);

// task 15

var a = 0;
var b = 1;
var c = a+b;
var arr = [];
 arr.push(a,b);
function Fibonachi(n){
    for(i=0;i<=n;i++){
        arr.push(c);
        a = b;
        b = c;
        c = a+b;
    }
    console.log(arr);
}

Fibonachi(10);

// task 16
var nNumbers = 0;
var sumNumbers = 0;
function SumNumbers(a){
    while(a>0){
        
        sumNumbers+= a%10;
        a = Math.floor(a/=10);
    }
    return sumNumbers;
}

console.log(SumNumbers(555));

// task 17

function Vurmacedveli(n){
    for(i=1;i<=n;i++){
        for(m=1;m<=10;m++){
            console.log(m +" * " + i + " = " + m*i);
        }
    }
}

Vurmacedveli(2);

// task 18

var countDivide = 0;

function DividesTam(n){

    for(i = 1;i<=n;i++){
        if(n%i==0) countDivide++;
    }
    console.log(countDivide);
}

DividesTam(6);

// task 19

var result = 0;

function ReversedNum(n){
    while(n>0){
        var lastNum = n%10;
        result = result*10 + lastNum;
        n = Math.floor(n/10);
    }

    console.log(result);
}

ReversedNum(456);

// task 20

var resulted = 0
function PoweredNum(a,b){
    for(i = 1; i<=b;i++){
        resulted = a**i
    }
    console.log(resulted);
}

PoweredNum(12,2);

// task 21 

var cusArr = [1,2,3,4,5];
var sumArray = 0;

function SumArr(cusArr){
    for(i = 0; i<cusArr.length; i++){
        sumArray+=cusArr[i];
    }
    console.log(sumArray);
}

SumArr(cusArr);

// task 22
var kusArr = [1,2,3,4,5];
var maxNum = kusArr[0];

function MaxArrElement(kusArr){
    for(i = 0; i<kusArr.length; i++){
        if(kusArr[i]>maxNum) maxNum = kusArr[i];
    }
    console.log(maxNum);
}

MaxArrElement(kusArr);

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
var kusArr = [10,2,8,4,20];
var maxNum = kusArr[0];

function MaxArrElement(kusArr){
    for(i = 0; i<kusArr.length; i++){
        if(kusArr[i]>maxNum) maxNum = kusArr[i];
    }
    console.log(maxNum);
};

MaxArrElement(kusArr);

//task 23]

var minArr = [10,2,8,4,20];
var minNum = minArr[0];

function MinArrElement(minArr){
    for(i = 0; i<minArr.length; i++){
        if(minArr[i]<minNum) minNum = minArr[i];
    }
    console.log(minNum);
}
MinArrElement(minArr);

//task 24

var arr1 = [1,2,3,4,5];

function ReverseArr(arr1){
    var reversedArr = [];
    for(i = arr1.length-1; i>=0; i--){
        reversedArr.push(arr1[i]);
    }
    console.log(reversedArr);
}
ReverseArr(arr1);

//task 25

var arr2 = [1,2,3,4,5];
var arrPair = [];

function PairArr(arr2){
    for(i = 0; i<arr2.length; i++){
        if(arr2[i]%2==0) arrPair.push(arr2[i]);
    }
    console.log(arrPair);
}
PairArr(arr2);

// task 26
var arr3 = [1,2,3,4,5];
var element = 3;
var countElement = 0;
function CheckElement(arr3,element){
    for(i = 0; i<arr3.length; i++){
        if(arr3[i]==element) countElement++;
    }
    if(countElement>0) console.log("Element var");
    else console.log("Element yoxdur");
}
CheckElement(arr3,element);

// task 27
var arr4 = [1,2,5];
var sumArr4 = 0;
var edediOrta = 0;

function EdediOrtaArr(arr4){
    for(i = 0; i<arr4.length; i++){
        sumArr4+=arr4[i];
        edediOrta = sumArr4/arr4.length;
    }   
    console.log(edediOrta);
}
EdediOrtaArr(arr4);

// task 28

var arr5 = [1,2,3,4,5];
var arr6 = [6,7,8,9,10];
var mergedArr = [];

function MergeArr(arr5,arr6){
    for(i = 0; i<arr5.length; i++){
        mergedArr.push(arr5[i]);
    }
    for(i = 0; i<arr6.length; i++){
        mergedArr.push(arr6[i]);
    }
    console.log(mergedArr);
}
MergeArr(arr5,arr6);

// task 29

var arr7 = [1,2,3,4,5,1,2];
var uniqueArr = [];

function UniqueArr(arr7){
    for(i = 0; i<arr7.length; i++){
        if(uniqueArr.indexOf(arr7[i])==-1) uniqueArr.push(arr7[i]);
    }
    console.log(uniqueArr);
}
UniqueArr(arr7);

// task 30
var arr8 = [1,-2,3,-4,5];

function NegativeDel(arr8){
    var positiveArr = [];
    for(i = 0; i<arr8.length; i++){
        if(arr8[i]>0) positiveArr.push(arr8[i]);
    }   
    console.log(positiveArr);
}
NegativeDel(arr8);

// task 31

var context = "Mirhuseyn";
var characterCount = 0;

function CountCharacter(context){
    for(i = 0; i<context.length; i++){
        characterCount++;
    }   
    console.log(characterCount);
}
CountCharacter(context);

// task 32

function ReverseString(context){
    var reversedString = "";
    for(i = context.length-1; i>=0; i--){
        reversedString+=context[i];
    }
    reversedString = reversedString.toLowerCase();
    console.log(reversedString);
}
ReverseString("Mirhuseyn");

// task 33

function Palindrome(context){
    var reversString = "";
    for(i = context.length-1; i>=0; i--){
        reversString+=context[i];
    }   
    if(context.toLowerCase()==reversString.toLowerCase()) console.log("Palindrome");
    else console.log("Palindrome deyil");

}

Palindrome("Mirhuseyn");


// task 34

var saitArr = ["a","e","i","o","u"];
var saitCount = 0;
function CountSait(context){
    for(i = 0; i<context.length; i++){
        if(saitArr.indexOf(context[i].toLowerCase())!=-1) saitCount++;
    }
    console.log(saitCount);
}
CountSait("Mirhuseyn");

// task 35

var context2 = "Mirhuseyn salam necesen lksndknsknklfn";
function BiggestWord(context2){
    var wordArr = context2.split(" ");
    var maxWord = wordArr[0];
    for(i = 0; i<wordArr.length; i++){
        if(wordArr[i].length>maxWord.length) maxWord = wordArr[i];
    }
    console.log(maxWord);
}
BiggestWord(context2);

// task 36

var context3 = "Mirhuseyn salam necesen lksndknsknklfn";
function UpperStart(context3){
    var wordArr = context3.split(" ");
    for(i = 0; i<wordArr.length; i++){
        wordArr[i] = wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
    }
    console.log(wordArr.join(" "));
}
UpperStart(context3);

// task 37
var kontekst = "Banana";
var countLetter = 0;

function CountLetter(kontekst,letter){
    for(i = 0; i<kontekst.length; i++){
        if(kontekst[i].toLowerCase()==letter.toLowerCase()) countLetter++;
    }
    console.log(countLetter);
}
CountLetter(kontekst, "b");

// task 38

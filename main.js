//extention

const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
  }

  const leters = Object.keys(dictionary);

  for (let i of leters){
      console.log("Words that begin with " + i);
      
      for (let t of dictionary[i]){
          console.log(t);
      }

  }

  //workout 1

const myColor = ["Red", "Green", "White", "Black"];
let colors;

for (let i of myColor){
    if (i == myColor[0]) {
        colors = i
    }

    else {
    colors += " + " + i;
    }
} 

console.log(colors);

//workout 2

const myNumString = "0254687193";
let result;

for (let i = 0; i < myNumString.length; i++){
    if (myNumString[i]%2==0 && myNumString[i+1]%2==0) {
        if (i==0){
            result = myNumString[i] + "-";
        }
        else {
            result += myNumString[i] + "-";
        }
    }

    else {
        if (i==0){
            result = myNumString[i]
        }
        else {
            result += myNumString[i]
        }
    }
}

console.log(result)

// workout 3

const array1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
const result1 = [];

function doYouRepet (i){
    for (let t=0; t<result1.length; t++){
        if (array1[i] == result1[t].item) {
            result1[t].times++;
            return;
        }
    }

    result1.push({
        item: array1[i],
        times: 1
    });
}

for (let i=0; i < array1.length; i++){
    if (i==0) {
        result1.push({
            item: array1[i],
            times: 1});
    }

    else {
        doYouRepet(i);
    }
}

let a;
let b;

for (let i= 0; i<result1.length; i++){
    
    if (i==0){
        a= result1[i].item;
        b= result1[i].times;
    }

    else if (result1[i].times>b){
        a= result1[i].item;
        b= result1[i].times;
    }
} 

console.log(a);

//workout 4

const array200 = [182, 28, 30, 40, 41, 150, 199, 71, 77, 173, 181, 147, 91, 192, 166, 60, 34, 188, 113, 130, 25, 59, 82, 170, 79, 11, 112, 92, 104, 69, 42, 2, 125, 99, 39, 29, 160, 131, 178, 159, 121, 21, 200, 15, 194, 14, 54, 138, 145, 195, 85, 120, 10, 118, 33, 106, 132, 198, 58, 64, 83, 140, 5, 35, 50, 18, 84, 129, 174, 197, 96, 93, 128, 13, 16, 187, 9, 80, 27, 153, 23, 102, 52, 158, 4, 97, 65, 143, 110, 7, 86, 176, 87, 149, 98, 165, 66, 139, 155, 161, 6, 74, 196, 48, 144, 185, 88, 177, 68, 72, 116, 37, 142, 127, 180, 154, 61, 141, 191, 63, 136, 22, 32, 186, 49, 156, 103, 168, 109, 70, 115, 183, 111, 44, 90, 12, 123, 124, 75, 100, 184, 189, 162, 107, 164, 148, 152, 101, 94, 73, 8, 95, 163, 146, 46, 81, 117, 26, 175, 20, 105, 114, 157, 62, 108, 78, 51, 3, 119, 134, 172, 17, 193, 55, 126, 169, 135, 179, 45, 89, 47, 151, 43, 171, 19, 36, 167, 67, 56, 76, 24, 57, 38, 122, 53, 1, 137, 31, 133]

//solution 1:

function areYouThere (t) {
    for (let i = 0; i<array200.length; i++){
        if (array200[i] == t){
            // console.log(array200[i]);
            return 1;
        }
    }

    return 0;
}

for (let t=1; t<=200; t++){
    let y = areYouThere(t); 
    
    if (y == 0) {
        console.log(t);
    }
}

//solution 2:

const array201 = []; 
 for (i=1; i<=200; i++){
     array201.push(i);
 }
 
 for (let i=0; i<array200.length; i++){
     for (let t=0; t<array201.length; t++){
         if (array200[i] == array201[t]){
             array201.splice(t,1);
         }
     }
 }

 console.log(array201);
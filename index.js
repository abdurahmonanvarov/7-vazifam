//console.log(cars.length);   //nechta element borligini bilsa boladi

//console.log(cars[cars.length - 1]);  //massivni ohiridagisini ishlash

//console.log(cars.at(-1)); //bunda ham ohirini topish uchun ishlatiladi

//cars.push("Malibu");  //massivni ohiriga malumot qoshadi

//cars.pop();  //massivni ohiridan malumot oladi

//cars.unshift("Captiva");  //boshiga element qoshish

//cars.shift();   //boshidan malumot olish

//console.log(cars.includes("Damas"));  //massivni ichidan qidirib agar bolsa true bolmasa folse qiymat qaytaradi

//console.log(cars.indexOf("Damas"));  //massivni qidiradi va bolsa index raqamini yozadi bolmasa -1 qaytaradi topa  olmasal

//console.log(cars.lastIndexOf("Damas")); //massivni ohiridagi qiymatini korsatib beradi nachanchi indexs da turganini

//let arr = [1,2,3,4,5,6,7,8];
//arr.splice(2,0,10,20)  //bunda 2-indexsdan boshlab ochirmasadan 10 20 ni qosh degani
//arr.splice(2,2);    //bunda 2-indexdan ikkitasini uchirish
//arr.splice(2,2,10,20);  //2-indexdan ikkitasi uchiriladi 2-index degisiyam va 10 20 qoshiladi
//console.log(arr);

/**
 * let arr = ['olma', 'anor', 'behi', 'orik', 'shaftoli'];
for (let i =0; i<=arr.length; i++){
    console.log(arr[i]);
}

 */

//juftlarini yegindusi
/**
 * let arr = [1,2,3,4,5,6,7,8];
let sum = 0;
for (let i =0; i<=arr.length; i++){
    if (arr[i] %2==0){
        sum += arr[i];
    }
}
console.log(sum);


 */

/**
 * function (arr){
    let sum = 0;
    for (let i =0; i<=arr.length; i++){
        if (i %2==0){
            sum += arr[i];
        }
    }
    return sum;
}
 */

//console.log(sum[1,2,3,4,5,6,7,8]);


//MASALALAR
//1-masala
/**
 * function colors(color1, color2, color3){
    let res = [];
    res.push(color1);
    res.push(color2);
    res.push(color3);

    return res;
}
console.log(colors('Qizil', 'Yashil', 'Kok'));
 */


///2-masala
/**
 * function colors(num1, num2, num3){
    let res = [];
    res.push(num1);
    res.push(num2);
    res.push(num3);

    return res;
}
console.log(colors(3, 4, 5));
 */

//3-masala
/**
 * function color(arr){
    let colors = [1,2,3,4,5,6,7,8];
    colors.splice(1,6)
   return arr =colors ;

}
console.log(color());

 */

//4-masala
/**
 * function color(arr){
    let colors = [1,2,3,4,5,6,7,8];
    colors.splice(1,1,9);
   return arr =colors ;

}
console.log(color());

 */

//5-masala
/**
 * function color(arr){
    let colors = [1,2,3,4,5,6,7,8];
    colors.push(598)
   return arr =colors ;

}
console.log(color());
 */

//6-vazifa
/**
 * function color(arr){
    let colors = [1,2,3,4,5,6,7,8,10];
    colors.splice(-1,1)
   return arr =colors ;

}
console.log(color());

 */

//7-masala
/**
 * function color(arr){
    let colors = [1,2,3,4,5,6,7,8,10];
    return console.log(colors.length);

}
console.log(color());
 */

//8-masala
/**
 * function color(arr){
    let colors = [1,2,3,4,5,6,7,8,10];
    colors.unshift(1979)
    return arr=colors;

}
console.log(color());

 */

//9-masala
/**
 * function color(arr){
    let colors = [1,2,3,4,5,6,7,8,10];
    colors.shift()
    return arr=colors;

}
console.log(color());
 */

//10-masala
/**
 * function color(arr){
    let colors = [1,2,3,4,5,6,7,8,10  ];
    let string = ['salom', 'dunyo', 'mars']
    return arr=colors+string;

}
console.log(color());
 */

//11-masala
/**
 * function color(arr){
    let colors = [1,2,3,4,5,6,7,8,10,9  ];
    return console.log(colors.indexOf(9));;

}
console.log(color());
 */

//13-masala
/**
 * function color(arr){
    let colors = [1,2,3,4,5,6,7,8,10,9  ];
    return console.log(colors.indexOf(3));;

}
console.log(color());
 */

//15-masala
/***
 * function numbers(arr){
    let number = [1,2,3,4,5,6,7,8,10,9];
    number.splice(-2,2);
    return arr = number;

}
console.log(numbers());
 */

//16-masala
/**
 * function numbers(arr){
    let number = [1,2,3,4,5,6,7,8,10,9];
    number.push('salomlar');
    number.unshift('hayir');
    return arr = number;

}
console.log(numbers());
 */

//18-masala
/**
 * function numbers(arr){
    let number = [1,2,3,4,5,6,7,8,10,9];
    number.splice(0,100)
    return arr = number;

}
console.log(numbers());
 */

//21-masala
/***
 * function numbers(arr){
    let number = [1,2,3,4,5,6,7,8,10,9];
    let max;
   for (let i=0; i<=number.length; i++){
    if (number[i]){
        
    }
   }
    
    return arr = number;

}
console.log(numbers());

2222222222222222222222222
 */


//33-masala
/**
 * function bir(arr1,arr2){
    let res;
    res = arr1+arr2;
    return res;
}
console.log(bir[1,2,3,4, ['qizil', 'yashil', 'kok']]);


 */

//MASALALAR-MASSIV METODLARIGA OID
//1-MASALA
/**
 * function newElement(arr, element){
    arr.push(element);
    return arr;
}
console.log(newElement([4,7],2));
 */

//2-masala
/**
 * function newElement(arr){
    arr.pop();
    return arr;
}
console.log(newElement([4,7,56,7]));
 */

//3-masala
/**
 * function newElement(arr,){
    arr.shift();
    return arr;
}
console.log(newElement([4,7,56,7]));
 */

//4-masala
/**
 * function newElement(arr,){
    arr.unshift('salom');
    return arr;
}
console.log(newElement([4,7,56,7]));
 */

//5-masala
/**
 * function newElement(arr,element){
    arr.includes(element);
    return arr;
}
console.log(newElement());
 */

//6-masala
/**
 * function newElement(arr,element){
    arr.indexOf(element);
    return arr;
}
console.log(newElement());
 */

//7-masala
/**
 * function newElement(arr,element){
    arr.lastIndexOf(element);
    return arr;
}
console.log(newElement());
 */

//8-masala
/**
 * function newElement(arr){
    arr.splice(2, 2);
    return arr;
}
console.log(newElement([1,2,3,4,5]));
 */

//9-masala
/**
 * function newElement(arr){
    arr.push('dunto');
    return arr;
}
console.log(newElement([1,2,3,4,5]));
 */

//10-masala
/**
 * function newElement(arr){
    arr.pop();
    return arr;
}
console.log(newElement([1,2,3,4,5]));
 */

//11-masala
/**
 * function newElement(arr){
    arr.shift();
    return arr;
}
console.log(newElement([1,2,3,4,5]));
 */

//12-masala
/**
 * function newElement(arr){
    arr.unshift('Abdurahmon');
    return arr;
}
console.log(newElement([1,2,3,4,5]));

 */

//14-masala

/**
 * function newElement(arr, element){
    arr.includes(element);
    return arr;
}
console.log(newElement());
 */

//15-masala
/**
 * 
  function newElement(arr){
    arr.indexOf();
    return arr;
}
console.log(newElement([1,2,3,4,5]));
 */

//16-masala
/**
 * function newElement(arr){
    arr.splice(1,2);
    return arr;
}
console.log(newElement([1,2,3,4,5,6,7,8,9]));
 */



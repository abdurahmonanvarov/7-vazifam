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
/**
 * function qosh(arr1, arr2){
    arr1.push(arr2);

    return arr1;
}

console.log(qosh([1,2,3],5));
 */
//2-masala
/**
 * let a = ['BMw','MERC','TAYOTA','Cobilt'];
a.pop();
console.log(a);

 */

//3-masala
/**
 * let a = ['BMw','MERC','TAYOTA','Cobilt','Nexia'];
a.shift();
console.log(a);

 */

//4-masala
/**
 * let a = ['BMw','MERC','TAYOTA','Cobilt','Nexia'];
a.unshift('Lomareginy');
console.log(a);
 */

//5-masala
/**
 * let a = ['BMw','MERC','TAYOTA','Cobilt','Nexia'];
console.log(a.includes('Nexia'));
 */

//6-masala
/**
 * let a = ['BMw','MERC','TAYOTA','Cobilt','Nexia'];
console.log(a.indexOf('MERC'));
 */

//7-masala
/**
 * let a = ['BMw','MERC','TAYOTA','Cobilt','Nexia', 'MERC'];
console.log(a.lastIndexOf('MERC'));
 */

//8-masala
/**
 * let a = [1,2,3,4,5,6,7,8,9];
a.splice(2, 3 )
console.log(a);
 */

//9-masala
/**
 * let a = [1,2,3,4,5,6,7,8,9];
a.push('Salomlar');
console.log(a);
 */

//10-masala
/**
 * let a = [1,2,3,4,5,6,7,8,9, 'solo'];
a.pop();
console.log(a);
 */

//11-masala
/**
 * let a = ['dunyo',1,2,3,4,5,6,7,8,9, 'solo'];
a.shift();
console.log(a);
 */

//12-masala
/**
 * let a = ['dunyo',1,2,3,4,5,6,7,8,9, 'solo'];
a.unshift(true);
console.log(a);
 */

//13-masala
/**
 * let a = ['dunyo',1,2,3,4,5,6,7,8,9, 'solo'];
console.log(a.includes(10));
 */

//14-masala
/**
 * let a = ['dunyo',1,2,3,4,5,6,7,8,9, 'solo'];
console.log(a.indexOf('solo'));
 */

//15-masala
/**
 * let a = ['dunyo',1,2,3,4,5,6,7,8,9, 'solo', 4,5,6,7,45,654,2];
console.log(a.lastIndexOf(7));
 */

//16-masala
/**
 * let a = ['dunyo',1,2,3,4,5,6,7,8,9, 'solo', 4,5,6,7,45,654,2];
a.splice(5,7,"Abdurahmon")
console.log(a);
 */



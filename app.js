// Func1. a sonning ixtiyoriy n-darajasini hisoblovchi power(a, n) nomli funksiya hosil qiling. QY
// power(3, 5) => 243

// function power(n, d) {
//   let sum = 1
//   for (let i = 0; i < d; i++) {
//     sum *= n
//   }
//   return sum
// }
// console.log(power(3, 5));



// ? __________________________________
// Func2. 2 ta a va b sonning o'rta arifmetigi (a + b) / 2 va geometrigi (a + b) ^ (1 / 2) hisoblovchi mean(a, b) nomli funksiya hosil qiling. QYM
// mean(12, 48) => 30, 24




// ? __________________________________
// Func3. Haqiqiy sonning ishorasini aniqlovchi sign(n) nomli funksiya hosil qiling. Funksiya argumenti noldan kichik bo'lsa -1; noldan katta bo'lsa 1; nolga teng bo'lsa 0 qiymat qaytarsin. QY
// sign(10) => 1


// function sign(n) {
//   if (n > 0) {
//     return 1
//   } else if (n < 0) {
//     return -1
//   } else {
//     return 0
//   }
// }
// console.log(sign(-10));


// ? __________________________________
// Func4. A*x^2 + B*x + C = 0 ko'rinishidagi tenglama kvadrat tenglama deyiladi. (A noldan farqli son). Kvadrat tenglamaning ildizlar sonini aniqlovchi numberOfRoots(A, B, C) nomli funksiya hosil qiling. D = B^2 - 4*A*C. Agar D > 0 bo’lsa 2 ta, D = 0 bo’lsa 1 ta, D < 0 bo’lsa 0 ta. QY
// numberOfRoots (1, -6, 9) => 1


// function numberOfRoots(A, B, C) {
//   let D = B ** 2 - 4 * A * C
//   if (D > 0) {
//     return "2 ta ildiz"
//   } else if (D < 0) {
//     return "Ildiz yo'q"
//   } else {
//     return "1 ta ildiz"
//   }
// }
// console.log(numberOfRoots(1, -6, 9));


// ? __________________________________
// Func5. Doiraning yuzini hisoblovchi areaCircle(R) nomli funksiya hosil qiling. Doiraning yuzi S = π*R^2 orqali hisoblanadi. QY


// function areaCircle(R) {
//   let S = Math.PI*R**2
//   return S
// }
// console.log(areaCircle(10));


// ? __________________________________
// Func6. A va B sonlari orasidagi sonlar yig'indisini hisoblovchi sumRange(A, B) nomli funksiya hosil qiling. Agar A > B bo'lsa, funksiya 0 qiymat qaytaradi. QY
// sumRange(8, 10) => 27


// function sumRange(A, B) {
//   let sum = 0
//   for (let i = A; i <= B; i++) {
//     sum += i
//   }
//   return sum
// }
// console.log(sumRange(8, 10));


// ? __________________________________
// Func7. Arifmetik amallarni bajaruvchi calc(A, B, S) funksiyasini hosil qiling. A va B haqiqiy sonlar. S o'zgaruchisi orqali bajariladigan arifmetik amal aniqlanadi. “-” – ayirish, “*” – ko'paytirish, “/” - bo'lish, “+” - qo'shish va boshqa belgilar uchun 0 qaytarsin. QY
// calc(10, 15, “*”) => 150
// calc(7, 8, “+”) => 15


// function calc(A, B, S) {
//   switch (S) {
//     case "+":
//       return A + B
//     case "-":
//       return A - B
//     case "*":
//       return A * B
//     case "/":
//       return A / B
//     default:
//       return 0
//   }
// }
// console.log(calc(7, 8, "+"));


// ? __________________________________
// Func8. Butun sonning juft - toqligini aniqlovchi isEven(K) funksiyasini hosil qiling. Funksiya K juft son bo'lsa - true, aks xolda false qiymat qaytarsin. QY
// isEven(10) => true


// function isEven(K) {
//   return K % 2 === 0
// }
// console.log(isEven(10));


// ? __________________________________
// Func9. Kiritilgan 3 ta a, b, c sonlarning eng kichigini, o’rtachasini va eng kattasini chiqaruvchi sortABC(a, b, c) nomli dastur tuzing. QYM
// sortABC(10, 5, 8) => 5, 8, 10


// function sortABC(A, B, C) {
//   let max = Math.max(A, B, C)
//   let min = Math.min(A, B, C)
//   let mid;
//   if (A != max && A != min) {
//     mid = A;
//   } else if (B != max && B != min) {
//     mid = B;
//   } else{
//     mid = C;
//   }
//   return`min: ${min},  mid: ${mid}, max: ${max}`
// }
// console.log(sortABC(10, 5, 8));


// ? __________________________________
// Func10. isPowerN(K, N) mantiqiy funksiyasini hosil qiling. (K > 0). Agar K soni N soninig biror darajasi bo'lsa - true, aks xolda false qiymat qaytarilsin. QY


// function isPowerN(K, N) {
//   let sum = 1;
//   while (sum < N) {
//     sum *= K
//   }
//   return sum == N
// }
// console.log(isPowerN(3, 6));


// ! __________________________________
// ! qoshimcha
// ! __________________________________

// function kvadrat(son) {
//   return son * son;
// }
// console.log(kvadrat(5));
// console.log(kvadrat(10));


// ? __________________________________


// let mevalar = ["Olma", "Banan", "Gilos", "Uzum"];
// console.log(mevalar[0]);
// console.log(mevalar[2]);
// console.log(mevalar.length);


// ? __________________________________


// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//   let sum  = '';
//   for (let d = 0; d < i; d++) {
//     sum += i;
//     console.log(sum);
//   }
// }


// ? __________________________________


// for (;;){
//   console.log(22);
// }


// ? __________________________________


// let tub = [];
// for (let i = 0; i < 100; i++) {
//   let dividers = 0;
//   for (let d = 0; d <= i; d++) {
//     if (i % d == 0) {
//       dividers++
//     }
//   }
//   if (dividers = 2) tub.push(i)

// }
// console.log(tub);

// ? __________________________________


// while (true) {
//   let user = prompt('2 x 2 = ?');
//   if (user == '4') {
//     break;
//   }
// }


// ? __________________________________


// let p = function (n) {
//   console.log(String(n) == String(n).split("").reverse().join(""));
// }
// p(121)
// p(102)
// p(333)


// ? __________________________________


// let arr=[0,1,2,"hello",55,"world"]
// console.log(arr.slice(2,4));
// arr.splice(2,1)
// console.log(arr);
// console.log(arr[2]);
// arr.unshift(10)
// console.log(arr[2]);
// arr.indexOf(5)
// console.log(arr.indexOf(55));


// ? __________________________________

// let arr = [1,10,20,20,"hello",1,"hello"]
// function uniq(a) {
//   let newArr = []
//   for (let i = 0; i < a.length; i++) {
//     if (newArr.indexOf(a[i]) == -1) {
//       newArr.push(a[i])
//     }
//   }
//   return newArr
// }
// console.log(uniq(arr));
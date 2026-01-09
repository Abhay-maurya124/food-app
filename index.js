const arr = [12, 45, 9, 2, 11, 7];
const total = 54;
let i = 0;
let n = arr.length;
let b = false;
let a, d;
for (i; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    let ele = total - arr[j]; // 54-45 = 9
    if (ele == arr[i]) {
      a = j;
      d = i;
      b = true; // 9 == 9
    }
  }
}

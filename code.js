function RideTimer(n) {
  h = Math.floor(n / 60);
  m = n - h * 60;
  //   check if less than two numbers
  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m;
  m = m.toString();
  h = h.toString();
  sum = 0;
  for (i = 0; i < 2; i++) sum += Number(h[i]) + Number(m[i]);
  return sum;
}
console.log(RideTimer(808));

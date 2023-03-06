// 具名匯出
export function currency(num) {
  const comma = /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g;
  const newNum = num.toString().replace(comma, ',');
  return newNum;
}

export function date(time) {
  const localDate = new Date(time * 1000);
  return localDate.toLocaleDateString();
}

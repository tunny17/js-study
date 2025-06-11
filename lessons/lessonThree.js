// note: .find() does exactly what .filter() does but returns the first match

const orders = [
  {amount: 250},
  {amount: 400},
  {amount: 100},
  {amount: 325},
]

const totalAmount = orders.reduce((sum, order) => sum + order.amount, 0)

console.log(totalAmount);
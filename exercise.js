function candySalesToObject(saleArray){
  return saleArray.reduce(function(saleObj, currentApplier, index){
        if (index === 0){
          saleObj.item = currentApplier
        } else if (index === 1){
          saleObj.price = currentApplier
        } else if (index === 2){
          saleObj.quantity = currentApplier
        }
        return saleObj
    }, {})
}

function salesDayToObject(date, dayOfSales){
 var butt = dayOfSales[date]
  var sales = []
  return butt.reduce(function(allSale, butt, index){
  allSale.date = date
    sales.push(candySalesToObject(butt))
    allSale.sales = sales
    return allSale
  }, {})
}

function allSalesToArray(obj) {
  var dateKeys = Object.keys(obj)
  var newObj = dateKeys.map(function(val, index){
    return salesDayToObject(val, obj)
  })
  return newObj
}

module.exports = {
    // Uncomment these functions as you write them
    candySalesToObject,
    salesDayToObject,
    allSalesToArray
};

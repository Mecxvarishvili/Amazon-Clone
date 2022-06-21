const serialize = {
    totalProducts: (data) => {
        var totalProducts = 0
        if(data.length) {
            for(var i in data) {
                totalProducts += data[i].qty
            }
            return totalProducts
        } 
        return totalProducts
        
    },
    
    totalProductsPrice: (data) => {
        var totalPrice = 0
        if(data.length) {
            for(var i in data) {
                totalPrice += data[i].qty * parseInt(data[i].price)
            }
            return totalPrice
        } 
    },
}

export default serialize
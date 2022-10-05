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
                totalPrice += data[i].qty * parseFloat(data[i].price)
            }
            return totalPrice.toFixed(2)
        } 
    },

    updateUser: (cart) => {
        const Cart = [...cart]
        const newCart = []
        for (var i in Cart ) {
            newCart.push({id: Cart[i].id, qty: Cart[i].qty})
        }
        return newCart
    }
}

export default serialize
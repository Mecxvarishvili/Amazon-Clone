const Api = {
    baseApi: (url) => {
       return fetch("http://localhost:8000/products/" + url)
    },

    fetchSingleProduct: (id) => {
        return Api.baseApi(`product/${id}`)
        .then(res => res.json())
    },

    fetchCategoryProduct: async (id)  => {
        return Api.baseApi(`category/${id}`,)
            .then(res => res.json())
    }
}

export default Api
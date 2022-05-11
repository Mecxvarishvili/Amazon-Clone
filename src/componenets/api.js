export const Api = {
    baseApi: (url) => {
       fetch("http://localhost:8000/products/" + url)
            .then(res => res.json())
    },

    fetchSingleProduct: (id) => {
        return Api.baseApi(`product/${id}`)
    },

    fetchCategoryProduct: (id)  => {
        return Api.baseApi(`category/${id}`,)
    }
}
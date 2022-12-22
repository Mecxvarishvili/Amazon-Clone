const Api = {
    baseApi: (url, method, value) => {
        var headers = {}
        var body = ""

        if(typeof value === "string") {
            headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Authorization": `Bearer ${value}`,
           }
        } else {
            headers = {
             'Content-Type': 'application/json',
             'Accept': 'application/json',
           }
        }
        if(typeof value === "object") {
            body = JSON.stringify(value)
        } else {
            body = JSON.stringify()
        }
        return fetch("https://vmfakeapi.netlify.app/ac/" + url, {
            method: method,
            headers,
            body
        })  
    },

    fetchSingleProduct: (id) => {
        return Api.baseApi(`product/${id}`, "GET")
        .then(res => res.json())
    },

    fetchSearchProducts: (id) => {
        return Api.baseApi(id, "GET")
        .then(res => res.json())
    },

    fetchUserLogin: (value) => {
        return Api.baseApi("login", "POST", value)
    },

    fetchUserToken: (token) => {
       return Api.baseApi("token", "GET", token)
    },

    fetchUserRegister: (value) => {
        return Api.baseApi("register", "POST", value)
    },

    updateUser: (id, value) => {
        return Api.baseApi(`user/${id}`, "PUT", value)
    }
}

export default Api
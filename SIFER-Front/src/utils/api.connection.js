const BASE_URL = 'http://localhost:3000/'

const apiConnect = {
    makeRequest: async (method, endpoint, data, param) => {
        const url = param ? `${BASE_URL}${endpoint}/${param}` : `${BASE_URL}${endpoint}`

        const token = localStorage.getItem('token')

        /*if (!token)
            throw new Error('Token not found')*/

        const options = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`,
                //"Content-Type": "multipart/form-data",
            },
            body: data ? JSON.stringify(data) : null
        }

        try {
            const response = await fetch(url, options)

            if (!response.ok)
                throw new Error(`${response.status} ${response.statusText}`)

            return await response.json()
        } catch (error) {
            console.error(error)
            throw error
        }
    },

    get: async (endpoint, param) => {
        return await apiConnect.makeRequest('GET', endpoint, null, param)
    },

    post: async (endpoint, data) => {
        return await apiConnect.makeRequest('POST', endpoint, data)
    },

    put: async (endpoint, data, param) => {
        return await apiConnect.makeRequest('PUT', endpoint, data, param)
    },

    patch: async (endpoint, data, param) => {
        return await apiConnect.makeRequest('PATCH', endpoint, data, param)
    },

    delete: async (endpoint, param) => {
        return await apiConnect.makeRequest('DELETE', endpoint, null, param)
    }
}

export default apiConnect;
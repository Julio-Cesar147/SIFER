const BASE_URL = 'http://localhost:3000/'

const apiConnect = {
    get: async (endpoint, params = {}) => {
        try {
            const queryParams = new URLSearchParams(params).toString();
            const url = `${BASE_URL}${endpoint}${queryParams ? `?${queryParams}` : ''}`

            const response = await fetch(url)

            if (!response.ok)
                throw new Error(`${response.statusText}`)
            
            return await response.json()
        } catch (error) {
            console.error(error)
            throw new Error('Fallo al hacer el GET')
        }
    },

    post: async (endpoint, data) => {
        try {
            const response = await fetch(`${BASE_URL}${endpoint}`, {
                method: 'POST',
                headers: {
                    //'authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            if (!response.ok)
                throw new Error(`${response.statusText}`)

            return await response.json()
        } catch (error) {
            console.error(error)
            throw new Error('Fallo al hacer el POST')
        }
    },

    put: async (endpoint, data) => {
        try {
            const response = await fetch(`${BASE_URL}${endpoint}`, {
                method: 'PUT',
                headers: {
                    'authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            if (!response.ok)
                throw new Error(`${response.statusText}`)

            return await response.json()
        } catch (error) {
            console.error(error)
            throw new Error('Fallo al hacer el PUT')
        }
    },

    patch: async (endpoint, params = {}) => {
        try {
            const queryParams = new URLSearchParams(params).toString();
            const url = `${BASE_URL}${endpoint}${queryParams ? `?${queryParams}` : ''}`

            const response = await fetch(url, {
                method: 'PATCH',
                headers: {
                    'authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            if (!response.ok)
                throw new Error(`${response.statusText}`)

            return await response.json()
        } catch (error) {
            console.error(error)
            throw new Error('Fallo al hacer el PATCH')
        }
    },

    delete: async (endpoint, params = {}) => {
        try {
            const queryParams = new URLSearchParams(params).toString();
            const url = `${BASE_URL}${endpoint}${queryParams ? `?${queryParams}` : ''}`

            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            if (!response.ok)
                throw new Error(`${response.statusText}`)

            return await response.json()
        } catch (error) {
            console.error(error)
            throw new Error('Fallo al hacer el DELETE')
        }
    }
}

export default apiConnect;
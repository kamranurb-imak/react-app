import api from '../api/axiosInstance'

export const getUsers = async () => {
    try {
        const response = await api.get("/users");
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const getUsersDummy = async () => {
    return [
        { id: 1, name: "Alice Smith" },
        { id: 2, name: "Bob Johnson" },
        { id: 3, name: "Carol Lee" },
    ];
}

export const getUserById = async (id) => {
    try {
        const response = await api.get(`/users/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
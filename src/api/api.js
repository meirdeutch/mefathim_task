const BASE_URL = "https://server-n42x.onrender.com/api";
export const loginUser = async (username, password) => {
    try {
        const response = await fetch(`${BASE_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        if (response.ok) {
            return { success: true, data }
        } else {
            return { success: false, error: data.message || "Something went wrong!" }
        }
    } catch (error) {
        return { success: false, error: "Network error, please try again later" }
    }
};

export const displayUsers = async (token) => {
    try {
        const response = await fetch(`${BASE_URL}/users`, {
            method: "GET",
            headers: {
                "Authorization": token
            }
        })
        const data = await response.json();
        if (response.ok) {
            return { success: true, data: data }
        } else {
            return { success: false, error: "Problem accepting users" }
        }
    } catch (error) {
        return { success: false, erroe: "Network error, please try again later" }
    }
};

export const deleteUser = async (user_id, token) => {
    try {
        const response = await fetch(`${BASE_URL}/users/${user_id}`, {
            method: "DELETE",
            headers: {
                "Authorization": token
            }
        })
        if (response.ok) {
            return { success: true }
        } else {
            return { success: false, error: "Problem deleting the user" }
        }
    } catch (error) {
        return { success: false, error: "Network error, please try again later" }
    }
};

export const addUser = async (user, token) => {
    try {
        const response = await fetch(`${BASE_URL}/users`, {
            method: "POST",
            headers: {
                "Authorization": token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        if (response.ok) {
            return { success: true }
        } else {
            return { success: false, error: "Problem adding the user" }
        }
    } catch (error) {
        return { success: false, error: "Network error, please try again later" }
    }
};

export const editUser = async (user_id, user, token) => {
    try {
        const response = await fetch(`${BASE_URL}/users/${user_id}`, {
            method: "PUT",
            headers: {
                "Authorization": token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        if (response.ok){
            return {success: true}
        }else {
            return {success: false, error: "Problem editing user"}
        }
    }catch(error) {
        return { success: false, error: "Network error, please try again later" }
    }
};


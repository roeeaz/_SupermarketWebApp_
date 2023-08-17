import axios from 'axios';

export async function login(user: any) {
    try {
        const response = await axios.post("http://127.0.0.1:8000/login/", user);
        return response;
    } catch (error) {
        throw error; 
    }
}

export function testAbout(token:string) {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    return new Promise<{ data: any }>((resolve) =>
        axios.get("http://127.0.0.1:8000/about/",config).then(res => resolve({ data: res.data }))
    );
}

export function testContact() {
    return new Promise<{ data: any }>((resolve) =>
        axios.get("http://127.0.0.1:8000/contact/").then(res => resolve({ data: res.data }))
    );
}

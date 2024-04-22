import axios from 'axios';

export function myInterceptor() {
    axios.interceptors.request.use((req) => {
        // req.headers.authorization = "my secret token";
        return req;
    });
}
// import axios from 'axios';
// import { useAuthStore } from '@/store/authStore';

// const api = axios.create({
//     baseURL: process.env.NEXT_PUBLIC_API_URL,
//     withCredentials: true // Quan trọng để gửi cookie
// });

// // Thêm access token vào header
// api.interceptors.request.use((config) => {
//     const token = useAuthStore.getState().accessToken;
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// });

// // Xử lý khi token hết hạn
// api.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//         if (error.response?.status === 401) {
//             try {
//                 // Gọi API refresh token
//                 const refreshRes = await axios.post('/api/auth/refresh', {}, { withCredentials: true });

//                 // Lưu token mới vào Zustand
//                 useAuthStore.getState().setAccessToken(refreshRes.data.accessToken);

//                 // Thử lại request cũ với token mới
//                 error.config.headers.Authorization = `Bearer ${refreshRes.data.accessToken}`;
//                 return api(error.config);
//             } catch (err) {
//                 // Nếu refresh token cũng hết hạn => Đăng xuất
//                 useAuthStore.getState().clearAuth();
//                 return Promise.reject(err);
//             }
//         }
//         return Promise.reject(error);
//     }
// );

// export default api;

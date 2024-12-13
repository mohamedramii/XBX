
export const getToken = () => {
  if (typeof window !== 'undefined') {
    const match = document.cookie.match(new RegExp('(^| )token=([^;]+)'));
    if (match) return match[2];
  }
  return null;
};


export const setToken = (token) => {
  if (typeof window !== 'undefined') {
    const expires = new Date();
    expires.setTime(expires.getTime() + 3 * 24 * 60 * 60 * 1000); // 3 days
    document.cookie = `token=${token}; expires=${expires.toUTCString()}; path=/; Secure; SameSite=Lax`;
  }
};


export const removeToken = () => {
  if (typeof window !== 'undefined') {
    document.cookie = 'token=; Max-Age=0; path=/;';
  }
};

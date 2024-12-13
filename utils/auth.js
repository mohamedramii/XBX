// Auth utilities

export const setToken = (token, type = 'superAdmin') => {
  if (typeof window !== 'undefined') {
    const key = `${type}Token`;
    localStorage.setItem(key, token);
    // Also set in cookie for middleware
    document.cookie = `${key}=${token}; path=/`;
  }
};

export const getToken = (type = 'superAdmin') => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(`${type}Token`);
  }
  return null;
};

export const removeToken = (type = 'superAdmin') => {
  if (typeof window !== 'undefined') {
    const key = `${type}Token`;
    localStorage.removeItem(key);
    document.cookie = `${key}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
  }
};

// In real life, use JWT decoding libs like jwt-decode
export const getToken = () => {
    return typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  };
  
  export const removeToken = () => {
    localStorage.removeItem('token');
  };
  
  export const validateToken = (token) => {
    // MOCK validation: real would hit FastAPI /validate-token
    if (token === 'fake-token') {
      return { name: 'Test User', email: 'test@example.com' };
    }
    return null;
  };
  
const localStorageKey = 'adminCredentials';

export const saveCredentials = (email, password) => {
  try {
    const credentials = { email, password };
    localStorage.setItem(localStorageKey, JSON.stringify(credentials));
  } catch (error) {
    console.error('Error saving credentials to localStorage:', error);
  }
};


export const getCredentials = () => {
  try {
    const storedCredentials = localStorage.getItem(localStorageKey);
    return storedCredentials ? JSON.parse(storedCredentials) : null;
  } catch (error) {
    console.error('Error retrieving credentials from localStorage:', error);
    return null;
  }
};


export const clearCredentials = () => {
  try {
    localStorage.removeItem(localStorageKey);
  } catch (error) {
    console.error('Error clearing credentials from localStorage:', error);
  }
};

import ApI from '../instance'

export const getUser = async (userId, token) => {
    try {
      if (userId) {
        const response = await ApI.get(`api/user/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.data.user;
        return data;
      }
    } catch (error) {
      // Handle error
      console.error("Error fetching user:", error);
      throw error;
    }
  };
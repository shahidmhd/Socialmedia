import ApI from '../instance'


export const createPost = async (token, formData) => {
    try {
        const response = await ApI.post("/api/post/", formData, {
            headers: { Authorization: `Bearer ${token}` },
            "Content-Type": "multipart/form-data",
        });
        return response.data;
    } catch (error) {
        // Handle error
        console.error("Error creating post:", error);
        throw error;
    }
};

export const getPosts = async (token) => {
    try {
      const response = await ApI.get("api/post/",{
        headers: { Authorization: `Bearer ${token}` },
      });
      const data =await response.data;
      return data;
    } catch (error) {
      // Handle error
      console.error("Error getting posts:", error);
      throw error;
    }
  };

  export const getUserPosts = async (userId, token) => {
    try {
      const response = await ApI.get(`api/post/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = response.data;
      return data;
    } catch (error) {
      // Handle error
      console.error("Error getting user posts:", error);
      throw error;
    }
  };
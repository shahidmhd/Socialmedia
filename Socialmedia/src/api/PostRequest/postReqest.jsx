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

  export const getLike = async (token, postId, loggedUserId) => {
    try {
      const response = await ApI.put(
        `api/post/${postId}/like`,
        { loggedId: loggedUserId },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = response.data;
      return data;
    } catch (error) {
      // Handle error
      console.error("Error getting user posts:", error);
      throw error;
    }
  };

  export const commentAdd = async (loggedUserId,postId,commentInput,token) => {
    try {
      const response = await ApI.put(`api/post/${postId}/comment`,{userId: loggedUserId,comment:commentInput} ,{
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = response.data.commentAdded;
      return data;
    } catch (error) {
      // Handle error
      console.error("Error getting user posts:", error);
      throw error;
    }
  };

  export const singlePost = async (token, postId) => {
    try {
      const response = await ApI.get(`api/post/singlePost/${postId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      // Handle error
      console.error("Error creating post:", error);
      throw error;
    }
  };
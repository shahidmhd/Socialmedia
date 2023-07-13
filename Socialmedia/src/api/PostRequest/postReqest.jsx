import ApI from '../instance'


export const createPost = async (token, formData) => {
    try {
        const response = await ApI.post("/api/post/", formData, {
            "Content-Type": "multipart/form-data",
        });
        return response.data;
    } catch (error) {
        // Handle error
        console.error("Error creating post:", error);
        throw error;
    }
};

export const getPosts = async () => {
    try {
      const response = await ApI.get("api/post/");
      const data =await response.data;
      return data;
    } catch (error) {
      // Handle error
      console.error("Error getting posts:", error);
      throw error;
    }
  };
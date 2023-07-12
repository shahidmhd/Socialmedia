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
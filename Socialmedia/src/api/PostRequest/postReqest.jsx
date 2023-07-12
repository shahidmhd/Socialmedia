import ApI from '../instance'


export const createPost = async (token, formData) => {
    try {

        const response = await ApI.post("/api/post/", formData, {
            "Content-Type": "multipart/form-data",
        });
        console.log(token, "token");
        console.log(formData, "formData")

    } catch (error) {
        console.log(error, "post");
    }
};
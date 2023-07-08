import Admin from '../Models/AdminModel'



export const adminRepositoryMongoDB=()=>{
    const getAdminByuserName=async(userName:string)=>{
        const admin:any=await Admin.findOne({userName})



        return admin
    }


    return {
        getAdminByuserName
    }
}

export type AdminRepositoryMongoDB = typeof adminRepositoryMongoDB;
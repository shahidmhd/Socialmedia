import {AdminRepositoryMongoDB} from '../../frameworks/database/Mongodb/repositories/adminRepository'




export const adminDbRepository=(
    repository:ReturnType<AdminRepositoryMongoDB>

)=>{


const getAdminByuserName=async(usrName:string)=> await repository.getAdminByuserName(usrName);


return {
    getAdminByuserName,
};
}

export type AdminDbInterface=typeof adminDbRepository
import * as ownerService from "../services/owner.service.js";
import ApiResponse from "../../../common/utils/api-response.js"

const createOwner = async(req, res)=>{
    const owner = await ownerService.creteOwner(req.body);
    ApiResponse.created(res, "owner created successfully", owner);
};

const getAllOwners = async(req, res)=>{
    const owners = await ownerService.getAllOwners();
    ApiResponse.ok(res, "Owner fetched successfully", owners)
};

const getOwnerById = async(req, res)=>{

    const owner = await ownerService.getOwnerById(req.params.id);
    ApiResponse.ok(res, "Owner fetched successfully", owner)
};

const updateOwner = async(req, res)=>{
    const updatedOwner = await ownerService.updateOwner(req.params.id, req.body);
    ApiResponse.ok(res, "Owner updated successfully", owner)
};

const deleteOwner = async(req, res)=>{
    await ownerService.deleteOwner(req.params.id);
    ApiResponse.ok(res, "Owner updated successfully")
};

export{
    createOwner,
    getAllOwners,
    getOwnerById,
    updateOwner,
    deleteOwner
}
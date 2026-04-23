import * as broadcasterService from "../services/broadcaster.service.js";
import ApiResponse from "../../../common/utils/api-response.js"

const createBroadcaster = async(req, res)=>{
    const broadcaster = await broadcasterService.createBroadcaster(req.body);
    ApiResponse.created(res, "broadcaster created successfully", broadcaster);
};

const getAllBroadcasters = async(req, res)=>{
    const broadcasters = await broadcasterService.getAllBroadcasters();
    ApiResponse.ok(res, "broadcaster fetched successfully", broadcasters)
};

const getBroadcasterById = async(req, res)=>{

    const broadcaster = await broadcasterService.getBroadcasterById(req.params.id);
    ApiResponse.ok(res, "broadcaster fetched successfully", broadcaster)
};

const updateBroadcaster = async(req, res)=>{
    const updatedBroadcaster = await broadcasterService.updateBroadcaster(req.params.id, req.body);
    ApiResponse.ok(res, "broadcaster updated successfully", updatedBroadcaster)
};

const deleteBroadcaster = async(req, res)=>{
    await broadcasterService.deleteBroadcaster(req.params.id);
    ApiResponse.ok(res, "broadcaster deleted successfully")
};

export{
    createBroadcaster,
    getAllBroadcasters,
    getBroadcasterById,
    updateBroadcaster,
    deleteBroadcaster
}
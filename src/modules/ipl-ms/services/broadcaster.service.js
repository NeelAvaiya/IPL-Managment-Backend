import ApiError from "../../../common/utils/api-error.js";
import Broadcaster from "../models/broadcaster.model.js"

const createBroadcaster = async(name, language) => {
    const broadcaster = await Broadcaster.create({name, language});   
        return broadcaster;
}

const getAllBroadcasters = async() => {
    const broadcasters = await Broadcaster.find();

        return broadcasters;
}

const getBroadcasterById = async(id) => {
    const broadcaster = await Broadcaster.findById(id);
    if(!broadcaster){
        throw ApiError.notfound("Broadcaster not found");
    }
    return broadcaster;
}

const updateBroadcaster = async(id, {name, language}) => {
    const broadcaster = await Broadcaster.findByIdAndUpdate(
        id,
        {name, language},
        {new: true, runValidators: true}
    );

    if(!broadcaster){
        throw ApiError.notfound("Broadcaster not found")
    };

    return broadcaster;
}

const deleteBroadcaster = async(id) => {
    const broadcaster = await Broadcaster.findByIdAndDelete(id);

    if(!broadcaster){
        throw ApiError.notfound("broadcaster not found")
    };

    return broadcaster;
}

export {
    createBroadcaster,
    getAllBroadcasters,
    getBroadcasterById,
    updateBroadcaster,
    deleteBroadcaster
}
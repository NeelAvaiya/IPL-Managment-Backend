import ApiError from "../../../common/utils/api-error";
import Sponsor from "../models/sponsor.model.js";

const creteSponsor = async(name, company) => {
    const sponsor = await Sponsor.create({name, company});
    return sponsor;
}

const getAllSponsor = async() => {
    const sponsor = await Sponsor.find();
    return sponsor
}

const getSponsorById = async(id) => {
    const sponsor = await Sponsor.findById(id);
    if(sponsor){
        throw ApiError.notfound("Sponsor not found");
    }
    return sponsor;
}

const updateSponsor = async(id, {name, company}) => {
    const sponsor = await Sponsor.findByIdAndUpdate(
        id,
        {name, company},
        {new: true, runValidators: true}
    );
    
    if(!sponsor){
        throw ApiError.notfound("Sponsor not found")
    }
    return sponsor;
}

const deleteSponsor = async(id) => {
    const sponsor = await Sponsor.findByIdAndDelete(id);

    if(!sponsor){
        throw ApiError.notfound("sponsor not found")
    };
    return sponsor
}

export{
    creteSponsor,
    getAllSponsor,
    getSponsorById,
    updateSponsor,
    deleteSponsor
}
import * as sponserService from "../services/sponsor.service.js";
import ApiResponse from "../../../common/utils/api-response.js";

const createSponsor = async(req, res) => {
    const sponsor = await sponserService.creteSponsor(req.body);
    ApiResponse.created(res, "sponsor created successfully", sponsor);
}

const getAllSponsors = async(req, res) => {
    const sponsors = await sponserService.getAllSponsor();
    ApiResponse.ok(res, "Sponsors fetched successfully", sponsors);
}

const getSponsorById = async(req, res) => {
    const sponsor = await sponserService.getSponsorById(req.params.id);
    ApiResponse.ok(res, "Sponsor fetched successfully", sponsor);
}

const updateSponsor = async(req, res) => {
    const updatedSponsor = await sponserService.updateSponsor(req.params.id, req.body);
    ApiResponse.ok(res, "Sponsor updated successfully", updatedSponsor);
}

const deleteSponsor = async(req, res) => {
    await sponserService.deleteSponsor(req.params.id);
    ApiResponse.ok(res, "Sponsor deleted successfully");
}

export {
    createSponsor,
    getAllSponsors,
    getSponsorById,
    updateSponsor,
    deleteSponsor
}

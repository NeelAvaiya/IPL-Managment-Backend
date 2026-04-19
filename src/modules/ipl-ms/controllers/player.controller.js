import * as playerService from "../services/player.service.js";
import ApiResponse from "../../../common/utils/api-response.js"

const createPlayer = async (req, res) => {
    const { name, role, teamId } = req.body;
    const Player = await playerService.createPlayer(name, role, teamId);
    ApiResponse.created(res, "Player created successfully", Player);
}

const getAllPlayers = async (req, res) => {
    const Players = await playerService.getAllPlayers();
    ApiResponse.ok(res, "Player fetched successfully", Players);
}

const getPlayerById = async (req, res) => {
    const Player = await playerService.getPlayerById(req.params.id);
    ApiResponse.ok(res, "Player fetched successfully", Player)
};

const updatePlayer = async (req, res) => {
    const updatedPlayer = await playerService.updatePlayer(req.params.id, req.body);
    ApiResponse.ok(res, "Player updated successfully", updatedPlayer);
}

const deletePlayer = async (req, res) => {
    await playerService.deleteplayer(req.params.id);
    ApiResponse.ok(res, "Player deleted successfully")
};

export {
    createPlayer,
    getAllPlayers,
    getPlayerById,
    updatePlayer,
    deletePlayer
}
import ApiError from "../../../common/utils/api-error.js";
import Team from "../models/team.model.js"
import Player from "../models/player.model.js"

const transferPlayer = async(playerId, newTeamId) =>{
    const team = await Team.findById(newTeamId);
    
    if(!team){
        throw ApiError.notfound("team not found");
    };

    const player = await Player.findByIdAndUpdate(
        playerId,
        {teamId:newTeamId},
        {new: true, runValidators:true}
    ).populate("teamId", "name")

    if(!player){
        throw ApiError.notfound("Player not found")
    }

    return player;
}

const updatePlayerRole = async(playerId, role) => {
    const player = await Player.findByIdAndUpdate(
        playerId,
        {role},
        {new: true, runValidators:true}
    ).populate("teamId", "name")

     if(!player){
        throw ApiError.notfound("Player not found")
    }

    return player;
}

const createPlayer = async(name, role, teamId) => {
    const player = await Player.create({name, role, teamId});   
        return player;
}

const getAllPlayers = async() => {
    const players = await Player.find();

        return players;
}

const getPlayerById = async(id) => {
    const player = await Player.findById(id);
    if(!player){
        throw ApiError.notfound("Player not found");
    }
    return player;
}

const updatePlayer = async(id, {name, teamId}) => {
    const player = await Player.findByIdAndUpdate(
        id,
        {name, teamId},
        {new: true, runValidators: true}
    );

    if(!player){
        throw ApiError.notfound("Player not found")
    };

    return player;
}

const deleteplayer = async(id) => {
    const player = await Player.findByIdAndDelete(id);

    if(!player){
        throw ApiError.notfound("player not found")
    };

    return player;
}

export {
    transferPlayer,
    updatePlayerRole,
    createPlayer,
    getAllPlayers,
    getPlayerById,
    updatePlayer,
    deleteplayer
}
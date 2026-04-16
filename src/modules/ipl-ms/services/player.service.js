import ApiError from "../../../common/utils/api-error";
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

export {
    transferPlayer,
    updatePlayerRole
}
import ApiError from "../../../common/utils/api-error";
import Broadcaster from "../models/broadcaster.model.js"
import Team from "../models/team.model.js"
import TeamBroadcaster from "../models/team-broadcaster.model.js"

const assignBroadcaster = async({teamId, broadcasterId}) => {
    const team = await Team.findById(teamId);
    if(!team){
        throw ApiError.notfound("Team not found");
    }

    const broadcaster = await Broadcaster.findById(broadcasterId);
    if(!Broadcaster){
        throw ApiError.notfound("broadcaster not found");
    }

   const existing = await TeamBroadcaster.findOne({teamId, broadcasterId});
    if(existing){
        throw ApiError.conflict("Braodcaster already attached to this team");
    }

    const teamBroadcaster = await TeamBroadcaster.create({teamId, broadcasterId});

    return teamBroadcaster;
}

export default assignBroadcaster;
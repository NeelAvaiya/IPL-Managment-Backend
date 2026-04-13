import mongoose from "mongoose";

const playerSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true, "Player name is required"],
            trim: true,
            minlength:2,
            maxlength:100,
        },
        role:{
            type:String,
            required:[true, "Player role is required"],
            enum:{
                value:["Batsman", "Bowler", "All-rounder", "Wicket-keeper"],
                message:"Role must be one of Batsman, Bowler, All-rounder, Wicket-keeper"
            }
        },
        teamId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Team",
            required:[ true, "team is required"]
        }
    }, {timestamps: true}
)

export default mongoose.model("Player", playerSchema)
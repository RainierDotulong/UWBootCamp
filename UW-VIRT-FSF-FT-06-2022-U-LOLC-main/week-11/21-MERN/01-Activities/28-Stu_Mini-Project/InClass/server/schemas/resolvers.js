
const {Tech,Matchup} = require("../models")

const resolvers = {
    Query:{
        allTech:async()=>{
            return await Tech.find({})
        },
        allMatchups: async()=>{
            return await Matchup.find({})
        },
        singleMatchup: async(parent,args)=>{
            return await Matchup.findById(args.matchupId)
        }
    },
    Mutation:{
        createMatchup: async(parent,args)=>{
            return await Matchup.create(args);
        },
        createVote: async(parent,args)=>{
           return await Matchup.findOneAndUpdate(
                { _id: args.matchupId },
                { $inc: { [`tech${args.techNum}_votes`]: 1 } },
                { new: true }
            );
        
        }
    }
    
}

module.exports= resolvers
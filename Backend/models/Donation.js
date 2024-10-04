const mongoose  =require('mongoose')

const donationSchema=new mongooseSchema({
    amount:{
        type:Int,
        require:true,

    },

    created_by:{
        type:String,
        
    },

    organization:{
        type:String,
        trime:true,
    }
})

module.exports =mongoose.model("donation",donationSchema)
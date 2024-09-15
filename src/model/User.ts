import mongoose,{Schema,Document} from "mongoose";


export interface Message extends Document{
    content:string;
    createdAt:Date
}


const MessageSchema:Schema<Message> = new Schema({
    content:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now
    }
})


export interface User extends Document{
    username:string;
    email:string;
    password:string;
    verifyCode:string;
    isVerified:boolean;
    verifyCodeExpiry:Date;
    isAcceptingMessage:boolean;
    messages:Message[];
}

const UserSchema : Schema<User> = new Schema({
    username:{
        type:String,
        required:[true,"username must be required"],
        trim:true
    },
    email:{
        type:String,
        required:[true,"email must be required"],
        unique:true,
        match:[/.+\@.+\..+/,"please enter valid email address"]
    },
    password:{
        type:String,
        required:[true,'password must be required']
    },
    verifyCode:{
        type:String,
        required:[true,"verify code must be required"],
    },
    verifyCodeExpiry:{
        type:Date,
        required:[true,"verify code exipiry date is required"],
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    isAcceptingMessage:{
        type:Boolean,
        default:true
    },
    messages:[MessageSchema]

})



const userModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User",UserSchema);
export default userModel;

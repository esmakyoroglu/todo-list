import mongoose, {Schema} from "mongoose";

const TaskSchema=new Schema({
    //index.ejs de <input> name de ne yazıyorsa onu veriyoruz
    listItems:{
        type:String,
        required:true,
    }

});
export default mongoose.model('Task', TaskSchema);
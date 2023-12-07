import express from "express";
import Task from "../models/Task.js";
const router=express.Router();

let listItems=[];

router.get("/", async(req, res)=>{
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date=new Date();
    const day=date.toLocaleDateString(undefined, options);
    
    try {
        const listItems = await Task.find();
        res.render("index",{
            today:day,
            item:listItems
        });
    } catch (error) {
        console.log(error);
    }
    
});

/*function insertTaskData(){
    Task.insertMany([
        {
            listItems:"deneme"
        }
    ])
}
insertTaskData();
*/

//verileri alacağımız için async olması önemlidir
router.post("/add", async(req, res)=>{
    const newTask= new Task({
        listItems:req.body.listItems
    });
    try {
        //Task models den gelmektedir
        await Task.create(newTask);
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
});

router.post("/delete/:id", async (req, res) => {
    try {
        await Task.deleteOne({_id: req.params.id});
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
});

router.get("/edit/:id", async(req, res)=>{
    try {
        listItems=await Task.findOne({_id:req.params.id});
        res.render("edit", {item:listItems});
    } catch (error) {
        console.log(error);
    }
});

router.post("/edit/:id", async(req, res)=>{
    try {
        await Task.findByIdAndUpdate(req.params.id, {
            listItems:req.body.listItems
        });
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
});




export default router;

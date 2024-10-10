import studentModel from "../models/studentSchema.js";
const readController = async (req, res) => {
    try {
        console.log("Read Controller Fired 🔥");
        const records = await studentModel.find({})

        if (records){
            res.render("read.ejs", {'records': records});
        }else{
            // res.render("read.ejs");
            res.render("read");
        }

    } catch (getError) {
        console.log("Error: ", getError);
    }
}


export { readController }
import studentModel from "../models/studentSchema.js";

// editController
const editController = async (req, res) => {
    try {
        console.log("Edit Controller Fired 🔥");
        // console.log(req.params.id);
        const record = await studentModel.findById({ '_id': req.params.id });

        if (record) {
            res.render("edit", { 'record': record })
        } else {
            res.render("edit")
        }

    } catch (getError) {
        console.log("Error: ", getError.message);
    }
}


// updateController
const updateController = async (req, res) => {
    try {
        console.log("Update Controller Fired 🔥");
        const updatedRecord = await studentModel.findByIdAndUpdate(req.params.id, req.body)

        if (updatedRecord) {
            res.redirect('/')
        } else {
            res.redirect('read')
        }

    } catch (getError) {
        console.log("Error: ", getError.message);
    }
}

// deleteController
const deleteController = async (req, res) => {
    try {
        console.log("Delete Controller Fired 🔥");
        const deleteRecord = await studentModel.findByIdAndDelete(req.params.id)
        if (deleteRecord) {
            res.redirect('/')
        } else {
            res.redirect('/read')
        }

    } catch (getError) {
        console.log("Error: ", getError.message);
    }
}

export { editController, updateController, deleteController }
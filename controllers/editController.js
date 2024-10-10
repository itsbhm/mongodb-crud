const editController = async (req, res) => {
    try{
        console.log("Edit Controller Fired 🔥");
        // console.log(req.params.id);
        res.render("edit")
    }catch (getError){
        console.log("Error: ", getError.message);
    }
}

export {editController}
import saleModel from "../models/saleModel.js";

// get all sales
export const allSales = async (req,res) => {
    try{
        const sales = await saleModel.findAll();
        if (sales.length === 0){
            res.status(404).json({
                message: "There is no record in the table"
            })
            console.log("There is no record in the table")
        }else{
            res.status(200).json({
                message: 'Total sale is:' + sales.length,
                data: sales
            })
        }
    }catch (error){
        console.log(error)
    }
};

// logic to get a single sale
export const singlesale = async (req,res) => {
    try{
        // grab the id from the url
        const id = req.params.id;
        const sale = await saleModel.findAll({
            where: {id:id}
        });
        if(sale.length === 0){
            res.status(404).json({
                message: `No such id: ${id}`
            });
        }else{
            res.status(200).json({
                data:sale[0]
            });
        }
    }catch(e){
        res.status(404).json({
            message: e.message
        })
    }
}

export const newsale = async (req,res) => {
    try{
        const sale = await saleModel.create(req.body);
        res.status(201).json({
            data:sale
        })
    }catch(e){
        res.status(400).json({
            message:e.message
        })
    }
}


// remove sale from the database table
export const updateSale = async (req,res) => {
try{
    const id = req.params.id;
    const updatedSale = await saleModel.update(req.body, {where: {id:id}});
    if (updatedSale[0]==0){
        res.status(404).json({
            message: `No such id: ${id}`
        });
        console.log(updatedSale[0])
    }else{
        res.status(200).json({
            message: 'updated successfully',
            data: updatedSale
        });
    }
}catch(e){
    res.status(500).json({
        message: e.message
    })
}
}


// remove sale from the database table
export const deleteSale = async (req, res) => {
    try {
        // grab the id from the url
        const id = req.params.id;
        // remove the sale with the specified id passed
        const removedSale = await saleModel.destroy( {
            where: { id: id}
        } );
        // check for wrong id
        if ( removedSale == 0 ) {
            res.status( 404 ).json( {
                message: `No such id: ${ id }`
            } );
            console.log(removedSale)
        } else {
            // return the result
             res.status( 200 ).json( {
            message: "Successfully deleted",
            data: removedSale
        })
        }
    } catch ( e ) {
        res.status( 400 ).json( {
            message: e.message
        })
    }
} 
// remove sale from the database table
// export const deleteSale = async (req, res) => {
//     try {
//         const id = req.params.id;
//         const removedSale = await saleModel.destroy( {
//             where: { id: id}
//         } );
//         res.status( 200 ).json( {
//             message: "Successfully deleted",
//             data: removedSale
//         })
//     } catch ( e ) {
//         res.status( 400 ).json( {
//             message: e.message
//         })
//     }
// } 
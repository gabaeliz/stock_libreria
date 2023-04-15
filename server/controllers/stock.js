const models = require("../../database/models");

const addStock = async (req, res) => {
    try {
        const { body } = req;
        const user = await models.stockBooks.create({
            title: body.title,
            author:body.author,
            description: body.description,
            price: body.price,
            stock: true
            
        });
        return res.status(201).send("Se agrego un nuevo titulo al stock");
    } catch (error) {
        return res
            .status(500)
            .send('Lo sentimos ha ocurrido un error en el servidor')

    }
};

module.exports = { addStock };
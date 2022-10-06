const {
    getAll,
    createOne,
    updateOne,
    deleteOne,
    findOne,
} = require("../models/waifu");

const index = async (_, res) => {
    const { code, data } = await getAll();
    res.status(code).json({ data });
};

const create = async (req, res) => {
    const { name } = req.body;
    const newWaifu = { name };
    const { code, data } = await createOne({ data: newWaifu });
    res.status(code).json({ data });
};
const update = async (req, res) => {
    const { waifu } = req.params;
    const { name } = req.body;
    const nd = { name };
    const { code, data } = await updateOne({ data: nd, id: waifu });
    res.status(code).json({ data });
};

const destroy = async (req, res) => {
    const { waifu } = req.params;
    const { code, data } = await deleteOne({ id: waifu });
    res.status(code).json({ data });
};

const show = async (req, res) => {
    const { waifu } = req.params;
    const { code, data } = await findOne({ id: waifu });
    res.status(code).json({ data });
};
module.exports = { index, create, update, destroy, show };

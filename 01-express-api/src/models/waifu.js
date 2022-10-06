const mongoose = require("mongoose");
const schema = new mongoose.Schema(
    {
        name: String,
    },
    { collection: "waifus" }
);

const Waifu = mongoose.model("Waifu", schema);

const getAll = async () => {
    try {
        const response = await Waifu.find();
        return {
            code: 200,
            data: response,
        };
    } catch (error) {
        return {
            code: 500,
            data: {
                error: true,
                data: error,
            },
        };
    }
};

const createOne = async ({ data }) => {
    try {
        const nw = new Waifu(data);
        const guardado = await nw.save();
        return {
            code: 200,
            data: guardado,
        };
    } catch (error) {
        return {
            code: 500,
            data: {
                error: true,
                data: error,
            },
        };
    }
};
const updateOne = async ({ data, id }) => {
    try {
        await Waifu.findOneAndUpdate({ _id: id }, data);
        const w = await Waifu.findById(id);
        return {
            code: 200,
            data: w,
        };
    } catch (error) {
        return {
            code: 500,
            data: {
                error: true,
                data: error,
            },
        };
    }
};
const deleteOne = async ({ id }) => {
    try {
        await Waifu.findByIdAndDelete(id);
        return {
            code: 200,
            data: "waifu eliminada",
        };
    } catch (error) {
        return {
            code: 500,
            data: {
                error: true,
                data: error,
            },
        };
    }
};
const findOne = async ({ id }) => {
    try {
        const w = await Waifu.findById(id);
        return {
            code: 200,
            data: w,
        };
    } catch (error) {
        return {
            code: 500,
            data: {
                error: true,
                data: error,
            },
        };
    }
};
module.exports = { getAll, createOne, updateOne, deleteOne, findOne };

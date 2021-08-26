
const atp_things = require('atp_things_client_redis')

async function atp_things_list(req, res) {
    let data;
    try {
        data = await atp_things.getList();
    } catch (err) {
        data = { error: err };
        console.log("error", err);
    }
    res.json(data);
};


async function atp_things_get(req, res){
    let data;
    try {
        if(!req.params.uuid)
        {
            data = { error: "Atp thing not selected." };
        }
        else if (req.params.property)
            data = await atp_things.get(req.params.uuid, req.params.property);
        else
        {
            data = await atp_things.get(req.params.uuid);
        }
    } catch (err) {
        data = { error: err };
        console.log("error", err);
    }
    res.json(data);
};





module.exports = {
    atp_things_list,
    atp_things_get

}
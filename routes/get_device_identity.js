
const atp_things = require('atp_things_client_redis')

module.exports = async (req, res) => {
    let data;
    try {
        if(!req.params.uuid)
        {
            data = await atp_things.device.list();
        }
        else if (req.params.property)
            data = await atp_things.get(req.params.uuid, req.params.property);
        else
        {
            data = await thatp_thingsings.get(req.params.uuid);
        }
    } catch (err) {
        data = { error: err };
        console.log("error", err);
    }
    res.json(data);
};

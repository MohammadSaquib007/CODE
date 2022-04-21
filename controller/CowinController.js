let getOtp = async function(req,res) {
    try{
        let option={
            method : "post",
            url : "https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP",
            data: {"mobile" : req.body.mobile}

        }
        let responce = await axios(option)

        let id = responce.data
        req.status(200).send({msg:"success",data:id})

    } catch (err) {
        req.status(500).send({msg:"something went wrong"})
    }
}

module.exports.getOtp = getOtp
export const getUser = (req, res) =>  {
    try {
        res.status(201).json({
            name: 'john'
        });
    } catch(error) {
        res.status(200).json({
            status: 400
        });
    }
}

export const postUser = (req, res) =>  {
    try {
        if(req.body.email === 'shahabuddiun.cse.ru@gmail') {
            res.status(200).json({
                "success": "Success"
            });
        } else {
            throw new Error("Some error is occured");
        }
    } catch(error) {
        res.status(400).json({
            status: 400
        });
    }
}

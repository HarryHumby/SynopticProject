export default (req, res) => {
    res.status(200).send({
        healthy: true
    }).end();
}
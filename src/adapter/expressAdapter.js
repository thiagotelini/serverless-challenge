export default function (fn) {
    return async function (req, res) {
        const obj = await fn(req.params, req.body);
        console.log('req >> '+ req);
        console.log('obj >> '+ obj);
        res.json(obj);
    }
}
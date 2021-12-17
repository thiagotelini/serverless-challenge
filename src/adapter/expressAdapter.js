// Adapta as requisições de acordo com o Framework -- Express utiliza (req, res)
export default function (fn) {
    return async function (req, res) {
        const obj = await fn(req.params, req.body);
        res.json(obj);
    }
}
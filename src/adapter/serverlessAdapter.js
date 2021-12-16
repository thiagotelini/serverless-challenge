export default function (fn) {
    return async function (request) {
        return fn(request.body);
    }
}


export default function convertObjectToString(params, where) {

    let result = params.hasOwnProperty("filter") || params.hasOwnProperty("id") ? "" : `${where};`;
    for (var key in params) {
        if (key === "id") {
            result += `where id = (${params[key].join(",")});`;
        } else if (key === "filter") {
            const compiler = params[key].join('& ');
            result += `${where} & ${compiler};`
        }
        else {
            result += `${key} ${params[key]};`;
        }
    }
    return result;
}

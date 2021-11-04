
const utils = {}
const invalid = [ undefined, '', null ]

utils.isEmpty = function(obj){
    for( const i of invalid ){
        if(i === obj){
            return true
        }
    }
    return false
}

utils.notEmpty = function (obj) {
    return !utils.isEmpty(obj)
}

utils.formatJson = function(json) {
    if (json) {
        for (const key in json) {

            for (const str of invalid) {
                if (typeof json[key] !== 'boolean' && json[key] === str) {
                    delete json[key]
                    continue
                }
            }
            // json object
            if (typeof json[key] === 'object' && Object.prototype.toString.call(json[key]).toLowerCase() === '[object object]' && !json[key].length) {
                utils.formatJson(json[key])
                if (JSON.stringify(json[key]) === '{}') {
                    delete json[key]
                }
                continue
            }
            // array
            if (Array.isArray(json[key])) {
                for (let i = (json[key]).length - 1; i >= 0; i--) {
                    const arrJson = (json[key])[i]
                    utils.formatJson(arrJson)
                    if (JSON.stringify(arrJson) === '{}') {
                        (json[key]).splice(i, 1)
                    }
                }
                if ((json[key]).length === 0) {
                    delete json[key]
                }
            }
        }
    }
}


module.exports = utils

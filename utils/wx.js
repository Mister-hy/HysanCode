export function wxToPromise (method='request',options={}){
    return new Promise((resolve,rejcet)=>{
        options.success = resolve
        options.fail = rejcet
        wx[method](options)
    })
}
import { clientIlumini } from "../clientIlumini.api"


export const products = () => {
    clientIlumini.get('', {
        params: {
            id: 1
        }
    }).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })

    
}

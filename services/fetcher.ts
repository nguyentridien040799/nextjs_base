import { instance } from './axios'
import { ApiResponse } from './request.type'

type Obj = { [key: string]: any }

function get<T, R = ApiResponse<T>>(route: string, params?: Obj): Promise<R> {
    return instance.get(route, { params })
}

function post<T, R = ApiResponse<T>>(route: string, payload?: Obj, config?: Obj): Promise<R> {
    return instance.post(route, payload, config)
}

function put<T, R = ApiResponse<T>>(route: string, payload?: Obj, config?: Obj): Promise<R> {
    return instance.put(route, payload, config)
}

function del<T, R = ApiResponse<T>>(route: string): Promise<R> {
    return instance.delete(route)
}

function upload<T, R = ApiResponse<T>>(route: string, payload: Obj): Promise<R> {
    const formData = new FormData()

    function appendFormData(nameInput: string, array: Array<any>): void {
        for (let i = 0; i < array.length; i += 1) {
            formData.append(nameInput, array[i])
        }
    }

    const keysData = Object.keys(payload)

    if (keysData.length > 0) {
        for (let i = 0; i < keysData.length; i += 1) {
            const keyItem = keysData[i]
            if (Array.isArray(payload[keyItem])) {
                appendFormData(keyItem, payload[keyItem])
            } else {
                formData.append(keyItem, payload[keyItem])
            }
        }
    }

    return instance.post(route, formData)
}

export { get, post, put, del, upload }

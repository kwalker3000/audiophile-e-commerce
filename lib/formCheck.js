

export const nameCheck = (value) => {
    let regex = /[!@#$%^&*\(\)\{\}\\\/\?\|\>\<\"\+=]/

    return (regex.test(value))
}

export const emailCheck = (value) => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    return (regex.test(value))
}

export const phoneCheck = (value) => {
    let regex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
    return (regex.test(value))
}

export const regionCheck = (value) => {
    let regex = /[!@#$%^&*\(\)\{\}\\\/\?\|\>\<\"\+=]/

    return (regex.test(value))
}

export const lineCheck = (value) => {
    let regex = /[!@#$%^&*\(\)\{\}\\\/\?\|\>\<\"\+=]/
    return (regex.test(value))
}

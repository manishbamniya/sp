export const getSystemData = () => {
    return {
        type: "REQUEST_SYSTEM_DATA",
    }
}

export const getSystemDetails = (ID) => {
    return {
        type: "REQUEST_SYSTEM_DETAILS",
        id:ID
    }
}
export const getUserData = () => {
    return {
        type: "REQUEST_USER_DATA",
    }
}

export const getUserDetails = (ID) => {
    console.log("getUserDetails     " + ID)
    return {
        type: "REQUEST_USER_DETAILS",
        id:ID
    }
}
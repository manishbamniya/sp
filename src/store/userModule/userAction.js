export const getUserData = () => {
    return {
        type: "GET_USER_DATA"
    }
}

export const getUserDetails = (ID) => {
    console.log("getUserDetails" + ID)
    return {
        type: "GET_USER_DETAILS",
        id:ID
    }
}
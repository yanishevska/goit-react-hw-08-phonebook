const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

const getIsNotification = state => state.auth.isNotification;


const authSelectors = {
    getIsLoggedIn,
    getUserName,
    getIsFetchingCurrent,
    getIsNotification,
};

export default authSelectors;
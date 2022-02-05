const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;
const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;
const getLoading = state => state.auth.isLoading;
const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsFetchingCurrent,
  getLoading,
};
export default authSelectors;

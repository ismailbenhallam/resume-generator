const getUsernameFromNetworkUrl = (string) => {
  let usernameStartIndex = string.lastIndexOf("/");
  return string.substring(usernameStartIndex).substring(1);
};

export default getUsernameFromNetworkUrl;

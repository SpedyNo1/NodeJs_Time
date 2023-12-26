const createLineClient = require('./lineConfig');
const { config, client } = createLineClient();

const getUserInformation = async (client, userId) => {
    try {
      const userProfile = await client.getProfile(userId);
      const userName = userProfile.displayName;
      const userPic = userProfile.pictureUrl;
  
      return { userId, userProfile, userName, userPic };
    } catch (error) {
      console.error("Error getting user information:", error);
    }
  };
  
  module.exports = {
    getUserInformation,
  };
  
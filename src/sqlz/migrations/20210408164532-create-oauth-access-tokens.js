module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('oauth_access_tokens', {
      id: {
        primaryKey: true,
        type: Sequelize.STRING,
      },
      user_id: {
        type: Sequelize.STRING,
      },
      scope: {
        type: Sequelize.STRING,
      },
      revoked: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      expires_at: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('oauth_access_tokens');
  },
};

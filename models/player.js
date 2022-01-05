module.exports = (sequelize, DataTypes) => {

    const Player = sequelize.define("player", {
        player_name: {
            type: DataTypes.STRING(50),
        },
        player_height: {
            type: DataTypes.STRING(3),
        },
        player_weight: {
            type: DataTypes.STRING(3),
        },
        player_position: {
            type: DataTypes.ENUM('penyerang', 'gelandang', 'bertahan', 'penjaga gawang'),
        },
        player_number: {
            type: DataTypes.STRING(3),
        },
    })

    return Player
}
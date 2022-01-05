module.exports = (sequelize, DataTypes) => {

    const Team = sequelize.define("team", {
        team_name: {
            type: DataTypes.STRING(50),
        },
        team_logo: {
            type: DataTypes.BLOB("long"),
        },
        years_active: {
            type: DataTypes.STRING(50),
        },
        team_address: {
            type: DataTypes.STRING(50),
        },
        team_home: {
            type: DataTypes.STRING(50),
        },
    })

    return Team
}
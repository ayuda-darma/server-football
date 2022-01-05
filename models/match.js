module.exports = (sequelize, DataTypes) => {

    const Match = sequelize.define("match", {
        match_date: {
            type: DataTypes.DATE,
        },
        match_time: {
            type: DataTypes.TIME,
        },
        match_home_team: {
            type: DataTypes.STRING(50),
        },
        match_away_team: {
            type: DataTypes.STRING(50),
        },
    })

    return Match
}
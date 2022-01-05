module.exports = (sequelize, DataTypes) => {

    const Result = sequelize.define("result", {
        result_score: {
            type: DataTypes.STRING(50),
        },
        goal_home_team_player: {
            type: DataTypes.STRING(3),
        },
        goal_away_team_player: {
            type: DataTypes.STRING(3),
        },
        goal_home_team_time: {
            type: DataTypes.STRING(3),
        },
        goal_away_team_time: {
            type: DataTypes.STRING(3),
        },
    })

    return Result
}
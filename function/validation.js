const Joi = require('joi')

const team_schema = Joi.object({
    team_name: Joi.string()
        .min(3)
        .max(50)
        .required(),
    
    team_logo: Joi.string()
        .required(),

    years_active: Joi.string()
        .min(3)
        .max(50)
        .allow('',null),
    
    team_address: Joi.string()
        .min(5)
        .max(50)
        .allow('',null),

    team_home: Joi.string()
        .min(5)
        .max(50)
        .allow('',null),
});

const player_schema = Joi.object({
    player_name: Joi.string()
        .min(3)
        .max(50)
        .required(),
    
    player_height: Joi.string()
        .pattern(/^[0-9]+$/, { name: 'height'})
        .allow('',null)
        .min(1)
        .max(3),

    player_weight: Joi.string()
        .pattern(/^[0-9]+$/, { name: 'height'})
        .allow('',null)
        .min(1)
        .max(3),
    
    player_position: Joi.string()
        .valid('penyerang', 'gelandang', 'bertahan', 'penjaga gawang'),

    player_number: Joi.string()
        .pattern(/^[0-9]+$/, { name: 'number'})
        .allow('',null)
        .min(1)
        .max(3),
});

const match_schema = Joi.object({
    match_date: Joi.date(),
    
    match_time: Joi.string()
        .regex(/^([0-9]{2})\:([0-9]{2})$/),
    
    match_home_team: Joi.string()
        .min(2)
        .max(50)
        .allow('',null),

    match_away_team: Joi.string()
        .min(2)
        .max(50)
        .allow('',null),
});

const result_schema = Joi.object({
    result_score: Joi.string()
        .min(3)
        .max(50)
        .required(),

    goal_home_team_player: Joi.string()
        .min(1)
        .max(3)
        .allow('',null),
    
    goal_away_team_player: Joi.string()
        .min(1)
        .max(3)
        .allow('',null),

    goal_home_team_time: Joi.string()
        .min(1)
        .max(3)
        .allow('',null),

    goal_away_team_time: Joi.string()
        .min(1)
        .max(3)
        .allow('',null),
});

const validate = (body, method) => {
    
    let schema = ''

    if(method == 'team'){
        schema = team_schema
    }
    if(method == 'player'){
        schema = player_schema
    }
    if(method == 'match'){
        schema = match_schema
    }
    if(method == 'result'){
        schema = result_schema
    }

    const check =  schema.validate(body);
    return check
}

module.exports = validate
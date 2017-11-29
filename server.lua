function getIdentity(source, callback)
  local identifier = GetPlayerIdentifiers(source)[1]
  MySQL.Async.fetchAll("SELECT * FROM `users` WHERE `identifier` = @identifier", {['@identifier'] = identifier},
  function(result)
    if result[1]['firstname'] ~= nil then
      local data = {
        identifier    = result[1]['identifier'],
        firstname     = result[1]['firstname'],
        lastname      = result[1]['lastname'],
        dateofbirth   = result[1]['dateofbirth'],
        sex           = result[1]['sex'],
        height        = result[1]['height'],
        job        = result[1]['job'],
      }
      callback(data)
    else
      local data = {
        identifier    = '',
        firstname     = '',
        lastname      = '',
        dateofbirth   = '',
        sex           = '',
        height        = ''
      }
      callback(data)
    end
  end)
end




RegisterServerEvent('gc:openIdentity')
AddEventHandler('gc:openIdentity',function(other)
    getIdentity(source, function(data)
        local gender
        if data.sex == "m" or data.sex == "M" then
            gender = "m"
        elseif data.sex == "f" or data.sex == "F" then
            gender = "f"
        end 
        TriggerClientEvent('gc:showItentity', tonumber(other), {
            nom = data.lastname,
            prenom = data.firstname,
            dateNaissance = tostring(data.dateofbirth),
            sexe = gender,
            jobs = data.job,
            taille = data.height,
            id = identifier
        })
    end)
end)

RegisterServerEvent('gc:openMeIdentity')
AddEventHandler('gc:openMeIdentity',function()
    getIdentity(source, function(data)
        local gender
        if data.sex == "m" or data.sex == "M" then
            gender = "m"
        elseif data.sex == "f" or data.sex == "F" then
            gender = "f"
        end
        TriggerClientEvent('gc:showItentity', source,
		{
            nom = data.lastname,
            prenom = data.firstname,
            dateNaissance = tostring(data.dateofbirth),
            sexe = gender,
            jobs = data.job,
            taille = data.height,
            id = identifier
        })
    end)
end)
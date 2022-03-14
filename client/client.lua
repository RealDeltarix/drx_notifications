------------------------CREDITS------------------------
--------        Script made by Deltarix        --------
--   Copyright 2021 Deltarix. All rights reserved    --
-------------------------------------------------------

RegisterCommand(Config.Command, function()
    SendNUIMessage({
        update = 'ShowSets'
    })
    SetNuiFocus(true, true)
end)

RegisterNUICallback('closeSets', function()
    SetNuiFocus(false, false)
end)

RegisterNetEvent('drx_notify:client', function(title, text, icon)
    if title then
        SendNUIMessage({
            update = 'sendNotify',
            title=title,
            text=text,
            icon=icon
        })
    end
end)
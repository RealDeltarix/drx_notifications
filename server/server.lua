------------------------CREDITS------------------------
--------        Script made by Deltarix        --------
--   Copyright 2021 Deltarix. All rights reserved    --
-------------------------------------------------------
RegisterServerEvent('drx_notify:server', function(title, text, icon)
    local src = source
    if title then
        TriggerClientEvent('drx_notify:client', src, title, text, icon)
    end
end)
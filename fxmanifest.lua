lua54 'yes'
fx_version 'adamant'
game 'gta5'

shared_scripts {
	'Config.lua'
}

ui_page 'client/html/index.html'

server_scripts {
	'server/server.lua'
}

client_scripts {
	'client/client.lua'
}

files {
	'client/html/index.html',
	'client/html/style.css',
	'client/html/javascript.js',
}

escrow_ingore {
	'Config.lua'
}
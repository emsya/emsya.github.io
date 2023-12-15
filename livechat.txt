###copy dan paste di terminal winbox

/ip hotspot walled-garden ip 
add action=accept comment="Emsya Qr-Code" disabled=no dst-host=emsya.github.io
add action=accept comment="Emsya Chat" disabled=no dst-host=tawk.to
/ip hotspot walled-garden
add dst-host=*whatsapp.com dst-port=443
add dst-host=*whatsapp.net dst-port=443
module.exports = {
        px: 'z!',
        token: 'OTI2MTI3MjE5ODMzNzI5MDQ0.Yc3JLw.jBUWoz-dkq3uPRNHo0Le4HHOBlw', //DİSCORD BOTUNUZUN TOKENİNİ YAZIN
        playing: 'Created by BuffLL',

    opt: {
        DJ: {
            enabled: false, //EĞER SADECE DJLER KULLANA BİLSİN İSTİYOR İSENİZ false yazanı true yapın.
            roleName: 'DJ', //DJ ROLÜNÜN İSMİ NE OLACAK İSE YAZIN SUNUCUNUZDA O ROLDEKİLER KULLANA BİLİR
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume'] //DOKUNMA
        },
        maxVol: 250, //maximum ses seviyesi kaç olacak belirte bilirsiniz.
        loopMessage: false, //elleme
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio', //elleme
                highWaterMark: 1 << 25 //elleme
            }
        }
    }
};
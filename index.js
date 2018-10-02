const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://iot.eclipse.org')
console.log("Hola 1");
client.on('connect', () => {
  sendMessages();
})
async function sendMessages(){
    while(true){
        console.log("Sending Message.");
        client.publish('/test', 'Hello world!');
        console.log("Message sent.");
        await new Promise(done => setTimeout(done, 5000));
    }
}

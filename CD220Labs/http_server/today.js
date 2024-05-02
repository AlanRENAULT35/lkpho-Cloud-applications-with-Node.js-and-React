module.exports.getDate = function getDate() {
    let aestTime = new Date().toLocaleString("fr-FR", {timeZone: "Europe/Paris"});
    return new Date(aestTime);
}

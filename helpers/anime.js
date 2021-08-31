module.exports.getAnime = async function(limit=5){
    let animes = await fetch("https://kitsu.io/api/edge/trending/anime?limit="+limit)
    .then(res => res.json())

    // interfaz
    let animesObject = [];

    // console.log(animes["data"][0]["id"])
    // console.log(animes["data"][0]["attributes"]["canonicalTitle"])
    // console.log(animes["data"][0]["attributes"]["posterImage"]["medium"])

    animes["data"].forEach(a => {
        
        animesObject.push({
            id: a["id"],
            title: a["attributes"]["canonicalTitle"],
            description: a["attributes"]["description"],
            image: a["attributes"]["posterImage"]["medium"]
        })
    });

    return animesObject

}
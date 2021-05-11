const HomeFinder = {};
const URL = "http://localhost:3500/api/v1/dashboard/"
// const URL = "https://saint-node-server.herokuapp.com/dashboard/"


HomeFinder.home = async () => {
    const response = await fetch(URL, {
        method: "GET",
        headers: { token: localStorage.token},
    })
    return await response.json()
}

export default HomeFinder;
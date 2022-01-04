class XenoCantoService {
  url = `https://www.xeno-canto.org/api/2/recordings?query=Ворон`;
  async getBirdVoice(url) {
    const res = await fetch(url, {mode:"no-cors"});
    // if(!res.ok) {
    //   throw new Error (`Could not fetch , recieved ${res.status}`)
    // }
    return await res.json();
  }

}

export default XenoCantoService;
// class XenoCantoService {

//   async getBirdVoice (`https://www.xeno-canto.org/api/2/recordings?query=Ворон`) {
//     const res = await fetch(`https://www.xeno-canto.org/api/2/recordings?query=Ворон`, {mode:"no-cors"});
//     // if(!res.ok) {
//     //   throw new Error (`Could not fetch , recieved ${res.status}`)
//     // }
//     return await res.json();
//   }

// }

// const voiceApi = new XenoCantoService();
//   voiceApi.getBirdVoice().then((data) => {
//     console.log(data);
//   })

// export default XenoCantoService;
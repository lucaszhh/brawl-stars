const getBrawlers = async () => {
            const res = await fetch("https://api.brawlapi.com/v1/brawlers")
            const data = await res.json()
            console.log(data, "data")
            return data.list
        }

        const renderBrawlers = async () => {
            const brawlers = await getBrawlers()
            document.querySelector(".brawlers").innerHTML += brawlers.map((brau) => {
                return (`<article class="card"><h2>${brau.name}</h2> <div><img src="${brau.imageUrl}" alt="${brau.name}" /> <img src="${brau.imageUrl2}" alt="${brau.name}" />  <img src="${brau.imageUrl3}" alt="${brau.name}" /></div></article>`)
            }).join("");
            

                
        }
        
        const ocultarBrawlers = () => {
          document.querySelector(".brawlers").innerHTML = ""
        }
        
        const mostrarBrawlers = () => {
          renderBrawlers()
        }
        
       const getMaps = async () => {
            const res = await fetch("https://api.brawlapi.com/v1/maps")
            const data = await res.json()
            console.log(data, "data")
            return data.list
        }

        const renderMaps = async () => {
            const maps = await getMaps()
            document.querySelector(".maps").innerHTML += maps.map((map) => {
                console.log(map)
                return (`<article class="card"><h2>${map.name}</h2> 
                <img src="${map.imageUrl}" alt="${map.name}" /></article>`)
            }).join("");}
        
                const ocultarMapas = () => {
          document.querySelector(".maps").innerHTML = ""
        }
        
        const mostrarMapas = () => {
          renderMaps()
        }

        renderBrawlers()
        renderMaps()
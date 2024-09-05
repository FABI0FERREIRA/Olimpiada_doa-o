/* CACHORRO  */
//console.log(dados[0].descricao)
function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")
    /*console.log(section)*/
    
    
    let resualtados = ""
    
    
    // para cada dados dentro da lista de dados 
    for (let dado of dados) {
    
        resualtados += `
        <div class="item-resultado">
            <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Mais informações</a>
        </div>`
    
    
    }
    
    
    section.innerHTML = resualtados




}


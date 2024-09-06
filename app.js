/* CACHORRO  */
//console.log(dados[0].descricao)
function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")
    /*console.log(section)*/
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    




    // se campo vazio for uma string sem nada 
    if (!campoPesquisa ){
        section.innerHTML = "<p>Nada foi encontrado.</p> <p>Você precisa digitar o nome de um gato ou cachorro o que vem mente sobre eles<p>"
        return
    }

    
    campoPesquisa = campoPesquisa.toLowerCase()


    let resualtados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    console.log(campoPesquisa)
    // para cada dados dentro da lista de dados 
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo faca 
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            //criar um novo elemento
            resualtados += `
            <div class="item-resultado">
                <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
            </div>`
        
        }

        //console.log(dado.titulo.includes(campoPesquisa))



    
    }
    
    if (!resualtados) {
        resualtados = "<p>não foi encontrado.<p>"
    }

    
    section.innerHTML = resualtados




}


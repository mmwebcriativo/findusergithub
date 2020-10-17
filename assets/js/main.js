    const search = document.querySelector("#search")
    const profile = document.querySelector("#profile") //Container que engloba Sidebar e Main
    const url ="http://api.github.com/users"
    const cliente_id = "Iv1.82d8feccc76866da"
    const cliente_secret = "96424516a87ea8773fff6685ec5d45aedb993f59"

    async function getUser(user){
        const profileResponse = await fetch(
            `${url}/${user}?client_id=${cliente_id}&cliente_secret=${cliente_secret}`
            )

        const profile = profileResponse.json() 

        return profile
    }

    //Mostrando Conteúdo com reposta do Github   
    function showProfile(user){
        console.log(user)
        container.innerHTML = ` <div id="container" class="container flex "> 

        <aside class="sidebar"><!--ASIDE-->
            <div class="avatar">
               <ul>
                    <img src="${user.avatar_url}"  style="width: 300px; height: 300px;" alt="">  
                    <li class="name">${user.name}</li>
                    <li class="last-name">${user.login}</li>
               </ul>
            </div>
            
            <ul>
                <li id="organization" class="info flex align-center">
                    <img src="assets/img/svg/organization.svg" alt="Empresa">
                    ${user.company}
                </li>
    
                <li id="location" class="info flex align-center">
                    <img src="assets/img/svg/location.svg" alt="Estamos Localizados">
                    <p>${user.location}</p>
                </li>
    
                <li id ="star" class="info flex align-center">
                    <img src="assets/img/svg/star.svg" alt="">
                    <p>Estrelas</p>
                </li>
    
                <li id="repository" class="info flex align-center">
                    <img src="assets/img/svg/repository.svg" alt="Repositórios">
                    <p>${user.public_repos}</p>
                </li>
    
                <li id="folowers" class="info flex align-center">
                    <img src="assets/img/svg/followers.svg" alt="Seguidores">
                    <p>${user.followers}</p>
                </li>
            </ul>
    
        </aside><!--END ASIDE-->
    
        <main> <!--MAIN-->
            <div class="area-repository">
                <div class="item">
                    <h2>Finder App</h2>
                    <p>Alguma descrição do projeto</p>
                    <span class="flex align-center" ><img src="assets/img/svg/star.svg" alt="">0</span>
                </div>
    
                <div class="item">
                    <h2>Wpp App</h2>
                    <p>Alguma descrição do projeto</p>
                    <span class="flex align-center" ><img src="assets/img/svg/star.svg" alt="">0</span>
                </div>
    
                <div class="item">
                    <h2>Instagram App</h2>
                    <p>Alguma descrição do projeto</p>
                    <span class="flex align-center"><img src="assets/img/svg/star.svg" alt="">0</span>
                </div>
    
                <div class="item">
                    <h2>Facebook App</h2>
                    <p>Alguma descrição do projeto</p>
                    <span class="flex align-center" ><img src="assets/img/svg/star.svg" alt="">0</span>
                </div>
            </div>       
        </main> <!--END MAIN-->
    </div>`
        
    }

    //Recebendo o que está sendo digitado no input search
    search.addEventListener("keyup", e =>{
        const user = e.target.value

        if(user.length > 0){
            getUser(user).then(res => showProfile(res))
        }
        
    })  

    function searchUser(){    
         //Verificando se o campo input está vazio  
        if (search.value == "" ){
            search.style.borderColor = "red" 
            search.focus()
        } else{
            
            search.style.borderColor = "#000"
            window.location.href = "usuarios.html"; //Direcionando para a página usuários

        }
    }
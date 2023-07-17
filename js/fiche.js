$(document).ready(function() { //s'assurer que le code est exécuté une fois que 
    //le document HTML est complètement chargé.
    function displayUser(user) { // est utilisée pour afficher les informations 
        //d'un utilisateur. 
        const userList = $('#user-list');
    
        const card = $('<div>').addClass('card');
    
        
        const avatar = $('<img>').addClass('img')
            .attr('src', user.avatar_url);
        
        const name = $('<a>').addClass('cta')
            .attr('href', user.html_url)
            .attr('target', '_blank')
            .text(user.login);
  
        const followers = $('<p>').addClass('p')
            .text(`Followers: ${user.followers}`);
        
        const projects = $('<a>').addClass('cta')
            .text('Projects')
            .attr('href', user.repos_url)
            .attr('target', '_blank');
    
        card.append(avatar);
        card.append(name);
        card.append(followers);
        card.append(projects);
        userList.append(card);
    }
    
    function fetchUsers() { // permet d'interroge l'API pour chaque utilisateur 
        //et fait appelle a la fonction display user pour afficher les informations
        const students = [
          "bell4my",
          "seynipeyre",
          "Gstarmix",
          "grizzlywawa",
          "josic490",
          "errudo",
          "anthony35540",
          "sumnifer",
          "Davyde35",
          "cattchoo",
          "faaay80",
          "jdasou"    
        ];
    
        students.forEach(username => {
            const url = `https://api.github.com/users/${username}`;//Cette ligne 
            //permet de construit l'URL de l'API spécifique à l'utilisateur.
    
            $.getJSON(url)
                .done(data => displayUser(data))
                .fail((jqXHR, textStatus, errorThrown) => console.error(`Error fetching GitHub API: ${errorThrown}`));
                //cette partie gère l'erreur en affichant un message 
                //d'erreur dans la console du navigateur.
        });
    }
    
    fetchUsers();
  });

$(document).ready(function() {
    function displayUser(user) {
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
    
    function fetchUsers() {
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
            const url = `https://api.github.com/users/${username}`;
    
            $.getJSON(url)
                .done(data => displayUser(data))
                .fail((jqXHR, textStatus, errorThrown) => console.error(`Error fetching GitHub API: ${errorThrown}`));
        });
    }
    
    fetchUsers();
  });
// $(document).ready(function() {
//     function displayUser(user) {
//       const userList = $('#user-list');
  
//       const card = $('<div>').addClass('card');
  
//       const avatar = $('<img>').addClass('img')
//         .attr('src', user.avatar_url);
  
//       const name = $('<a>').addClass('cta')
//         .attr('href', user.html_url)
//         .attr('target', '_blank')
//         .text(user.login);
  
//       const followers = $('<p>').addClass('p')
//         .text(`Followers: ${user.followers}`);
  
//       const projects = $('<a>').addClass('cta')
//         .text('Projects')
//         .attr('href', user.repos_url)
//         .attr('target', '_blank');
  
//       card.append(avatar);
//       card.append(name);
//       card.append(followers);
//       card.append(projects);
  
//       userList.append(card);
//     }
  
//     function fetchUsers() {
//       $.getJSON('./students.json')
//         .done(data => {
//           const students = data.students;
  
//           students.forEach(username => {
//             const url = `https://api.github.com/users/${username}`;
  
//             $.getJSON(url)
//               .done(data => displayUser(data))
//               .fail((jqXHR, textStatus, errorThrown) => console.error(`Error fetching GitHub API: ${errorThrown}`));
//           });
//         })
//         .fail((jqXHR, textStatus, errorThrown) => console.error(`Error fetching students data: ${errorThrown}`));
//     }
  
//     fetchUsers();
//   });
  
// API call for News


axios.get('https://api.hnpwa.com/v0/news/1.json')
    .then(function (response) {
        console.log(response);
        news(response)
    })
    .catch(function (error) {
        console.log(error);
    })
// INSERT AND ADD TO THE DOM


function news(response) {
    response.data.forEach(function (items) {
        var div = document.createElement('div');
        div.className = 'container';
        div.innerHTML = `
        <a href= ${items.url} class="list-group-item list-group-item-action">
            <div>
                <span class="badge rounded-pill bg-primary">${items.points} Points</span>
            </div>
            <div class="d-flex">
                <h5 class="mb-1">${items.title}</h5>
                <small class="text-muted" style='padding-left: 1rem;'>(${items.domain})</small>
            </div>
    
            <p class="mb-1">by ${items.user}</p>
            <small class="text-muted">${items.time_ago} | ${items.comments_count} comments</small>
        </a>
  `
     document.querySelector('#data').appendChild(div)
    })
}

// API CALL FOR JOBS

axios.get('https://api.hnpwa.com/v0/jobs/1.json')
    .then(function(response){
        // console.log(response)
        jobs(response)
    })
    .catch(function(error){
        // console.log(error)
    })

function jobs(response){
    response.data.forEach(function(job){
       var div = document.createElement('div');
       div.className= 'container'
       div.innerHTML= `
       <ul class="list-group">
        <li class="list-group-item">${job.title}<span style= 'padding-left: 1rem;'>(${job.domain})</span> <p>${job.time_ago} <bold>job</bold></p></li>
       
       </ul>
       `
       document.querySelector('#jobs').append(div)
    })
}

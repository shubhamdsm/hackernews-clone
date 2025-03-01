// API call for News


axios.get('https://api.hnpwa.com/v0/news/1.json')
    .then(function (response) {

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
    .then(function (response) {

        jobs(response)
    })
    .catch(function (error) {
        console.log(error)
    })


//INSERT AND ADD TO DOM
function jobs(response) {
    response.data.forEach(function (job) {
        var div = document.createElement('div');
        div.className = 'container'
        div.innerHTML = `
       <ul class="list-group">
        <li class="list-group-item">${job.title}<span style= 'padding-left: 1rem;'>(${job.domain})</span> <p>${job.time_ago} </p>
        
        <a href=${job.url} class="btn btn-primary stretched-link">Job link</a>
        </li>
        
       </ul>
       `
        document.querySelector('#jobs').append(div)
    })
}



//API CALL FOR NEW
axios.get('https://api.hnpwa.com/v0/newest/1.json')
    .then(function (response) {

        newest(response)
    })
    .catch(function (error) {
        console.log(error)
    })




//INSERT AND ADD TO DOM
function newest(response) {
    response.data.forEach(function (item) {
        var div = document.createElement('div');
        div.className = 'container';
        div.innerHTML = `
            <a href= ${item.url} class="list-group-item list-group-item-action">
                <div>
                    <span class="badge rounded-pill bg-primary">${item.points} Points</span>
                </div>
                <div class="d-flex">
                    <h5 class="mb-1">${item.title}</h5>
                    <small class="text-muted" style='padding-left: 1rem;'>(${item.domain})</small>
                </div>
        
                <p class="mb-1">by ${item.user}</p>
                <small class="text-muted">${item.time_ago} | ${item.comments_count} comments</small>
            </a>
      `
        document.querySelector('#new').appendChild(div)
    })
}


//API CALL FOR SHOW 


axios.get('https://api.hnpwa.com/v0/show/1.json')
    .then(function (response) {

        show(response)
    })
    .catch(function (error) {
        console.log(error)
    })

//INSERT AND ADD TO DOM
function show(response) {
    response.data.forEach(function (item) {
        var div = document.createElement('div');
        div.className = 'container';
        div.innerHTML = `
        <a href= ${item.url} class="list-group-item list-group-item-action">
            <div>
                <span class="badge rounded-pill bg-primary">${item.points} Points</span>
            </div>
            <div class="d-flex">
                <h5 class="mb-1">${item.title}</h5>
                <small class="text-muted" style='padding-left: 1rem;'>(${item.domain})</small>
            </div>
    
            <p class="mb-1">by ${item.user}</p>
            <small class="text-muted">${item.time_ago} | ${item.comments_count} comments</small>
        </a>
  `
        document.querySelector('#show').appendChild(div)
    })
}


//API FOR ASK

axios.get('https://api.hnpwa.com/v0/ask/1.json')
    .then(function (response) {
        
        ask(response)
    })
    .catch(function (error) {
        console.log(error)
    })

//INSERT AND ADD TO DOM

function ask(response) {
    response.data.forEach(function (item) {
        var div = document.createElement('div');
        div.className = 'container';
        div.innerHTML = `
            <a href= ${item.url} class="list-group-item list-group-item-action">
                <div>
                    <span class="badge rounded-pill bg-primary">${item.points} Points</span>
                </div>
                <div class="d-flex">
                    <h5 class="mb-1">${item.title}</h5>
                   
                </div>
        
                <p class="mb-1">by ${item.user}</p>
                <small class="text-muted">${item.time_ago} | ${item.comments_count} comments</small>
            </a>
      `
        document.querySelector('#ask').appendChild(div)
    })
}
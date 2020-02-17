const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json'
};

function fetchNews() {
  axios.get('https://qgokah3wk1.execute-api.eu-west-1.amazonaws.com/dev/actualidade', {
	headers  
})
  .then(function (response) {
    console.log(response);
    let news = document.createElement("ul");
    response.data.Items.forEach(article => {
    	const articleEl = document.createElement("li");
    	articleEl.innerHTML = article.postHeader;
    	news.append(articleEl);
    	//article.postBody
	});
    //document.getElementById("news").innerHTML = news;
    document.getElementById("news").append(news);
  })
  .catch(function (error) {
    console.log(error);
  });
}

function createNews() {
	const title = document.getElementById("create-title").value;
	const text = document.getElementById("create-text").value;
	const link = document.getElementById("create-link").value;
	const data = {
		postHeader: title,
		postBody: text,
		postLink: link
	};
	if(!title || !text || !link){
		alert("Missing information to create");
		return;
	}
	axios.post('https://qgokah3wk1.execute-api.eu-west-1.amazonaws.com/dev/actualidade', 
	data,
	{ headers }
	 )
  	.then(function (response) {
    	fetchNews();
  	})
  	.catch(function (error) {
    	console.log(error);
	});
}
var AlgoNews = {
  getHeadlines: function(lookback, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState != 4) return;
      if (this.status != 200) return callback(null);
    
      var doc = document.implementation.createHTMLDocument("");
      doc.body.innerHTML = this.responseText;
      
      var headlineEls = doc.querySelectorAll("ol li");
      var headlines = _.map(headlineEls, function(el) { return el.innerText });

      callback(headlines);
    }
    xhr.open("GET", "http://grantslatton.com/hngen/?lookback=" + lookback);
    xhr.send();
  }
};
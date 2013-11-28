AlgoNews.getHeadlines(2, function(headlines) {
  var entryEls = document.querySelectorAll("ul.entries li.entry");

  var commentCount = _.random(0, 10);
  var pointsCount = commentCount + _.random(0, 20);
  var headline = headlines[_.random(0, headlines.length - 1)];
  var linkRefEntryEl = entryEls[_.random(11, entryEls.length - 1)];

  var newEntryEl = document.createElement("LI");
  newEntryEl.className = "entry row";

  var commentsLink = document.createElement("A");
  commentsLink.className = "hn span3"
  commentsLink.href = "https://news.ycombinator.com/item?id=6815282"

  var commentsRow = document.createElement("P");
  commentsRow.className = "row";

  var commentCountSpan = document.createElement("SPAN");
  commentCountSpan.className = "comments span2";
  commentCountSpan.innerText = commentCount;
  commentsRow.appendChild(commentCountSpan);

  var pointsCountSpan = document.createElement("SPAN");
  pointsCountSpan.className = "points span1 homepage";
  pointsCountSpan.innerText = pointsCount;
  commentsRow.appendChild(pointsCountSpan);

  commentsLink.appendChild(commentsRow);
  newEntryEl.appendChild(commentsLink);

  var articleLink = document.createElement("A");
  articleLink.className = "link span15"
  articleLink.href = linkRefEntryEl.querySelector("a.link").href;
  articleLink.onclick = function() { alert("If only that were real..."); return false; };
  articleLink.innerText = headline + " ";

  var sourceRefEl = linkRefEntryEl.querySelector("a.link .source");
  if (sourceRefEl) {
    var sourceSpan = document.createElement("SPAN");
    sourceSpan.className = "source"
    sourceSpan.innerText = sourceRefEl.innerText;
    articleLink.appendChild(sourceSpan);
  }

  newEntryEl.appendChild(articleLink);

  var randomEntryEl = entryEls[_.random(1, 10)];
  randomEntryEl.parentElement.insertBefore(newEntryEl, randomEntryEl);
});
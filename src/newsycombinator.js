AlgoNews.getHeadlines(2, function(headlines) {
  var entryList = document.querySelectorAll("table table")[1];
  var entrySeperatorRows = entryList.querySelectorAll("tr[style='height:5px']");
  var entryEls = _.map(entrySeperatorRows, function(sepRow) {
      var infoRow = sepRow.previousSibling;
      var linkRow = infoRow.previousSibling;
      return [linkRow, infoRow];
  });

  var newIndex = _.random(1, 10);
  var commentCount = _.random(0, 10);
  var pointsCount = commentCount + _.random(0, 20);
  var headline = headlines[_.random(0, headlines.length - 1)];
  var linkRefEntryEl = entryEls[_.random(11, entryEls.length - 1)];

  var newLinkRow = document.createElement("TR");

  var indexCell = document.createElement("TD");
  indexCell.align = "right";
  indexCell.valign = "top";
  indexCell.className = "title";
  indexCell.innerText = (newIndex + 1) + ".";
  newLinkRow.appendChild(indexCell);

  var upvoteArrow = document.createElement("DIV");
  upvoteArrow.className = "votearrow";
  upvoteArrow.title = "upvote";

  var upvoteLink = document.createElement("A");
  upvoteLink.href = "#";
  upvoteLink.onclick = function() { return false; }
  upvoteLink.appendChild(upvoteArrow);

  var centerEl = document.createElement("CENTER");
  centerEl.appendChild(upvoteLink);

  var upvoteCell = document.createElement("TD");
  upvoteCell.appendChild(centerEl);

  newLinkRow.appendChild(upvoteCell);

  var titleCell = document.createElement("TD");

  var articleLink = document.createElement("A");
  articleLink.href = linkRefEntryEl[0].querySelector(".title a").href;
  articleLink.onclick = function() { alert("If only that were real..."); return false; };
  articleLink.innerText = headline + " ";
  titleCell.appendChild(articleLink);

  var sourceRefEl = linkRefEntryEl[0].querySelector(".title .comhead")
  if (sourceRefEl) {
    var sourceSpan = document.createElement("SPAN");
    sourceSpan.className = "comhead"
    sourceSpan.innerText = sourceRefEl.innerText;
    titleCell.appendChild(sourceSpan);
  }

  newLinkRow.appendChild(titleCell);

  var newInfoRow = document.createElement("TR");

  var indentCell = document.createElement("TD");
  indentCell.colSpan = 2;
  newInfoRow.appendChild(indentCell);

  var infoCell = document.createElement("TD");
  infoCell.className = "subtext";

  var username = linkRefEntryEl[1].querySelector(".subtext a[href^='user?id=']").innerText;
  var infoText = pointsCount + " points by " + username + " 1 hour ago | flag | ";
  infoCell.innerText = infoText;

  var commentsLink = document.createElement("A");
  commentsLink.href = "https://news.ycombinator.com/item?id=6815282";
  commentsLink.innerText = commentCount + " comments";
  infoCell.appendChild(commentsLink);

  newInfoRow.appendChild(infoCell);

  var newSeperatorRow = document.createElement("TR");
  newSeperatorRow.style.height = "5px";

  var randomEntryEl = entryEls[newIndex];
  var randomLinkRow = randomEntryEl[0];
  randomLinkRow.parentElement.insertBefore(newLinkRow, randomLinkRow);
  randomLinkRow.parentElement.insertBefore(newInfoRow, randomLinkRow);
  randomLinkRow.parentElement.insertBefore(newSeperatorRow, randomLinkRow);

  // <tr>
  //   <td align="right" valign="top" class="title">1.</td>
  //   <td><center><a id="up_6816649" onclick="return vote(this)" href="vote?for=6816649&amp;dir=up&amp;by=DouweM&amp;auth=233936d00f122fd9397ee384d1351f11998960e3&amp;whence=%6e%65%77%73"><div class="votearrow" title="upvote"></div></a><span id="down_6816649"></span></center></td>
  //   <td class="title">
  //     <a href="http://buttr.co/alone-san-francisco-thanksgiving-join-us/">
  //       Are you alone in San Francisco on Thanksgiving? Join Us. Really.
  //     </a>
  //     <span class="comhead"> (buttr.co) </span>
  //   </td>
  // </tr>
  // <tr>
  //   <td colspan="2"></td>
  //   <td class="subtext">
  //     <span id="score_6816649">84 points</span> by <a href="user?id=MediaSquirrel">MediaSquirrel</a> 1 hour ago  | 
  //     <a href="/r?fnid=xcNUGVKnGiRYQgcFAp16Ly">flag</a> | 
  //     <a href="item?id=6816649">12 comments</a>
  //   </td>
  // </tr>
});
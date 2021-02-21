function showHiddenParagraphs() {
  const classSelectors = [
    "body.premium-article:not(.article-shown)",
  ]

  classSelectors.forEach(classSelector => {
    document.querySelectorAll(classSelector).forEach(element => {
      //removeClassFromElement(element, "premium-article")
      element.classList.remove("premium-article")
    })
  });
}

// function removeClassFromElement(element, className) {
//   elementClassList = element.getAttribute("class")
//   let finalClassList = ""
//   elementClassList.split(" ").forEach(elem => {
//     //finalClassList += 
//   });

//   element.setAttribute("class", 
//     elementClassList.replace(className, "")
//   )
// }

function removeArticleBodyMaxHeight() {
  let articleWrapper = document.querySelector(".article-body-wrapper")
  if(articleWrapper != null) {
    articleWrapper.style.removeProperty("max-height")
    articleWrapper.style.removeProperty("overflow")
  }
}

function removePremiumPaywall() {
  document.querySelector(".premium-paywall").remove()
}

function showFullArticle() {
  removeArticleBodyMaxHeight()
  showHiddenParagraphs()
}

const paywallObserver = new MutationObserver(removePremiumPaywall)
paywallObserver.observe(
  document.querySelector("main"), 
  {
    attributes: true,
    childList: true,
    characterData: true
  }
)

const pageObserver = new MutationObserver(showFullArticle)
pageObserver.observe(
  document.querySelector("html"),
  {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true
  }
)
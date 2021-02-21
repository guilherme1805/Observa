function showHiddenParagraphs() {
  const classSelectors = [
    "body.premium-article:not(.article-shown)",
  ]

  classSelectors.forEach(classSelector => {
    document.querySelectorAll(classSelector).forEach(element => {
      element.classList.remove("premium-article")
    })
  });
}

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
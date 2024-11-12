

function ArticleCard({icon, blackHeading, colorHeading, paragraph, link, headingFlex}) {
  return (
    <div className=" flex flex-col w-4/5 p-10 text-left gap-2">
       <span><img src={icon} alt="article 1 icon"/></span>
       <h3 className={`flex ${headingFlex} text-2xl font-bold`}><span className="text-blue-600">{colorHeading}</span>&nbsp; <span> { blackHeading}</span></h3>
       <p className="text-gray-500">{paragraph}</p>
        <a href={link} className="text-blue-600">Discover More →</a>
    </div>
  )
}

export default ArticleCard
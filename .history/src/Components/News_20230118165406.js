import React, { Component } from 'react';

import { NewsItem } from './NewsItem';

export class News extends Component {
    articles = [
    {
      "source": {
        "id": "fox-news",
        "name": "Fox News"
      },
      "author": "Fox News",
      "title": "Ingraham: Democrats push censorship at Davos | Fox News Video",
      "description": "Rep Jim Banks says Dems are turning America upside-down with this globalist agenda and putting the rest of the world’s interests ahead of our own country.",
      "url": "https://www.foxnews.com/video/6318838528112",
      "urlToImage": "https://a57.foxnews.com/cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/6ed20721-f714-4d8b-9064-87a752fc52ff/429e8e7c-100a-4396-a1f8-ed8262ecbdce/1280x720/match/1024/512/image.jpg?ve=1&tl=1",
      "publishedAt": "2023-01-18T05:37:24.4189991Z",
      "content": "©2023 FOX News Network, LLC. All rights reserved. This material may not be published, broadcast, rewritten, or redistributed. All market data delayed 20 minutes."
    },
    {
      "source": {
        "id": "fox-news",
        "name": "Fox News"
      },
      "author": "Fox News",
      "title": "Biden owes the American people an explanation: John Yoo | Fox News Video",
      "description": "'Fox News @ Night' panelists John Yoo and Kaylee McGhee White discuss the Biden administration's response to the discovery of classified documents.",
      "url": "https://www.foxnews.com/video/6318839498112/",
      "urlToImage": "https://a57.foxnews.com/cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/439e83a5-3734-4f3b-96fb-5553d8b42485/82632769-581b-45d4-954e-4d1f31ad81ca/1280x720/match/1024/512/image.jpg?ve=1&tl=1",
      "publishedAt": "2023-01-18T05:37:22.6381929Z",
      "content": "©2023 FOX News Network, LLC. All rights reserved. This material may not be published, broadcast, rewritten, or redistributed. All market data delayed 20 minutes."
    },
    {
      "source": {
        "id": "fox-news",
        "name": "Fox News"
      },
      "author": "Fox News",
      "title": "Is CNN trying to challenge Gutfeld's spot in late-night comedy? | Fox News Video",
      "description": "Greg Gutfeld and his guests slam the report that CNN is looking to add a comedian into its primetime rotation on 'Gutfeld!'",
      "url": "https://www.foxnews.com/video/6318838297112",
      "urlToImage": "https://a57.foxnews.com/cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/608b21b5-6d27-40b9-9cad-0ab42c23703f/87efa3d2-2050-406e-9487-4fd70f92c221/1280x720/match/1024/512/image.jpg?ve=1&tl=1",
      "publishedAt": "2023-01-18T05:37:21.2791558Z",
      "content": "©2023 FOX News Network, LLC. All rights reserved. This material may not be published, broadcast, rewritten, or redistributed. All market data delayed 20 minutes."
    },
    {
      "source": {
        "id": "independent",
        "name": "Independent"
      },
      "author": "Arpan Rai",
      "title": "Ukraine-Russia news – live: Putin could order ‘final push’ on anniversary of invasion, officials fear",
      "description": "Ukraine-Russia war live updates",
      "url": "http://www.independent.co.uk/news/world/europe/ukraine-russia-war-putin-nuclear-weapons-b2264158.html",
      "urlToImage": "https://static.independent.co.uk/2023/01/13/07/Russia_Ukraine_44514.jpg?quality=75&width=1200&auto=webp",
      "publishedAt": "2023-01-18T04:59:00Z",
      "content": "For free real time breaking news alerts sent straight to your inbox sign up to our breaking news emails\r\nSign up to our free breaking news emails\r\nVladimir Putin could order his troops to make a fina… [+8121 chars]"
    },
    {
      "source": {
        "id": "fox-news",
        "name": "Fox News"
      },
      "author": "Fox News",
      "title": "Rep. James Comer responds to latest in Biden classified docs case | Fox News Video",
      "description": "House Oversight Committee James Comer joins 'Hannity' to comment on Hunter Biden connection to Wilmington home.",
      "url": "https://www.foxnews.com/video/6318833790112/",
      "urlToImage": "https://a57.foxnews.com/cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/6af66a93-ed99-4dfa-84ac-e6b5a8b22760/8e7f2850-bd87-45a0-ba08-f47d45fe10e1/1280x720/match/1024/512/image.jpg?ve=1&tl=1",
      "publishedAt": "2023-01-18T03:52:17.2940501Z",
      "content": "©2023 FOX News Network, LLC. All rights reserved. This material may not be published, broadcast, rewritten, or redistributed. All market data delayed 20 minutes."
    },
    {
      "source": {
        "id": "cbc-news",
        "name": "CBC News"
      },
      "author": "CBC News",
      "title": "B.C. university bullying and harassment investigation substantiates at least 10 allegations | CBC News",
      "description": "An investigation into bullying and harassment claims involving two senior leaders at Thompson Rivers University has found that some allegations were valid, according to a report released by the Kamloops institution on Tuesday.",
      "url": "http://www.cbc.ca/news/canada/british-columbia/tru-report-harassment-racism-allegations-substantiated-1.6717189",
      "urlToImage": "https://i.cbc.ca/1.3927994.1620768102!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/thompson-rivers-university.jpg",
      "publishedAt": "2023-01-18T03:22:19.5907558Z",
      "content": "An investigation into bullying and harassment claims involving two senior leaders at Thompson Rivers University has found that some allegations were valid, according to a report released by the Kamlo… [+2569 chars]"
    },
    {
      "source": {
        "id": "fox-news",
        "name": "Fox News"
      },
      "author": "Fox News",
      "title": "Candace Owens: Democrats are after brainwashing | Fox News Video",
      "description": "Candace Owens reacts to Democrat Rep. Sheila Jackson Lee's legislation that would make White people 'criticizing' minorities a federal crime on 'Tucker Carlson Tonight.'",
      "url": "https://www.foxnews.com/video/6318832483112",
      "urlToImage": "https://a57.foxnews.com/cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/9fa640fa-ab1c-46a0-b204-5b7d89f7bc85/4f0b8a7e-8466-4cca-be05-fe7aa5a8d374/1280x720/match/1024/512/image.jpg?ve=1&tl=1",
      "publishedAt": "2023-01-18T03:22:14.4499485Z",
      "content": "©2023 FOX News Network, LLC. All rights reserved. This material may not be published, broadcast, rewritten, or redistributed. All market data delayed 20 minutes."
    },
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": null,
      "title": "Nobel winner Maria Ressa, news outlet cleared of tax evasion",
      "description": "MANILA, Philippines (AP) — Nobel Peace Prize winner Maria Ressa and her online news company were cleared Wednesday of tax evasion charges she said were among a slew of legal cases used by former Philippine President Rodrigo Duterte to try to muzzle critical r…",
      "url": "https://apnews.com/ff0aac7c00ce11f0e0c3b8e052302534",
      "urlToImage": "https://storage.googleapis.com/afs-prod/media/d018739a26b3482d8dec8424a663b032/3000.jpeg",
      "publishedAt": "2023-01-18T03:04:28Z",
      "content": "MANILA, Philippines (AP) — Nobel Peace Prize winner Maria Ressa and her online news company were cleared Wednesday of tax evasion charges she said were among a slew of legal cases used by former Phil… [+3827 chars]"
    },
    {
      "source": {
        "id": "cbs-news",
        "name": "CBS News"
      },
      "author": "CBS News",
      "title": "Ex-GOP candidate charged with targeting Democrats in Albuquerque",
      "description": "A failed Republican candidate for the New Mexico state House has been arrested, accused by police of masterminding multiple shootings on local Democratic lawmakers in Albuquerque. CBS News congressional correspondent Scott MacFarlane discusses this case and t…",
      "url": "https://www.cbsnews.com/video/ex-gop-candidate-charged-targeting-democratic-lawmakers-albuquerque-new-mexico/",
      "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2023/01/18/e10c25b5-85fe-4ddc-98ea-34e138c691b4/thumbnail/1200x630/737c70253fc4da895121700596136b0a/cbsn-fusion-ex-gop-candidate-charged-targeting-democrats-figures-january-6th-riot-trial-thumbnail-1633485-640x360.jpg",
      "publishedAt": "2023-01-18T02:34:06+00:00",
      "content": "Watch CBS News\r\nCopyright ©2023 CBS Interactive Inc. All rights reserved.\r\nGet browser notifications for breaking news, live events, and exclusive reporting.\r\nNot NowTurn On"
    },
    {
      "source": {
        "id": "cbs-news",
        "name": "CBS News"
      },
      "author": "CBS News",
      "title": "California facing dangerous mudslides after storms",
      "description": "California is finally getting a dry spell after a series of deadly storms going back to late December. However, communities are still facing flooding and mudslide dangers. CBS News correspondent Kris Van Cleave joined John Dickerson to discuss the damage in t…",
      "url": "https://www.cbsnews.com/video/california-dangerous-mudslides-after-storms/",
      "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2023/01/18/85201d01-d5ac-4966-a2eb-88ced7e7ff49/thumbnail/1200x630/3e1a385318bdcc1a9c00968780899831/cbsn-fusion-california-facing-dangerous-mudslides-after-storms-thumbnail-1633492-640x360.jpg",
      "publishedAt": "2023-01-18T02:34:06+00:00",
      "content": "Watch CBS News\r\nCopyright ©2023 CBS Interactive Inc. All rights reserved.\r\nGet browser notifications for breaking news, live events, and exclusive reporting.\r\nNot NowTurn On"
    },
    {
      "source": {
        "id": "cbs-news",
        "name": "CBS News"
      },
      "author": "CBS News",
      "title": "1/17: CBS News Prime Time",
      "description": "John Dickerson reports on the trial over Elon Musk's Tesla tweets, the arrest of a GOP candidate accused of shootings targeting Democrats, and why China's population is declining.",
      "url": "https://www.cbsnews.com/video/117-cbs-news-prime-time-1/",
      "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2023/01/18/af0f2f08-8759-4290-86a9-b03a784462fd/thumbnail/1200x630/60b5af91bce4d65c88824398d44d580b/0117-pt-full-1633408-640x360.jpg",
      "publishedAt": "2023-01-18T02:04:04+00:00",
      "content": "Watch CBS News\r\nCopyright ©2023 CBS Interactive Inc. All rights reserved.\r\nGet browser notifications for breaking news, live events, and exclusive reporting.\r\nNot NowTurn On"
    },
    {
      "source": {
        "id": "cbc-news",
        "name": "CBC News"
      },
      "author": "CBC News",
      "title": "Skiers hoping to compete in world championships frustrated over Air Canada's late delivery of skis | CBC News",
      "description": "Nordic skiers competing to represent Canada were left sweating for the wrong reasons after their equipment failed to arrive on an Air Canada flight to Prince George, B.C.",
      "url": "http://www.cbc.ca/news/canada/british-columbia/lost-skis-prince-george-1.6716958",
      "urlToImage": "https://i.cbc.ca/1.6717138.1673994364!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/maurice-samm-with-ski-equipment-returned-by-air-canada.jpg",
      "publishedAt": "2023-01-18T01:22:20.8095925Z",
      "content": "Nordic skiers competing to represent Canada were left sweating for the wrong reasons after their equipment failed to arrive on an Air Canada flight to Prince George, B.C.\r\nThe Nordiq Cup World Champi… [+3157 chars]"
    },
    {
      "source": {
        "id": "google-news-in",
        "name": "Google News (India)"
      },
      "author": "Aniruddha Dhar",
      "title": "PM Modi's connect with Muslims advice to BJP workers 400 days before 2024 polls",
      "description": "Narendra Modi also suggested BJP workers refrain from making unnecessary remarks on irrelevant issues such as movies as they put the party's development agenda on the back-burner. | Latest News India",
      "url": "https://www.hindustantimes.com/india-news/pm-modi-s-connect-with-muslims-advice-to-bjp-workers-400-days-before-2024-polls-101674002487473.html",
      "urlToImage": "https://images.hindustantimes.com/img/2023/01/18/1600x900/ANI-20230116357-0_1674004074943_1674004074943_1674004088710_1674004088710.jpg",
      "publishedAt": "2023-01-18T01:13:43+00:00",
      "content": "Prime Minister Narendra Modi has called upon Bharatiya Janata Party (BJP) workers to reach out to minorities, including Muslims, without expecting votes. In his valedictory address at the BJP's two-d… [+1826 chars]"
    },
    {
      "source": {
        "id": "cbc-news",
        "name": "CBC News"
      },
      "author": "CBC News",
      "title": "Nobel laureate and journalist Maria Ressa acquitted by Philippine court | CBC News",
      "description": "Philippine Nobel laureate Maria Ressa and her news site Rappler were acquitted by a court of tax evasion charges on Wednesday, a judge said, handing Ressa a victory in a case the veteran journalist has described as part of a pattern of harassment.",
      "url": "http://www.cbc.ca/news/world/maria-ressa-tax-case-1.6716702",
      "urlToImage": "https://i.cbc.ca/1.6717380.1674003314!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/maria-ressa-interview-toronto.jpg",
      "publishedAt": "2023-01-18T01:07:21.1384134Z",
      "content": "Philippine Nobel laureate Maria Ressa and her news site Rappler were acquitted by a court of tax evasion charges on Wednesday, a judge said, handing Ressa a victory in a case the veteran journalist h… [+312 chars]"
    },
    {
      "source": {
        "id": "google-news-ca",
        "name": "Google News (Canada)"
      },
      "author": null,
      "title": "Nobel laureate and journalist Maria Ressa acquitted by Philippine court | CBC News",
      "description": "Philippine Nobel laureate Maria Ressa and her news site Rappler were acquitted by a court of tax evasion charges on Wednesday, a judge said, handing Ressa a victory in a case the veteran journalist has described as part of a pattern of harassment.",
      "url": "https://www.cbc.ca/news/world/maria-ressa-tax-case-1.6716702",
      "urlToImage": "https://i.cbc.ca/1.6717407.1674006102!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_620/philippines-media.JPG",
      "publishedAt": "2023-01-18T00:55:00+00:00",
      "content": "A Philippine tax court on Wednesday cleared Nobel Peace Prize winner Maria Ressa and her online news company of tax evasion charges she said were part of a slew of legal cases used by former Philippi… [+2974 chars]"
    },
    {
      "source": {
        "id": "abc-news",
        "name": "ABC News"
      },
      "author": "Lalee Ibssa, Julia Cherner",
      "title": "Golden State Warriors return to White House as NBA champs after avoiding Trump",
      "description": "Draymond Green told ABC News that the trip was an \"incredible honor.\"",
      "url": "https://abcnews.go.com/Politics/golden-state-warriors-return-white-house-nba-champs/story?id=96482368",
      "urlToImage": "https://s.abcnews.com/images/Politics/Warriors-biden-white-house-gty-mz-19-230117_1673987301242_hpMain_16x9_992.jpg",
      "publishedAt": "2023-01-18T00:18:37Z",
      "content": "The Golden State Warriors returned to the White House as national champions on Tuesday -- their first trip back since Barack Obama's presidency, despite winning two championships while former Preside… [+4355 chars]"
    },
    {
      "source": {
        "id": "cbc-news",
        "name": "CBC News"
      },
      "author": "CBC News",
      "title": "Turpel-Lafond voluntarily returns honorary doctorate to Vancouver Island University | CBC News",
      "description": "Vancouver Island University (VIU) says it has accepted Mary Ellen Turpel-Lafond's offer to return the honorary doctorate the university granted her in 2013, according to a VIU news release.",
      "url": "http://www.cbc.ca/news/canada/saskatchewan/turpel-lafond-voluntarily-returns-honorary-doctorate-vancouver-island-university-1.6717192",
      "urlToImage": "https://i.cbc.ca/1.5824043.1612414989!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/mary-ellen-turpel-lafond.jpg",
      "publishedAt": "2023-01-18T00:07:23.9845226Z",
      "content": "Vancouver Island University (VIU) says it has accepted Mary Ellen Turpel-Lafond's offer to return the honorary doctorate the university granted her in 2013, according to a VIU news release.\r\n\"Turpel-… [+1806 chars]"
    },
    {
      "source": {
        "id": "msnbc",
        "name": "MSNBC"
      },
      "author": null,
      "title": "MI Secy. of State: ‘Hateful rhetoric transcends into hateful actions’",
      "description": "Michigan Secretary of State Jocelyn Benson, former FBI Assistant Director for Counterintelligence Frank Figliuzzi, and NBC News Senior Capitol Hill Correspondent Garrett Haake weigh in on how the New Mexico shootings targeting Democratic leaders highlight a r…",
      "url": "https://www.msnbc.com/deadline-white-house/watch/mi-secy-of-state-hateful-rhetoric-transcends-into-hateful-actions-160068165988",
      "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/mpx/2704722219/2023_01/1673993435390_n_wh_deadline_benson_230117_1920x1080-trm1qk.jpg",
      "publishedAt": "2023-01-17T22:12:02Z",
      "content": null
    },
    
  ]
    constructor(){
        super();
        console.log("Hello I am constructor from News Component");
        this.state = {
            articles: this.articles,
            loading: false
    }
}

async componentDidCatch(){
    console.log("cdm")
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=12c50882365b459b917dc014159fcd84";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

}
    render() {
        console.log("render")
        return (
            <div className="container my-3">
                <h2>NewsLife - Top header</h2>
                <div className="row">
                {this.state.articles.map((element)=>{
                return  <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title. slice(0, 45)} description={element.description. slice(0, 88)} imageUrl={element.urlToImage} newsUrl={element.url}></NewsItem>
                        </div>
                })}
                    
                </div>
            </div>
        )
    }
}

export default News
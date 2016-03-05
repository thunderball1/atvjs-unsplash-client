import ATV from 'atvjs';

let template = (data) => {
  return `
    <document>
     <searchTemplate>
        <searchField/>
        <shelf>
           <header>
              <title>Popular</title>
           </header>
           <section>
              <lockup>
                 <img src="path to images on your server/Car_Movie_250x375_A.png" width="182" height="274" />
                 <title>Movie 1</title>
              </lockup>
           </section>
        </shelf>
     </searchTemplate>
  </document>

  `
}

let SearchPage = ATV.Page.create({
  template
})

export default SearchPage

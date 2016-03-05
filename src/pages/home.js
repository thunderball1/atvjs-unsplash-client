import ATV from 'atvjs';

const CLIENT_ID = 'b9288b9e4913497056fbdd1255c0147b6ed3e8e201811f2f3023f6fd5b9e3af0';

let HomePage = ATV.Page.create({
  name: 'home',
  template(data) {

    let tmpl;

    tmpl += `<?xml version="1.0" encoding="UTF-8" ?>
        <document>
         <showcaseTemplate mode="showcase">
            <background>
            </background>
            <carousel>
               <section>`;

    for (var i = 0; i < data.length; i++) {
      tmpl += '<lockup>';
      tmpl += '<img src="https://peaceful-dusk-20602.herokuapp.com/${ data[i].urls.regular }.jpg" />';
      tmpl += '</lockup>';
    }



    tmpl += `</section>
  </carousel>
</showcaseTemplate>
</document>`;

    return tmpl;
  },
  url: 'https://api.unsplash.com/photos?client_id=' + CLIENT_ID,
  data(response) {
    return response;
  }
});

export default HomePage;

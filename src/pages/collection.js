import ATV from 'atvjs';
import getImgUrls from '../utils/getImgUrls.js'

const CLIENT_ID = 'b9288b9e4913497056fbdd1255c0147b6ed3e8e201811f2f3023f6fd5b9e3af0';

let CollectionPage = ATV.Page.create({
  name: 'collection',
  template(data) {

    let tmpl = '';

    tmpl += `
        <document>
         <showcaseTemplate mode="showcase">
            <background>
            </background>
            <carousel>
               <section>`;

    for (var i = 0; i < data.length; i++) {
      tmpl += '<lockup data-action="showDetail">';
      tmpl += `<img src="https://peaceful-dusk-20602.herokuapp.com/${ data[i] }.jpg" />`
      tmpl += '</lockup>';
    }

    tmpl += `</section>
  </carousel>
</showcaseTemplate>
</document>`;

    return tmpl;
  },
  ready(options, resolve, reject) {
    let data = {
      id: options.id,
    };
    // perform ajax to get the data
    // the ajax method in the library returns an instance of the Promise object
    ATV
      .Ajax
      .get('https://api.unsplash.com/collections/' + data.id + '/photos?client_id=' + CLIENT_ID)
      .then((xhr) => {
        // xhr succeeded
        let response = xhr.response;

        resolve(response.map((photo) => {
          return getImgUrls(photo)
        }));

      }, (xhr) => {
        // xhr failed
        let response = xhr.response;
        reject({
          status: xhr.status,
          message: response.message
        });
      });
  }
});

export default CollectionPage;

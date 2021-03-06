import ATV from 'atvjs';
import HomePage from './pages/home.js';
import SearchPage from './pages/search.js';
import CollectionsPage from './pages/collections.js';
import CollectionPage from './pages/collection.js';

const CLIENT_ID = 'b9288b9e4913497056fbdd1255c0147b6ed3e8e201811f2f3023f6fd5b9e3af0';

const loaderTpl = () => `<document>
    <loadingTemplate>
        <activityIndicator>
            <title>Loading...</title>
        </activityIndicator>
    </loadingTemplate>
</document>`;

let Menu = ATV.Menu.create({
  // any attributes that you want to set on the root level menuBar element of TVML
  attributes: {},
  // array of menu item configurations
  items: [{
    id: 'home',
    name: 'Home',
    page: HomePage,
    attributes: {
      autoHighlight: true // auto highlight on navigate
    }
  }, {
    id: 'collections',
    name: 'Collections',
    page: CollectionsPage,
    attributes: {
      autoHighlight: false // auto highlight on navigate
    }
  }, {
    id: 'search',
    name: 'Search',
    page: SearchPage,
    attributes: {
      autoHighlight: false // auto highlight on navigate
    }
  }]
});

ATV.start({
  menu: Menu,
  templates: {
    loader: loaderTpl
  },
  handlers: {
    select: {
      globalSelectHandler(e) {
        let element = e.target;

        let action = element.getAttribute('data-action');

        if (action === 'showDetail') {

          let img = element.getElementsByTagName('img');

          let photo;
          photo = img.item(0).getAttribute('src');

          ATV.Navigation.presentModal({
            template () {
              return `<document>
                <oneupTemplate mode="oneup caption" allowsZooming="true">
                  <section>
                     <lockup data-action="dismissModal">
                        <img src="${ photo }" />
                     </lockup>
                  </section>
               </oneupTemplate>
              </document>`
            }
          });
        } else if(action === 'dismissModal') {
          ATV.Navigation.dismissModal();
        } else if(action === 'displayCollection') {


        }

      }
    }
  },
  onLaunch(options) {
    ATV.Navigation.navigateToMenuPage();
  }
});

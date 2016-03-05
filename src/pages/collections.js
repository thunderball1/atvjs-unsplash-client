import ATV from 'atvjs'
import getImgUrls from '../utils/getImgUrls.js'
import assign from 'object-assign'
const CLIENT_ID = 'b9288b9e4913497056fbdd1255c0147b6ed3e8e201811f2f3023f6fd5b9e3af0';

let template = ({ categories }) => {
  let parseCollections = (collections) => {
    return (collections || []).map((collection) => {
      return `<lockup data-action="displayCollection" data-collection-id="${ collection.id }">
         <img src="https://peaceful-dusk-20602.herokuapp.com/${ collection.photoId }.jpg" width="250" height="376" />
         <title>${ collection.title.replace(/&/g, '&amp;') || "" }</title>
      </lockup>`
    })
    .join('')
  }

  let parsedCollections = (categories || []).map((category) => {
    return `
      <listItemLockup data-type='category'>
        <title>${ category.title }</title>
       <decorationLabel>12</decorationLabel>
       <relatedContent>
          <grid>
             <section>
                ${ parseCollections(category.collections) }
             </section>
          </grid>
       </relatedContent>
    </listItemLockup>
    `
  })
  .join('')

  return `
  <document>
     <catalogTemplate>
        <banner>
           <title>Collections</title>
        </banner>
        <list>
           <section>
            ${ parsedCollections }
           </section>
        </list>
     </catalogTemplate>
  </document>`
}

let CollectionsPage = ATV.Page.create({
  name: 'collections',
  template,
  // url: 'https://api.unsplash.com/collections?client_id=' + CLIENT_ID,

  ready (options, resolve, reject) {
    Promise.all([
      ATV.Ajax.get('https://api.unsplash.com/collections?client_id=' + CLIENT_ID),
      ATV.Ajax.get('https://api.unsplash.com/collections/curated?client_id=' + CLIENT_ID)
    ])
    .then((resutls) => {
      resolve({
        categories: resutls.map((xhr, index) => {
          return {
            title: index === 1 ? 'All' : 'Currated',
            collections: (xhr.response || []).map((collection) => {
              return assign({}, collection, {
                photoId: getImgUrls(collection, 'cover_photo')
              })
            })
          }
        })
      })
    }, (error) => {
      reject(error)
    })
  },
  events: {
    select: 'onSelect'
  },
  onSelect(e) {
    let collectionId = e.target.getAttribute('data-collection-id');

    ATV.Navigation.navigate('collection', {id: collectionId});
  }
})

export default CollectionsPage

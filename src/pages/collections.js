import ATV from 'atvjs'
import getImgUrls from '../utils/getImgUrls.js'
import assign from 'object-assign'
const CLIENT_ID = 'b9288b9e4913497056fbdd1255c0147b6ed3e8e201811f2f3023f6fd5b9e3af0';

let template = (collections) => {
  let parsedCollections = (collections || []).map((collection) => {
    console.log('${ collection.title }', collection.title)
    return `<lockup>
       <img src="https://peaceful-dusk-20602.herokuapp.com/${ collection.photoId }.jpg" width="250" height="376" />
       <title>${ collection.title.replace(/&/g, '&amp;') || "" }</title>
    </lockup>`
  })

  return `
  <document>
     <catalogTemplate>
        <banner>
           <title>Collections</title>
        </banner>
        <list>
           <section>
              <listItemLockup>
                 <title>All</title>
                 <decorationLabel>6</decorationLabel>
                 <relatedContent>
                    <grid>
                       <section>
                          ${ parsedCollections.join('') }
                       </section>
                    </grid>
                 </relatedContent>
              </listItemLockup>
              <listItemLockup>
                 <title>Currated</title>
                 <decorationLabel>6</decorationLabel>
                 <relatedContent>
                    <grid>
                       <section>
                       </section>
                    </grid>
                  </relatedContent>
              </listItemLockup>
              <listItemLockup>
                 <title>Featured</title>
                 <decorationLabel>0</decorationLabel>
                 <relatedContent>
                    <grid>
                       <section>
                       </section>
                    </grid>
                  </relatedContent>
              </listItemLockup>
           </section>
        </list>
     </catalogTemplate>
  </document>`
}

let CollectionsPage = ATV.Page.create({
  name: 'collections',
  template,
  url: 'https://api.unsplash.com/collections?client_id=' + CLIENT_ID,
  data (response) {
    let collections = (response || []).map((collection) => {
      return assign({}, collection, {
        photoId: getImgUrls(collection, 'cover_photo')
      })
    })
    return collections
  }
})

export default CollectionsPage

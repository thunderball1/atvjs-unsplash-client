import ATV from 'atvjs';
import CollectionsPage from './pages/collections';

const CLIENT_ID = 'b9288b9e4913497056fbdd1255c0147b6ed3e8e201811f2f3023f6fd5b9e3af0';


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
    }]
});

ATV.start({
	menu: Menu,
	onLaunch(options) {
		ATV.Navigation.navigateToMenuPage();
	}
});

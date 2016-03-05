import ATV from 'atvjs';
// import HomePage from './pages/home';

const CLIENT_ID = 'b9288b9e4913497056fbdd1255c0147b6ed3e8e201811f2f3023f6fd5b9e3af0';

ATV.start({
	// menu: {
	// 	attributes: {},
	// 	items: [{
	// 		id: 'parade',
	// 		name: 'Tab 1'
	// 	}, {
	// 		id: 'catalog',
	// 		name: 'Tab 2'
	// 	}]
	// },
	onLaunch(options) {

    console.log('Launching');

		ATV.Navigation.navigate('home');
	}
});

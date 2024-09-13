import PocketBase from 'pocketbase';

export async function load() {
	const pb = new PocketBase('http://127.0.0.1:8090');
	return {
		test: await pb.collection('test').getFullList({
			sort: '-created',
		})
	};
}

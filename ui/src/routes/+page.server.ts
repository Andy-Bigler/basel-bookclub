import PocketBase from 'pocketbase';

export async function load() {
	const pb = new PocketBase('https://baselbookclubinternational.com/db'); // ToDo dynamic
	return {
		test: await pb.collection('test').getFullList({
			sort: '-created',
		})
	};
}

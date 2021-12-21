const addMember = (name) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			if (!name) {
				return resolve;
			}
			resolve(name);
		}, 500);
	});
};

const makeMemberList = async () => {
	let memberList = '';
	let _addMember = async (name) => {
		memberList += (memberList ? ', ' : '') + (await addMember(name));
	};
	await _addMember('memberC');
	console.log(memberList);
	await _addMember('memberB');
	console.log(memberList);
	await _addMember('memberA');
	console.log(memberList);
};

makeMemberList();
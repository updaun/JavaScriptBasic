const addMember = (name) => {
	return (prevName) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (!name) {
					reject(new Error('이름을 찾을 수 없습니다.'));
				} else {
					const newName = prevName ? `${prevName}, ${name}` : name;
					console.log(newName);
					resolve(newName);
				}
			}, 500);
		});
	};
};

addMember('memberC')()
	.then(addMember('memberB'))
	.then(addMember('memberA'))
	.catch(console.error);
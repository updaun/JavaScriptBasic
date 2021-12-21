setTimeout(
	(name) => {
		let memberList = '';
		if (!name) {
			throw new Error('이름을 찾을 수 없습니다.');
		} else {
			memberList += ', ' + name;
			console.log(memberList);
		}
		console.log(memberList);
		setTimeout(
			(name) => {
				if (!name) {
					throw new Error('이름을 찾을 수 없습니다.');
				} else {
					memberList += ', ' + name;
					console.log(memberList);
				}

				setTimeout(
					(name) => {
						if (!name) {
							throw new Error('이름을 찾을 수 없습니다.');
						} else {
							memberList += ', ' + name;
							console.log(memberList);
						}
					},
					500,
					'memberA',
				);
			},
			500,
			'memberB',
		);
	},
	500,
	'memberC',
);
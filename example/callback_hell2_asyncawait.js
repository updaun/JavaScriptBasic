class UserStorage {
    async loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(
                    (id === 'daun' && password === 'updaun') ||
                    (id === 'hymin' && password === 'lleague')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    }

    async getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'daun') {
                    resolve({name:'daun', role: 'admin'});
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

async function loginAndGetRoles(userStorage, id, password) {
    try {
        const loggedInUser = await userStorage.loginUser(id, password);
        const roles = await userStorage.getRoles(loggedInUser);
        alert(`Hello ${roles.name}, you have a ${roles.role} role`);
    } catch(error) {
        console.log(error);
    }
}

loginAndGetRoles(userStorage, id, password);
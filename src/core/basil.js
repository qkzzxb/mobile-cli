import Basil from 'basil'
const basil = new window.Basil({
    namespace: 'ss',
    storages: ['cookie', 'session', 'local'],
    storage: 'session',
    expireDays: 0.1
});
export default basil;
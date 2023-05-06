import './styles/index.scss';
import './assets/icons/sprite.svg';
import App from './pages/app';
import { fixLocalStorageBug } from './components/controller/fixLocalStorageBug';

fixLocalStorageBug();

const app = new App();
app.run();

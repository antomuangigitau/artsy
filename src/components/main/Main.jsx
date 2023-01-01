import Creators from './Creators';
import Explore from './Explore';
import Featured from './Featured';
import Flip from './Flip';
import Upcoming from './Upcoming';
const Main = () => {
  return (
    <main>
      <Flip />
      <Featured />
      <Upcoming />
      <Explore />
      <Creators />
    </main>
  );
};

export default Main;

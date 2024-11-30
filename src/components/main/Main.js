import ListBox from "./listBox/ListBox";
import WatchedBox from "./watchedBox/WatchedBox";


export default function Main({ movies, tempWatchedData }) {

  return (
    <main className="main">
      <ListBox movies={movies} />
      <WatchedBox tempWatchedData={tempWatchedData} />
    </main>
  );
}

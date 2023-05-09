type MusicKey = {
  char: 'A' | 'A#' | 'B' | 'C' | 'C#' | 'D' | 'D#' | 'E' | 'F' | 'F#' | 'G' | 'G#';
  key: string;
};

const musicKeys: MusicKey[] = [
  {
    char: 'A',
    key: 'a',
  },
  {
    char: 'A#',
    key: 'w',
  },
  {
    char: 'B',
    key: 's',
  },
  {
    char: 'C',
    key: 'd',
  },
  {
    char: 'C#',
    key: 'r',
  },
  {
    char: 'D',
    key: 'f',
  },
  {
    char: 'D#',
    key: 't',
  },
  {
    char: 'E',
    key: 'g',
  },
  {
    char: 'F',
    key: 'h',
  },
  {
    char: 'F#',
    key: 'u',
  },
  {
    char: 'G',
    key: 'j',
  },
  {
    char: 'G#',
    key: 'i',
  },
];

function App() {
  return (
    <>
      {musicKeys.map((mkey) => (
        <button type="button" key={mkey.key}>
          {mkey.char}
        </button>
      ))}
    </>
  );
}

export default App;

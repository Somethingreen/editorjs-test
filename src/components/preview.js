import Output from 'editorjs-react-renderer';

export function Preview({ data }) {
  const style = {
    image: {
      figure: { alignItems: 'start' }
    }
  };
  return <Output data={data} style={style} />;
}

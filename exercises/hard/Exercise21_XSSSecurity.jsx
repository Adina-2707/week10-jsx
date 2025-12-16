function HtmlBlock({ html }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  );
}

export default HtmlBlock;

export default (props) => {
  return (
    <div style={{ width: 400, background: '#f7f7f7' }}>
      <h2> 文章列表 </h2>
      {props.children}
    </div>
  );
}
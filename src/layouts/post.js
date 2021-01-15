export default (props) => {
  return (
    <div style={{ width: '100%', height: '100%', background: '#f7f7f7' }}>
      <h2> 文章公共布局 </h2>
      {props.children}
    </div>
  );
};

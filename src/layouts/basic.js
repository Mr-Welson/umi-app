import './basic.less';

export default (props) => {
  return (
    <div className="basic-layout">
      <div className="basic-header"> 头部 </div>
      <div className="basic-content">
        {props.children}
      </div>
      <div className="basic-footer"> 底部 </div>
    </div>
  );
}